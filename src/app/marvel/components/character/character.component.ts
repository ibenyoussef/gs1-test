import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../store/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input('character-data') data: Character;


  get thumbnail(): string {
    return this.data.thumbnail.path + '/standard_medium.' + this.data.thumbnail.extension;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
