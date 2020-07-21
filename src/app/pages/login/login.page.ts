import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router} from '@angular/router';
import { User } from '../../clases/user';
import { LocalizarService } from '../../servicios/localizar.service'
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 
  usuario = null;
  user: User = new User();
  
  map: any;

  constructor(private authService: AutenticacionService,
     private router: Router,
     private angularFirestore : AngularFirestore,
     private localizarService: LocalizarService
    ) {
     }
    
    

  ngOnInit() {
  }
    async onSubmitLogin() { 
      let date = new Date()
      const user = await this.authService.login(this.user);
      
      if (this.user.email == "administradorsomos@somos.com"){
        console.log('administrador');
        this.router.navigate(['tabs-admin']);
      }
      else if (user){
        this.angularFirestore.collection('users').doc(this.user.email).set({
          email: this.user.email,
          horaIngreso: date.getHours() +':'+ date.getMinutes(),
          img: "      "
        })
        this.angularFirestore.collection('users').doc(this.user.email).collection('horaingreso').add({
          horaIngreso: date.getHours() +':'+ date.getMinutes(),
        })
        this.router.navigate(['photo']);
        this.localizarService.localizar(this.user.email);


       
      }
      
    }
 

}
