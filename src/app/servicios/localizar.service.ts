import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { map } from 'rxjs/operators';

export interface rutas {
  mes: string;
  dia: string;
  hora: string;
  longitud: string;
  latitud: string;
  id: string;
}

export interface usuario {
  id: string;
  img: string;
}

export interface location {
  latitud: string, 
  longitud: string, 
  ruta: string,
  hora: string,
  minutos: string,
  user:string
}

@Injectable({
  providedIn: 'root'
})
export class LocalizarService {


  constructor(
    public angularFireStore: AngularFirestore,
    private geolocation: Geolocation,

  ) { }

  coleccionUbicaciones: AngularFirestoreCollection<any>;
  localizar(email: string) {
    let date = new Date()
    var dia = date.getDate().valueOf();
    var mes = date.getMonth().valueOf();
    this.angularFireStore.collection('routes').add({
      user: email,
      fecha: 'Mes: ' + (mes + 1) + ', dia: ' + dia
    });

    setInterval(() => {
      let watch = this.geolocation.getCurrentPosition();

      watch.then(data => {
        let date = new Date()
        var hora = date.getHours().valueOf();
        var minuto = date.getMinutes().valueOf();
        this.angularFireStore.collection('locations').add({
          ruta: 'Mes: ' + (mes + 1) + ', dia: ' + dia,
          user: email,
          latitud: data.coords.latitude,
          longitud: data.coords.longitude,
          hora: hora,
          minutos: minuto
        });
      })

    }, 60000)
  }


 
  getUserCollection(){
    return this.angularFireStore.collection('users').snapshotChanges().pipe(map(usuarios => {
      return usuarios.map(usuario => {
        const data = usuario.payload.doc.data() as usuario;
        data.id = usuario.payload.doc.id;
        return data
      })
    }));

  }


  getUserLocation(fecha:string, user:string){

    return this.angularFireStore.collection('locations', ref=>ref.where("user", "==", user)).snapshotChanges().pipe(map(locations => {
      return locations.map(location => {
        const data = location.payload.doc.data() as location;
        if(data.ruta == fecha){
          data.user = location.payload.doc.id;
          console.log("si, si, si")
        return data
        } 
      })
    }))

  }

  getRealTimeLocation() {
    let date = new Date()
    var dia = date.getDate().valueOf();
    var mes = date.getMonth().valueOf();

    return this.angularFireStore.collection('locations', ref=>ref.where("ruta", "==", 'Mes: ' + (mes + 1) + ', dia: ' + dia)).snapshotChanges().pipe(map(locations => {
      return locations.map(location => {
        const data = location.payload.doc.data() as location;
        data.user = location.payload.doc.id;
        return data
      })
    }))

  }

  getUserRoutes(email: string) {

    return this.angularFireStore.collection('routes', ref=>ref.where("user", "==", email)).snapshotChanges().pipe(map(rutas => {
      return rutas.map(ruta => {
        const data = ruta.payload.doc.data() as rutas;
        data.id = ruta.payload.doc.id;
        return data
      })
    }));

  }



}
