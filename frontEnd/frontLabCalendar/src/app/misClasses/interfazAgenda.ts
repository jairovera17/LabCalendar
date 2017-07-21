import {MateriaProfesor} from './interfazMateriaProfesor';
import {Laboratorio} from './interfazLaboratorio';
/**
 * Created by Jairo on 29/06/2017.
 */

export class AgendaLaboratorio {
  constructor(

    public horaInicio: number,
    public idLaboratorio: Laboratorio,
    public horaFin?: number,
    public observacion?: string,
    public idMateriaProfesor?: MateriaProfesor,
    public fechaInicio?: Date,
    public fechaFin?: Date,
    public dia?:number

  ) {}
}

