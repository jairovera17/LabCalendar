/**
 * Created by Jairo on 29/06/2017.
 */

export class Profesor {
  constructor(
    public id?: number,
    public nombres?: string,
    public apellidos?: string,
    public ultimoTitulo?: string,
    public telefono1?: string,
    public telefono2?: string,
    public correo?: string,
    public editable?:boolean

  ) {}
}
