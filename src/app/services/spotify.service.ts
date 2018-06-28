import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"; // MAP operator
import {ActivatedRoute} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  arrayArtist:any[] = [];
  arrayArtistInfo:any[] = [];
  arrayTop:any[] = [];
  token = 'Bearer BQD3Od4m5yHuyMwWsBuBl80JYtDzRCdghymXNfI_Od4WkL7Sh4IAAeVWFtL4rsc4qVbvFIycu7oXqdXcC50'
  constructor( public _get:HttpClient ) {

  }
  getArtist(query)
  {
    let url = 'https://api.spotify.com/v1/search?query='+query+'&type=artist&market=US&limit=10';

    let headers = new HttpHeaders({
        'authorization': this.token
    }); // TOKEN

       return this._get.get(url, {headers}).pipe(map( (json_response:any)=>{
          this.arrayArtist = json_response.artists.items;
          return this.arrayArtist;
       }));
  }
  getArtistData(id:string)
  {
    let artist_url = 'https://api.spotify.com/v1/artists/'+id;
      let headerArtist = new HttpHeaders({
          'authorization': this.token
      });
        return this._get.get(artist_url,{headers:headerArtist});
  }
  getTopTrack(id:string)
  {
    let top_url = 'https://api.spotify.com/v1/artists/'+id+'/top-tracks?country=US';
    let headerTop = new HttpHeaders({
        'authorization': this.token
    });
    return this._get.get(top_url,{headers:headerTop}).pipe(
      map( (top:any)=>{
        this.arrayTop = top.tracks
        return this.arrayTop;
      })
    )
  }
}
