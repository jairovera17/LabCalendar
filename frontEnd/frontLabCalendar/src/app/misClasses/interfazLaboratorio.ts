import {ModeloComputador} from './interfazModeloComputador';
import {Software} from './interfazSoftware';
/**
 * Created by root on 03/07/17.
 */

export class Laboratorio {
  constructor(
    public id: number,
    public nombre: string,
    public numeroAula: string,
    public numeroComputadoras: string,
    public idModeloComputador: ModeloComputador,
    public idSoftware: Software[]
  ) {}
}
