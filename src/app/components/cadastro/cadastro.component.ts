import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  logo: string = 'https://www.tailorbrands.com/wp-content/uploads/2021/01/nike-logo.png'
  iconEmail: string = 'https://cdn-icons-png.flaticon.com/512/4213/4213922.png'
  iconNome: string = 'https://cdn-icons-png.flaticon.com/512/1828/1828439.png'
  iconSenha: string = 'https://cdn-icons-png.flaticon.com/512/102/102643.png'

  constructor() { }

  ngOnInit(): void {
  }

}
