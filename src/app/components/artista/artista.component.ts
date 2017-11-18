import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artista',
    templateUrl: './artista.component.html',
    styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

    artista:any;
    pistas:any[];

    constructor(
        private _activatedRoute:ActivatedRoute,
        private _spotifyService:SpotifyService,
    ) { }

    ngOnInit() {
        // obterner el parámetro url id - trae todo el objeto del artista.
        this._activatedRoute.params
            .map(parametros => parametros['id'])
            .subscribe( id => {
                
                // mediante la funcion getArtista obtengo el objeto artista.
                this._spotifyService.getArtista(id)
                    // el objeto que recibo en data, lo almaceno en artista.
                    .subscribe( data => this.artista = data );

                this._spotifyService.getTop(id)
                    // el objeto que recibo en data, lo almaceno en artista.
                    .subscribe( data => this.pistas = data );
            });
    }
}
