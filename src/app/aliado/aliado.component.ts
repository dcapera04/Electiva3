import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { Aliado } from '../aliado/models/aliado';

@Component({
  selector: 'app-aliado',
  templateUrl: './aliado.component.html',
  styleUrls: ['./aliado.component.scss']
})
export class AliadoComponent implements OnInit {

  tipo_convenio: string;
  sector: string;
  subsector: string;
  nombre_entidad: string;
  descripcion_convenio: string;
  contactos_internos: string;
  contactos_externos: string;
  proyectos_interinstitucionales: string;
  mensaje: string;

  aliado: Aliado [];
  idaliado: string;


  constructor(public crudservices: CrudService) { }

  ngOnInit() {
    this.crudservices.getAliados().subscribe(data => {
        this.aliado = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as Aliado
          };
        });
      });
    }

    btnCreate()
{
    let objAliado: Aliado = {
tipo_convenio: this.tipo_convenio,
sector: this.sector,
subsector: this.subsector,
nombre_entidad: this.nombre_entidad,
descripcion_convenio: this.descripcion_convenio,
contactos_internos: this.contactos_internos,
contactos_externos: this.contactos_externos,
proyectos_interinstitucionales: this.proyectos_interinstitucionales
  };
    this.create(objAliado);
    this.limpiar();

  }
create(aliado: Aliado){
this.crudservices.createAliado(aliado);
}

btnUpdate(aliado: Aliado){
  this.idaliado = aliado.id;
  this.tipo_convenio = aliado.tipo_convenio;
  this.sector = aliado.sector;
  this.subsector = aliado.subsector;
  this.nombre_entidad = aliado.nombre_entidad;
  this.descripcion_convenio = aliado.descripcion_convenio;
  this.contactos_internos = aliado.contactos_internos;
  this.contactos_externos = aliado.contactos_externos;
  this.proyectos_interinstitucionales = aliado.proyectos_interinstitucionales;
}

accionUpdate(){
let objAliado: Aliado = {
  id: this.idaliado,
  tipo_convenio: this.tipo_convenio,
  sector: this.sector,
  subsector: this.subsector,
  nombre_entidad: this.nombre_entidad,
  descripcion_convenio: this.descripcion_convenio,
  contactos_internos: this.contactos_internos,
  contactos_externos: this.contactos_externos,
  proyectos_interinstitucionales: this.proyectos_interinstitucionales
};
this.update(objAliado);
this.limpiar();
}

update(aliado: Aliado){
this.crudservices.UpdateAliado(aliado);
}

delete(aliado: Aliado) {
  this.crudservices.DeleteAliado(aliado);
}

limpiar() {
this.idaliado = undefined;
this.tipo_convenio = undefined;
this.sector = undefined;
this.subsector = undefined;
this.nombre_entidad = undefined;
this.descripcion_convenio = undefined;
this.contactos_internos = undefined;
this.contactos_externos = undefined;
this.proyectos_interinstitucionales = undefined;
}

  }
