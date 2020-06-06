import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {  AddContact } from '../../store/actions/contact.actions';
import { Contact } from '../../store/models/contact.model';

import * as contactSelector from '../../store/selectors/contact.selectors';


@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  _nextid: number;
  contactFormGroup: FormGroup = this.fb.group({

    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dateOfBirdh: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])

  });

  

  onSubmit() {
    let contact: Contact = {
      id: this._nextid,
      name: this.contactFormGroup.get('name').value,
      lastName: this.contactFormGroup.get('lastName').value,
      dateOfBirdh: this.contactFormGroup.get('dateOfBirdh').value,
      email: this.contactFormGroup.get('email').value,
    };
    this.store.dispatch(new AddContact({ contact }));
    this.contactFormGroup.reset();
  }

  constructor(
    private fb: FormBuilder,
    private store: Store) { }

  ngOnInit(): void {


    this.store.pipe(select(contactSelector.getNexContactId)).subscribe(nextid => this._nextid = nextid);

  }

}
