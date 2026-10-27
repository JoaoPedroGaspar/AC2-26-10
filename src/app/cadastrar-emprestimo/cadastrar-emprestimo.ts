import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmprestimoService } from '../Services/emprestimo-services';
import { Emprestimo } from '../emprestimo';

@Component({
  selector: 'app-cadastrar-emprestimo',
  imports: [FormsModule],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimo {

  nomePessoa: string = '';
  tituloLivro: string = '';
  dataPrevistaDevolucao: string = '';

  constructor(private emprestimoService: EmprestimoService) {}

  cadastrar(): void {

    if (
      this.nomePessoa.trim() === '' ||
      this.tituloLivro.trim() === '' ||
      this.dataPrevistaDevolucao === ''
    ) {
      return;
    }

    const emprestimo: Emprestimo = {
      id: Date.now(),
      nomePessoa: this.nomePessoa,
      tituloLivro: this.tituloLivro,
      dataPrevistaDevolucao: this.dataPrevistaDevolucao,
      devolvido: false
    };

    this.emprestimoService.adicionar(emprestimo);

    this.nomePessoa = '';
    this.tituloLivro = '';
    this.dataPrevistaDevolucao = '';
  }
}