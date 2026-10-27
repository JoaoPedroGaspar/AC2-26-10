import { Component } from '@angular/core';
import { EmprestimoService } from '../Services/emprestimo-services';
import { Emprestimo } from '../emprestimo';

@Component({
  selector: 'app-lista-emprestimos',
  imports: [],
  templateUrl: './listar-emprestimo.html',
  styleUrl: './listar-emprestimo.css'
})
export class ListaEmprestimos {

  constructor(public emprestimoService: EmprestimoService) {}

  listar(): Emprestimo[] {
    return this.emprestimoService.listar();
  }

  remover(id: number): void {
    this.emprestimoService.remover(id);
  }

  registrarDevolucao(id: number): void {
    this.emprestimoService.registrarDevolucao(id);
  }

  total(): number {
    return this.listar().length;
  }

  emAberto(): number {
    return this.listar().filter(
      emprestimo => !emprestimo.devolvido
    ).length;
  }

  devolvidos(): number {
    return this.listar().filter(
      emprestimo => emprestimo.devolvido
    ).length;
  }
}