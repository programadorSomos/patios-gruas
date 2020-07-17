import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController} from '@ionic/angular';
import { LocalizarService } from '../../servicios/localizar.service';
import { FechasComponent } from '../../components/fechas/fechas.component';

@Component({
  selector: 'app-tab-rutas',
  templateUrl: './tab-rutas.page.html',
  styleUrls: ['./tab-rutas.page.scss'],
})
export class TabRutasPage implements OnInit {

  public usuarios: any = [];


  constructor(private router: Router,
              private getLocation: LocalizarService,
              private modalController: ModalController) {


  }

  ngOnInit() {



    this.getLocation.getUserCollection().subscribe(usuarios => {
      this.usuarios = usuarios;
    });


    ///////////////////////////////////////////////




    ///////////////////////////////////////////////////

    /*this.getLocation.getUserRoutes().subscribe( rutas=>{
      rutas.payload.data
    });*/
  }

  ruta(usuario) {
    this.modalController.create({
      component: FechasComponent,
      componentProps: {
        id: usuario.id
      }
    }).then((modalController) => modalController.present());

    //this.router.navigate(['./tabs-admin/tab-fecha']);
  }
  mapa() {
    this.router.navigate(['./tabs-admin/tab-mapa']);
  }


}
