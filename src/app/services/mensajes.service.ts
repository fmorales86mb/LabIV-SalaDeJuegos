import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private dbpath = '/mensajes';
  mensajeRef: AngularFirestoreCollection<any>;

  constructor(private db:AngularFirestore) { 
    this.mensajeRef = db.collection(this.dbpath);
  }

  getAll():AngularFirestoreCollection<any> {
    return this.mensajeRef;
  }

  create(mensaje: any){
    this.mensajeRef.add({...mensaje});
  }
}
