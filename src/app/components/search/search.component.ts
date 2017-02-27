import { Component, OnInit } from '@angular/core';
// importar el servicio a consumir
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    termino:string = ""; // utilizo el ngModel para cambiar la var

    constructor(private _spotifyService:SpotifyService) { }

    ngOnInit() {

    }

    searchArtist(){
        // paso el valor del termino que obtengo desde el ngModule del html
        this._spotifyService.getArtistas( this.termino )
            // para escuchar la respuesta del observable hay que subscribirse
            .subscribe();
    }

}
