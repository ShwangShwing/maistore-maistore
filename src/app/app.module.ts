import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { PublicModule } from './public/public.module';
import { PrivateWorkerModule } from './private-worker/private-worker.module';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PublicModule,
    PrivateWorkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
