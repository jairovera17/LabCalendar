import {MateriaProfesor} from './interfazMateriaProfesor';
import {Laboratorio} from './interfazLaboratorio';
/**
 * Created by Jairo on 29/06/2017.
 */

export class AgendaLaboratorio {
  constructor(
    public fechaInicio: Date,
    public fechaFin: Date,
    public horaInicio: number,
    public horaFin: number,
    public observacion: string,

    public materiaProfesor: MateriaProfesor,
    public laboratorio: Laboratorio
  ) {}
}

