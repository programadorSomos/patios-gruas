import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../clases/user';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  locations: Observable<any>;
  locationsCollections: AngularFirestoreCollection<any>;

  private imagenTomada: string;
  user: User;
  constructor(
     private geolocation: Geolocation,
     private angularFireStore: AngularFirestore,
     private router: Router) { }

  ngOnInit() {
  }
  empezarMonitoreo(){
    this.router.navigate(['./tabs']);
  }

}
