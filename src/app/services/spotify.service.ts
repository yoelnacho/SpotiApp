import { Injectable } from '@angular/core';
// para observable
import { Http } from '@angular/http';
import 'rxjs';


@Injectable()
export class SpotifyService {
    artistas: any[] = [];
    urlSpotify:string = "https://api.spotify.com/v1/search";

    constructor(private _http:Http) { }

    // obtener el artista url completa del servicio debe ser:
    // "https://api.spotify.com/v1/search?q=metallica&type=artist"
    // la primera parte se encuentra en urlSpotify y la consulta en query
    getArtistas(termino: string) {
        // creo los parámetros de búqeda
        let query = `?q=${termino}&type=artist`;
        // concateno la url con la consulta
        let url = this.urlSpotify + query;

        // al demorar en devolver la data pedida se genera
        // una promesa o un observable
        return this._http.get( url )
                // convertimos la respuesta en un objeto
                .map( res => {
                // obtener todo
                    // console.log(res);
                // para obtener solo el body
                    // console.log(res.json());
                // obtener solos los items de artistas
                    // console.log(res.json().artists.items);
                    this.artistas = res.json().artists.items;
                    console.log(this.artistas);

                    return res.json().artists.items;
                })

    }

}
