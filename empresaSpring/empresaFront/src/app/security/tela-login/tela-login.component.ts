import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authGuard/auth.service';
import { User } from '../authGuard/user';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  public user: User = new User();

  constructor(private router:Router,  private authService: AuthService) { }

  ngOnInit(): void {
  }

 submit(){
  this.authService.logar(this.user);

 }


}
