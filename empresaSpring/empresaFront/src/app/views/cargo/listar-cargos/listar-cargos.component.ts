import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargoModelo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-listar-cargos',
  templateUrl: './listar-cargos.component.html',
  styleUrls: ['./listar-cargos.component.css']
})
export class ListarCargosComponent implements OnInit {

  cargos!: Cargo []
  search:any

  deletado = false;
  error = false;

  isModal:boolean = false

  idExcluir!:any

  cargo: Cargo={
    id_cargo:'',
    ca_nome:'',
    ca_atribuicao:''
  }

  constructor(private cargoService: CargoService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private location: Location) {
    this.cargo.id_cargo = this.activatedRoute.snapshot.paramMap.get('id_cargo')!
  }

  ngOnInit() {
    this.cargoService.mostrarTodosCargos().subscribe(resposta =>{
      this.cargos = resposta
      console.log(this.cargos)
    })

    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe((resultado)=>{
      this.cargo= resultado
    })

  }

  excluirCargo() {
    this.cargoService.excluirUmCargo(this.idExcluir).subscribe({
      next: () => {this.deletado=true
                  setTimeout(() => {
                    this.isModal= false
                  }, 100)
                  setTimeout(() => {
                    this.deletado= false
                  }, 2000)},
      error: () => {this.error=true
                  setTimeout(() => {
                    this.isModal= false
                  }, 100)
                  setTimeout(() => {
                    this.error= false
                  }, 2000)},
      complete:() => setTimeout(() => {
        this.router.navigate(["/listarCargos"])
      }, 2000)

    })
  }

    resetSearch() {
      this.search = '';
    }

    cancelarAcao(){
      this.isModal=false

    }

    mostrarModal(id_cargo:any){
      this.isModal= true
      this.idExcluir = id_cargo

       }

       fechar(){
        this.deletado = false;
        this.error = false;
       }

}
