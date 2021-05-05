import { Pipe, PipeTransform } from '@angular/core';
import { Tipo } from '../models';


@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo: Tipo, args?: any): string {
    return this.obterTexto(tipo);
  }

  obterTexto(tipo: Tipo): string {
    let tipoDesc: string;
    switch (tipo) {
      case Tipo.INICIO_TRABALHO:
        tipoDesc = 'Início de trabalho';
        break;
      case Tipo.INICIO_ALMOCO:
        tipoDesc = 'Início de almoço';
        break;
      case Tipo.TERMINO_ALMOCO:
        tipoDesc = 'Término de almoço';
        break;
      case Tipo.TERMINO_TRABALHO:
        tipoDesc = 'Término de trabalho';
        break;
      default:
        tipoDesc = tipo;
        break;
    }
    return tipoDesc;
  }

}
