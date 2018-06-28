import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent  {

  searchParam:string = '';

  constructor( public _spotify:SpotifyService) { }

  findArtist(searchParam)
  {
    this._spotify.getArtist(searchParam).subscribe( json_response =>{
          console.log(json_response);
          return json_response;
    });
}


}
