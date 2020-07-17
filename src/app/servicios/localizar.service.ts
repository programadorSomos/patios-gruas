import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { User } from '../clases/user';
import { map } from 'rxjs/operators';

export interface Rutas {
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

@Injectable({
  providedIn: 'root'
})
export class LocalizarService {




  constructor(
    public angularFireStore: AngularFirestore,
    private geolocation: Geolocation,

  ) { }

  coleccionUbicaciones: AngularFirestoreCollection<any>;
  localizar(user: User) {

    this.geolocation.getCurrentPosition().then((resp) => {
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {

      let date = new Date()
      console.log("Current Date ", date)

      var dia = date.getDate().valueOf();
      var mes = date.getMonth().valueOf();
      var hora = date.getHours().valueOf();
      var minuto = date.getMinutes().valueOf();

      if(minuto<10){
        this.angularFireStore.collection('usuarios')
        .doc(user.email).collection('Mes: ' + (mes+1) + ', Dia:' + dia)
        .doc(hora + ':' + '0'+ minuto).set({
          latitud: data.coords.latitude,
          longitud: data.coords.longitude
        });
      }else{
        this.angularFireStore.collection('usuarios')
        .doc(user.email).collection('Mes: ' + (mes+1) + ', Dia:' + dia)
        .doc(hora + ':' + minuto).set({
          latitud: data.coords.latitude,
          longitud: data.coords.longitude
        });
      }

      // setInterval(()=>{

      // }, 60000)

    });
  }
  /*startTracking() {
    let watch = this.geolocation.watchPosition({}, ( position)=> {
      if(position){
        this.addNewLocation(
          position.coords.latitud,
          position.coords.longitude,
          position.coords.timestamp
        );
      }
    }
    );
  }*/

  stopTracking() {
  }

  addNewLocation(lng, lat, time){
    this.coleccionUbicaciones.add({
      lat, lng, time
    });
  }
  getUserCollection() {
    return this.angularFireStore.collection('usuarios').snapshotChanges().pipe(map(usuarios => {
      return usuarios.map(usuario => {
        const data = usuario.payload.doc.data() as usuario;
        data.id = usuario.payload.doc.id;
        return data;
      });
    }));

  }
  getUserLocation() {
    return this.angularFireStore.collection('usuarios').doc('steven@somos.con')
      .collection('Mes: 5, Dia:25').snapshotChanges();

  }

  getUserRoutes() {
    return this.angularFireStore.collection('usuarios').doc('steven@somos.con').collection('');
  }



}
