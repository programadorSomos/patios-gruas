import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavParams } from '@ionic/angular'
import { LocalizarService } from '../../servicios/localizar.service';


export interface Usuario {
  id: string;
}

export interface Rutas{
  mes: string;
  dia: string;
  hora: string;
  longitud: string;
  latitud: string;
}

@Component({
  selector: 'app-tab-fecha',
  templateUrl: './tab-fecha.page.html',
  styleUrls: ['./tab-fecha.page.scss'],
})
export class TabFechaPage implements OnInit {
  public id: string;
   constructor(private router: Router,
               private getLocation: LocalizarService,
               private navParams: NavParams) { }
  public rutas: any = [];
  public usuarios: any = [];
   ngOnInit() {
     this.id = this.navParams.get('id');

     /*this.getLocation.getUserRoutes().get().subscribe( rutas =>{
       rutas.docChanges().toString;   ruta => {
         const dato : Rutas = ruta.payload.doc.data() as Rutas;
         dato.dia = ruta.payload.doc.id.valueOf()
        this.rutas.push(dato.dia);
        console.log(dato.dia);
       }
     });*/

     this.getLocation.getUserCollection().subscribe( usuarios =>{
       usuarios.map( user => {
       });
     });

   }
   mapa(){
     this.router.navigate(['./tabs-admin/tab-mapa']);
   }
 }