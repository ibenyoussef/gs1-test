import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCharacter from './store/reducers/character.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './store/effects/character.effects';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'characters', component: CharacterListComponent }
];

@NgModule({
  declarations: [CharacterListComponent, CharacterComponent],
  exports: [CharacterListComponent, CharacterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromCharacter.characterFeatureKey, fromCharacter.reducer),
    EffectsModule.forFeature([CharacterEffects])
  ]
})
export class MarvelModule { }
