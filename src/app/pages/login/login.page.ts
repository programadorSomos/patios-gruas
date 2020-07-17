import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LocalizarService } from '../../servicios/localizar.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../clases/user';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // ubicaciones: Observable<any>;
   //coleccionUbicaciones: AngularFirestoreCollection<any>;
   usuario = null;
   user: User = new User();

   map: any;
   constructor(private authService: AutenticacionService,
               private router: Router,
               private angularFirestore: AngularFirestore,
               private localizarService: LocalizarService
     ) { }
   ngOnInit() {
   }
     async onSubmitLogin() { 
       const user = await this.authService.login(this.user);
       if (this.user.email === 'administradorsomos@somos.com'){
         console.log('administrador');
         this.router.navigate(['tabs-admin']);
       }
       else if (user){
         console.log('hello' + user)
         this.router.navigate(['photo']);
         this.localizarService.localizar(this.user);
         this.angularFirestore.collection('usuarios'+this.user.email,
         ref => ref.orderBy('timestamp')

         );
       } 
     }

 }
