import { Component} from '@angular/core';
import { LoginServiceService } from 'src/app/Services/Login/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private loginService:LoginServiceService){}

  rolesArray: string[] = ['ADMINISTRACION', 'CARTERA', 'VENTAS']

  logout(){
    this.loginService.logout()
  }
}
