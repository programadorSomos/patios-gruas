import { Injectable } from '@angular/core';
import { User } from '../clases/user';
import { AngularFireAuth} from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  public isLogged: any = false;


  constructor(private angularFireAuth : AngularFireAuth) {
    angularFireAuth.authState.subscribe(user =>(this.isLogged= user));
   }


   /*async login(email: string, password: string){

    return new Promise((resolve, rejected)=>{
      this.angularFireAuth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user)
      }).catch(err => rejected(err));

    });
    
  }*/

  async login (user: User){
    try{
      return await this.angularFireAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch(error){
      console.log('Error: '+ error)
    }
  }
  async register (user: User){
    try {
      return await this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('error: '+ error)
    }
  }

  async logout(){
    this.angularFireAuth.signOut();
  }
}

