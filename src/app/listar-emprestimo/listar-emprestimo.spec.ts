import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaEmprestimos } from './listar-emprestimo';

describe('ListarEmprestimo', () => {
  let component: ListaEmprestimos;
  let fixture: ComponentFixture<ListaEmprestimos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEmprestimos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEmprestimos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
