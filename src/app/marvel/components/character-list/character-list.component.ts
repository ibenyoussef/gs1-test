import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadCharacters } from '../../store/actions/character.actions';
import * as characterSelector from '../../store/selectors/character.selectors';
import { Character } from '../../store/models/character.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {

  characters$: Observable<Character[]>;
  limit = 12;
  page = 1;
  totalRows$: Observable<number>;

  get offset(): number {   
    return (this.page - 1) * this.limit;
  }

  constructor(
    private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadCharacters({ limit: this.limit, offset: this.offset}));
    

    this.characters$ = this.store.pipe(select(characterSelector.getCharacters));
    this.totalRows$ = this.store.pipe(select(characterSelector.getCharacterTotal));
  }


  pageChanged(event: any): void {
    this.page = event.page;
    this.store.dispatch(new LoadCharacters({ limit: this.limit, offset: this.offset}));

  }

}
