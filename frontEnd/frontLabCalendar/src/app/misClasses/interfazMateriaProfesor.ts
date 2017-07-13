import {Materia} from './interfazMateria';
import {Profesor} from './interfazProfesor';
/**
 * Created by root on 03/07/17.
 */
export class MateriaProfesor {
  constructor(
    public id: number,
    public grupo: string,
    public idMateria: Materia,
    public idProfesor: Profesor
  ) {
  }
}
