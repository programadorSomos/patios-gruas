import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { LocalizarService } from '../../servicios/localizar.service';
import { Router } from '@angular/router';
import { User } from '../../clases/user';


@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.scss'],
})


export class FechasComponent implements OnInit {

  public id: string;
  private fechas = [];
  private fecha : string;

  constructor(  
    private navParams: NavParams,
    private modalController : ModalController,
    private getLocation: LocalizarService,
    private router: Router,
  ) { }

  ngOnInit() {
   this.id =  this.navParams.get('id');


   this.getLocation.getUserRoutes(this.id).subscribe(doc => {
    if (!doc) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc);
      doc.map(m=>{
        
      });
      this.fechas=doc;
    }
  });

  }

  back() {
   this.modalController.dismiss();
  }

  mapa() {
    //this.getLocation.getUserLocation(this.id =  this.navParams.get('id'), "Mes: 7, dia: 18")
    this.modalController.dismiss();
    this.router.navigate(['./tabs-admin/tab-mapa']);

    
  }
}

