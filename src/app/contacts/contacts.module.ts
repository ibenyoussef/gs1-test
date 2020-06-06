import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ContactAddComponent } from './components/contact-add/contact-add.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromContact from './store/reducers/contact.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './store/effects/contact.effects';
import * as storageMetaReducer  from './store/reducers/storage.metareducer';
import {merge, pick} from 'lodash-es';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

// the keys from state which we'd like to save.
const stateKeys = ['contacts'];
// the key for the local storage.
const localStorageKey = '__app_storage__';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  let onInit = true; // after load/refresh…
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
     // reduce the nextState.
    const nextState = reducer(state, action);
     // init the application state.
    if (onInit) {
       onInit           = false;
       const savedState = getSavedState(localStorageKey);
       return merge(nextState, savedState);
     }
     // save the next state to the application storage.
    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}
 
export const metaReducers: MetaReducer<any>[] = [debug];


const routes: Routes = [
  { path: '', component: ContactComponent },
];

@NgModule({
  declarations: [ContactAddComponent, ContactListComponent, ContactComponent],
  exports: [ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromContact.contactFeatureKey,
      fromContact.reducer,{ metaReducers }
      ),
    EffectsModule.forFeature([ContactEffects]),
  ]
})
export class ContactsModule { }
