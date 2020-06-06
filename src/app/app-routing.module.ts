import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './marvel/components/character-list/character-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'marvel/characters', pathMatch: 'full' },
  {
    path: 'marvel',
    loadChildren: () => import('./marvel/marvel.module').then(mod => mod.MarvelModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(mod => mod.ContactsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
