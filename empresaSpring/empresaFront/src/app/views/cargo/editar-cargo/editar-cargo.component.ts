import { Cargo } from '../../../models/cargoModelo';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cargo',
  templateUrl: './editar-cargo.component.html',
  styleUrls: ['./editar-cargo.component.css']
})
export class EditarCargoComponent implements OnInit {

  editado = false;
  error = false;

  cargo: Cargo = {
    id_cargo:'',
    ca_nome:'',
    ca_atribuicao:''
  }

  constructor(private cargoService:CargoService,
              private route: ActivatedRoute,
              private router: Router) {
      this.cargo.id_cargo = this.route.snapshot.paramMap.get('id')
     }

  ngOnInit(): void {

    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe((resposta)=>{
      this.cargo = resposta
      console.log(this.cargo)
    })
  }


  editarCargo() {
    this.cargoService.editarCargo(this.cargo).subscribe({
      next: () => {this.editado=true},
      error: () => {this.error=true},
      complete:() => setTimeout(() => {
        this.router.navigate(['/listarCargos'])
        }, 2000)

    })

    }

    fechar(){
      this.editado = false;
      this.error = false;
    }
}
