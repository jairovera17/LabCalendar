import {Materia} from './interfazMateria';
import {Profesor} from './interfazProfesor';
/**
 * Created by root on 03/07/17.
 */
export class MateriaProfesor {
  constructor(
    public idMateriaProfesor: number,
    public grupo: string,
    public materia: Materia,
    public profesor: Profesor
  ) {
  }
}
