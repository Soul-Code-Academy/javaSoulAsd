import { Router } from '@angular/router';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

 logar(user: User) {
    if(user.email === 'alana@gmail.com' && user.senha === '123456') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/home'])
    } else {
      this.usuarioAutenticado = false;
      this.router.navigate(['/login'])
    }
  }

  sair() {
      this.usuarioAutenticado = false;
      this.router.navigate(['/login'])
    }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  usuarioNaoAutenticado(){
    this.usuarioAutenticado = false;
  }


}
