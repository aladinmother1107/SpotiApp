import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  getArtistas(termino:string){

    //let headers = new Headers();
    //headers.append('authorization', 'Bearer BQCu2uwXZOv5zehWe28hdeOb39eWMwTA-1H25xSNEJX0LEQFqcNCUSZuv3Nu2CnzM9geA5OToSXn8WBZEYoEpg');


    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url)
            .map( res => {
              console.log(res);
              //this.artistas = res.json().artists.items;
            } )

  }

}
