import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/shared/search/search.component';
import { FormsModule } from '@angular/forms';


//APP Routes
import {APP_ROUTING} from './app.routes';
//SERVICES
import {SpotifyService} from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageValidatorPipe } from './pipes/image-validator.pipe';
import {ArtistComponent} from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    ImageValidatorPipe,
    ArtistComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
