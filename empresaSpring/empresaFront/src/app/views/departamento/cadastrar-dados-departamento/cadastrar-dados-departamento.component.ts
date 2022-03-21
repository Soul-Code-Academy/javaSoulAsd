import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargoModelo';
import { Departamento } from 'src/app/models/departamentoModelo';
import { CargoService } from 'src/app/services/cargo.service';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-cargo-ao-departamento',
  templateUrl: './cadastrar-dados-departamento.component.html',
  styleUrls: ['./cadastrar-dados-departamento.component.css']
})
export class CadastrarDadosDepartamentoComponent implements OnInit {

  cadastrado = false;
  error = false;

  id_departamento: any

  id_cargo: any
  departamentoCadastrado: boolean = false

  departamentosSemCargo:any
  departamentoSemCargo:any=[]

  departamento:Departamento ={
      id_departamento: '',
      dep_nome: '',
  }



   constructor(private departamentoService:DepartamentoService,
    private router:Router) { }


  ngOnInit(): void {

  }

  cadastrarDepartamento(){
    this.departamentoService.cadastrarDepartamento(this.departamento).subscribe({
      next: () => {this.cadastrado=true
        setTimeout(() => {
          this.router.navigate(['/departamento'])
        }, 2000)},
      error: () => {this.error=true
        setTimeout(() => {
          this.router.navigate(['/departamento'])
        }, 2000)},
      complete:() => setTimeout(() => {
          this.router.navigate(['/departamento'])
        }, 2000)

      })
  }

  fechar(){
    this.cadastrado = false;
    this.error = false;
  }

}
