import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamentoModelo';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-editar-dados-departamento',
  templateUrl: './editar-dados-departamento.component.html',
  styleUrls: ['./editar-dados-departamento.component.css']
})
export class EditarDadosDepartamentoComponent implements OnInit {

  editado = false;
  error = false;

  departamento: Departamento = {
    id_departamento:'',
    dep_nome:'',

  }

  constructor(private departamentoService:DepartamentoService,
              private route: ActivatedRoute,
              private router: Router) {
this.departamento.id_departamento = this.route.snapshot.paramMap.get('id_departamento')
}
  ngOnInit(): void {

    this.departamentoService.buscarUmDepartamento(this.departamento.id_departamento).subscribe((resposta)=>{
      this.departamento = resposta

    })
  }

  editarDepartamento() {
    this.departamentoService.editarDepartamento(this.departamento).subscribe({
      next: () => {this.editado=true
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
      this.editado = false;
      this.error = false;
    }

}
