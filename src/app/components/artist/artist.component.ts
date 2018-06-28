import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {

  artistInfo:any = {};
  id:string = '';
  constructor(public _get:ActivatedRoute,
              public _spotify:SpotifyService) {
//INFO ARTIST
        this._get.params.subscribe(
          data=>{
             this._spotify.getArtistData(data['id']).subscribe(
               artist=>{
                 this.artistInfo = artist;
                 console.log(this.artistInfo);
               }
             )
          }
        )
        //TOP tracks
        this._get.params.subscribe(
          top=>{
              this._spotify.getTopTrack(top['id']).subscribe(
                 top_music=>{
                    console.log(top_music);
                 }
              )
          }
      )

 }
}
