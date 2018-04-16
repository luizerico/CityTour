import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieXSRFStrategy, HttpModule, XSRFStrategy } from '@angular/http';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { RouterModule } from '@angular/router';
import { PictureModule } from './picture/picture.module';
import { MapModule } from './map/map.module';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    HttpModule,

    // Router Module
    RouterModule.forRoot(routes, { useHash: true }),
    
    CoreModule,
    AccountModule,
    PictureModule,
    MapModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
