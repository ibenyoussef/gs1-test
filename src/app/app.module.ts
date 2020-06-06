import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './layout/header/header.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MarvelModule } from './marvel/marvel.module';
import { SharedModule } from './shared/shared.module';


export const MARVEL_API_BASE_URL = new InjectionToken<string>('MARVEL_API_BASE_URL');
export const MARVEL_API_PUB_KEY = new InjectionToken<string>('MARVEL_API_PUB_KEY');
export const MARVEL_API_SEC_KEY = new InjectionToken<string>('MARVEL_API_SEC_KEY');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    SharedModule
  ],
  providers: [
    { provide: MARVEL_API_BASE_URL, useValue: 'https://gateway.marvel.com' },
    { provide: MARVEL_API_PUB_KEY, useValue: '71e9f474736ba8d75c99b2c7d4a8bef6' },
    { provide: MARVEL_API_SEC_KEY, useValue: 'eb60a09768607d1c3a594623239e6031cf9caf8d' },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
