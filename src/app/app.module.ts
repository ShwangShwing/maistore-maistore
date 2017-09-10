import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ReflectiveInjector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/data/users.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { PublicModule } from './public/public.module';
import { PrivateWorkerModule } from './private-worker/private-worker.module';

import { RootRoutingModule } from './root-routing/root-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RootRoutingModule,
    PublicModule,
    PrivateWorkerModule
  ],
  providers: [
    AuthService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
