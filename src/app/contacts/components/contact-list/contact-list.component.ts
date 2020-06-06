import { Component, OnInit } from '@angular/core';
import { AddContact } from '../../store/actions/contact.actions';
import { Store, select } from '@ngrx/store';
import * as contactSelector from '../../store/selectors/contact.selectors';
import { Contact } from '../../store/models/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  
  constructor(
    private store: Store) { }
    
  ngOnInit(): void {


    this.contacts$ = this.store.pipe(select(contactSelector.getContacts));
  }

}
