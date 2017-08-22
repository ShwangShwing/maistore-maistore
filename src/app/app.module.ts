import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { PublicModule } from './public/public.module';
import { PrivateWorkerModule } from './private-worker/private-worker.module';

import { appRoutes } from './app.routes';

export const firebaseConfig = {
  apiKey: 'AIzaSyCPR3i_Jba33tqXYD-2_MynK9DhqZNy_XQ',
  authDomain: 'maistore-maistore.firebaseapp.com',
  databaseURL: 'https://maistore-maistore.firebaseio.com',
  projectId: 'maistore-maistore',
  storageBucket: 'maistore-maistore.appspot.com',
  messagingSenderId: '639190553847'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    PublicModule,
    PrivateWorkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
