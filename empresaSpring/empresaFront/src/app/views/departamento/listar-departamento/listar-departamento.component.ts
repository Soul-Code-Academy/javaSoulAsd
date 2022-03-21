import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamentoModelo';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {

  search:any
  departamentoCadastrado: boolean = false

  id_cargo:string
  departamentos:any=[]


  deletado = false;
  error = false;

  isModal:boolean = false

  idExcluir!:any

  constructor(private departamentoService:DepartamentoService,
              private route:ActivatedRoute,
              private router:Router) {
      this.departamentos.id_departamento = this.route.snapshot.paramMap.get('id_departamento')
      this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!; }

    ngOnInit(): void {

      this.buscarTodosDepartamentos();
    }
    buscarTodosDepartamentos(){
      this.departamentoService.buscarTodosDepartamentos().subscribe((resultado:any)=>{
      resultado.forEach((departamento: any[]) =>{

    let depto: any ={
      id_departamento:'',
      dep_nome:'',
      // func_nome: '',
      ca_nome: '',
      ca_atribuicao:''
    }

    depto.id_departamento = departamento[0]
    depto.dep_nome = departamento[1]
    // depto.func_nome = departamento[2]
    depto.ca_nome = departamento[2]
    depto.ca_atribuicao = departamento[3]


    if(depto.ca_nome == undefined){
      depto.ca_nome ='Departamento sem cargo associado.'
      // depto.func_nome  ='Departamento sem funcionário.'
      depto.ca_atribuicao = 'Departamento sem cargo associado.'
      this.departamentoCadastrado=false
      this.departamentos.push(depto)
      console.log(depto)
    }else{
      this.departamentoCadastrado=true
      this.departamentos.push(depto)
      console.log(depto)
      }
    })
  })
}

excluirDepartamento() {
  this.departamentoService.excluirUmDepartamento(this.idExcluir).subscribe({
    next: () => {this.deletado=true
                setTimeout(() => {
                  this.isModal= false
                }, 2000)
                this.router.navigate(["/departamento"])},
    error: () => {this.error=true
                setTimeout(() => {
                  this.isModal= false
                }, 2000)
                this.router.navigate(["/departamento"])},
    complete:() => setTimeout(() => {
                   this.deletado=true
                 this.router.navigate(["/departamento"])
    }, 2000)
  })
}
    resetSearch(){
      this.search=''
    }

    cancelarAcao(){
      this.isModal=false
    }

    mostrarModal(id_departamento:any){
      this.isModal= true
      this.idExcluir = id_departamento
    }

    fechar(){
      this.deletado = false;
      this.error = false
    }

}
