import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs-admin',
  templateUrl: './tabs-admin.page.html',
  styleUrls: ['./tabs-admin.page.scss'],
})
export class TabsAdminPage implements OnInit {

  constructor( private alertController: AlertController,
               private authService: AutenticacionService,
               private router: Router
    ) { }

  ngOnInit() {

  }

  async logOut() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: '¿Desea cerrar sesión?',
      buttons: [
        {text: 'Cancel'},
        {text: 'Aceptar',
        role: 'Acetar',
        handler: () => {
          this.onLogOut();

        }}
      ]
    });

    await alert.present();
  }

  onLogOut(){
    this.authService.logout();
    this.router.navigate(['login']);

  }
}
