import { Component} from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'

})
export class SearchComponent {
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
