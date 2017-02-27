import { Injectable } from '@angular/core';
// para observable
import { Http } from '@angular/http';
import 'rxjs';


@Injectable()
export class SpotifyService {
    artistas: any[] = [];
    urlSpotify:string = "https://api.spotify.com/v1/search";
    urlSpotifyArtist:string = "https://api.spotify.com/v1/artists";

    constructor(private _http:Http) { }

    // obtener listado de artistas url completa del servicio debe ser:
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
                // de todo el arreglo, solo! obtengo los items de artistas
                    // console.log(res.json().artists.items);
                    this.artistas = res.json().artists.items;
                    console.log(this.artistas);

                    return res.json().artists.items;
                })

    }

    // obtener el artista
    getArtista(id:string) {
        // la consulta
        let query = `/${id}`;
        // url del api rest para el artista
        let url = this.urlSpotifyArtist + query;

        return this._http.get( url )
            .map( res => {
                console.log(res.json());
                // convierto en json el arreglo que obtengo.
                return res.json();
            })
    }

}

// DOCUMENTATION
// - importar utilizando el http y rxjs (para los observables)
// - api rest: ejemplo de spotify
// https://api.spotify.com/v1/search?q=nombre_interprete&type=artist
// - separar la url en la sección principal y la consulta.
// - las funciones reciben un valor que es el que sirve en la query
// y devuelven un mapeo con respuesta correcta y error.
