import { Funcionario } from '../../../models/funcionarioModelo';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-funcionarios-cargo',
  templateUrl: './listar-funcionarios-cargo.component.html',
  styleUrls: ['./listar-funcionarios-cargo.component.css']
})
export class ListarFuncionariosCargoComponent implements OnInit {

  search:any
  id_cargo: string = ''

  nome:any

  funcionarioCadastrado: boolean = false
  isModal:boolean = false

  deletado = false;
  error = false;

  idExcluir!:any
  idCard!:any

  funcionarios!: Funcionario[]

  constructor(private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) {
      this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
    }

  ngOnInit(): void {
    this.funcionarioService.buscarFuncionariosCargo(this.id_cargo).subscribe((resultado)=>{
      this.funcionarios = resultado;

    })


  }

  excluirFuncionario() {
    this.funcionarioService.excluirUmFuncionario(this.idExcluir ).subscribe({
      next: () => {this.deletado=true
                  setTimeout(() => {
                    this.router.navigate(["/listarCargos"])
                  }, 2000)},
      error: () => {this.error=true
                  setTimeout(() => {
                    this.router.navigate(["/listarCargos"])
                  }, 2000)},
      complete:() => setTimeout(() => {
        this.router.navigate(["/listarCargos"])
      }, 2000)
    })
  }

  cancelarAcao(){
    this.isModal=false
  }

  mostrarModal(id_funcionario:any){
    this.isModal= true
    this.idExcluir = id_funcionario
  }

  cardList(id_funcionario:any){
    this.idCard= id_funcionario
  }


  fechar(){
    this.deletado=false
    this.error=false
  }

  resetSearch() {
    this.search = '';

    }





}
