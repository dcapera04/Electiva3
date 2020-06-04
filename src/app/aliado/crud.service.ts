import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Aliado } from "../aliado/models/aliado";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

constructor(public fireservices: AngularFirestore) { }

getAliados() {
  return this.fireservices.collection('aliados').snapshotChanges();
}

createAliado(aliado: Aliado)
{
return this.fireservices.collection('aliados').add(aliado);
}

UpdateAliado(aliado: Aliado){
  return this.fireservices.doc('aliados/' + aliado.id).update(aliado);

}
DeleteAliado(aliado: Aliado){
  return this.fireservices.doc('aliados/' + aliado.id).delete();
}
}
