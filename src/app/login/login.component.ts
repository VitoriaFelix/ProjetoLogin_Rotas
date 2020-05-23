import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={
  email:"",
  password:""
}
  constructor(private obj:LoginService,private rota:Router) { }

  ngOnInit(): void {

  }
public enviar(){

this.obj.postLogin(this.user).subscribe(
  (obj: any)=> {
    console.log(obj.token);
    /*let objJason = JSON.parse(JSON.stringify(result))
    console.log(objJason.token);*/
    localStorage.setItem("token",obj.token);
    this.rota.navigate(["home"]);
  },
   error => {
     alert("Usuário não encontrado")
   }); 

}
}
