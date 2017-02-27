import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

    defaultImg:string = "assets/img/noimage.png";

    // el value que va a recibir es artista.images desde el html
    transform(value: any, args?: any): any {
        // si no viene algún valor devuelve una img por defecto
        if (!value) {
            return this.defaultImg;
        }
        // si el arreglo tiene más de 0 posiciones devuelve value[1].url
        return ( value.length > 0 ) ? value[1].url : this.defaultImg;
    }
}
