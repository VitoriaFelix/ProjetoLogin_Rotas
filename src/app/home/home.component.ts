import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pessoa: any = {
    nome: '',
    idade: ''
  }
  constructor(private rotaAtual: ActivatedRoute) { }

  ngOnInit(): void {
    this.rotaAtual.params.subscribe(valor => {
      /*alert(valor.idCasa);
      alert(valor.idCasa2);*/
      alert(this.rotaAtual.snapshot.queryParams['rota'] ? this.rotaAtual.snapshot.queryParams['rota'] : null)
    })
  }

}
