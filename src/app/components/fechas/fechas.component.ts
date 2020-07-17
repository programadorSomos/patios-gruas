import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { MapaComponent} from "../../components/mapa/mapa.component";
@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.scss'],
})

export class FechasComponent implements OnInit {

  public id: string;
  private fechas = ['Soy una fecha',
   'hola mundo'
  ];
  private fecha : string;

  constructor(
    private navParams: NavParams,
    private modalController : ModalController
  ) { }

  ngOnInit() {
   this.id =  this.navParams.get('id')
  }

  back() {
   this.modalController.dismiss();
  }

  mapa() {
    
    this.modalController.create({
      component: MapaComponent, 
      componentProps: {
        
      }
    }).then((modalController)=>modalController.present())

    
  }
}

