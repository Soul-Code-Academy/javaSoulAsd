import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/authGuard/auth.service';
import { User } from 'src/app/security/authGuard/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: User = new User();


 constructor(private router:Router,  private authService: AuthService) { }

  ngOnInit(): void {
  }

 sair(){
  this.authService.sair();
  
 }

}
