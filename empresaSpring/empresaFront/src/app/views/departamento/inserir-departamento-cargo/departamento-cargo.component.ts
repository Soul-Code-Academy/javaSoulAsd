import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargoModelo';
import { Departamento } from 'src/app/models/departamentoModelo';
import { CargoService } from 'src/app/services/cargo.service';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamento-cargo',
  templateUrl: './departamento-cargo.component.html',
  styleUrls: ['./departamento-cargo.component.css']
})
export class DepartamentoCargoComponent implements OnInit {

  cadastrado = false;
  error = false;

  retirado = false;
  erro = false;


  id_cargo: string =''
  departamentoCadastrado: boolean = false

  departamentosSemCargo:any
  departamentoSemCargo:any=[]

  // cargos:Cargo[]=[]

  departamento:Departamento ={
      id_departamento: '',
      dep_nome: '',
  }

 cargo:Cargo={
    id_cargo:'',
    ca_nome:'',
    ca_atribuicao:''
   }

   constructor(private departamentoService:DepartamentoService,
                private route:ActivatedRoute,
                private router:Router,
                private cargoService:CargoService) {
        this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')! }


  ngOnInit(): void {
    this.buscarDepartamentoComCargo()
    this. mostrarDepartamento()

    // this.cargoService.mostrarTodosCargos().subscribe(resposta =>{
    //   this.cargos = resposta
    // })

    this.departamentoService.buscarDepartamentoSemCargo().subscribe(resultado=>{
      this.departamentosSemCargo = resultado
    })

  }

  buscarDepartamentoComCargo(){
    this.departamentoService.buscarDepartamentoDoCargo(this.id_cargo).subscribe(resultado=>{
      if(resultado == undefined){
        this.departamentoCadastrado=false
      }else{
        this.departamentoCadastrado=true
        this.departamento = resultado;
        console.log(resultado)
      }
  })
  }

  mostrarDepartamento(){
    this.departamento = this.departamentoSemCargo

  }

  atribuirDepartamento(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado)=>{
      this.cargo = resultado
    })
    this.cargoService.atribuirDepartamento(this.cargo, this.id_cargo, this.departamento.id_departamento).subscribe({
      next: () => {this.cadastrado=true
              setTimeout(() => {
                this.router.navigate(['/listarCargos'])
        }, 2000)},
      error: () => {this.error=true
              setTimeout(() => {
                this.router.navigate(['/listarCargos'])
        }, 2000)},
      complete:() => setTimeout(() => {
                this.router.navigate(['/listarCargos'])
        }, 2000)

      })
  }

  deixarCargoSemDepartamento(){
    this.cargoService.deixarCargoSemDepartamento(this.cargo, this.id_cargo,this.departamento.id_departamento).subscribe({
      next: () => {this.retirado=true
            setTimeout(() => {
              this.router.navigate(['/listarCargos'])
      }, 2000)},
      error: () => {this.erro=true
          setTimeout(() => {
          this.router.navigate(['/listarCargos'])
  }, 2000)},
      complete:() => setTimeout(() => {
                this.router.navigate(['/listarCargos'])
        }, 2000)
    })
  }

  fechar(){
    this.cadastrado = false;
    this.error = false;
    this.retirado = false;
    this.erro = false;
  }
}


