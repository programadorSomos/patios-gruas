import { Component, OnInit } from '@angular/core';
import { User } from '../../clases/user';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab-registro',
  templateUrl: './tab-registro.page.html',
  styleUrls: ['./tab-registro.page.scss'],
})
export class TabRegistroPage implements OnInit {

  constructor(private aunthService: AutenticacionService, public alertController: AlertController) { }
  user: User = new User();
  ngOnInit() {
  }

  async registrar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: '¿Esta seguro de registrar a: ' + this.user.email + ' como trabajador?',
      buttons: [
        {text: 'Cancel'},
        {text: 'Aceptar',
        role: 'Acetar',
        handler: () => {
          this.OnRegister();
        }}
      ]
    });

    await alert.present();
  }

 async OnRegister(){
    this.aunthService.register(this.user);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Exito al registrar',
      buttons: [{text: 'Aceptar'}]
    });

    await alert.present();
  }
}

