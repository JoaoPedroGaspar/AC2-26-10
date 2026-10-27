import { Component } from '@angular/core';
import { CadastrarEmprestimo } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimos } from './listar-emprestimo/listar-emprestimo';

@Component({
  selector: 'app-root',
  imports: [
    CadastrarEmprestimo,
    ListaEmprestimos
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}