import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Funcionario } from 'src/app/models/funcionarioModelo';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  idCadastrar!:any
  isModal:boolean = false

  foto: any
  idFuncCadastrado: any
  funcCadastrado:boolean=false

  cadastrado = false;
  error = false;

  anexada= false;
  erro = false;

  cargoEscolhido:any
  cargos: any
  id_cargo!: any

  func_foto:any

 funcionarios:Funcionario[] = []

 funcionario:Funcionario = {
  id_funcionario: '',
  func_nome: '',
  localidade: '',
  bairro: '',
  uf:'',
  logradouro: '',
  func_foto: '',
  func_cpf: '',
  func_telefone: '',
  func_email:'',
  cep:'',
  numero:'',
  func_referencia:'',
  func_nascimento:''
}

  constructor(private funcionarioService: FuncionarioService,
              private router: Router,
              private route: ActivatedRoute,
              private cargoService: CargoService,
              private http:HttpClient,
              private location:Location ) {
      this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
     }

  ngOnInit(): void {

  }

  cadastrarFuncionario(value:any){

    this.funcionarioService.cadastrarFuncionario(this.funcionario,this.id_cargo).subscribe({
       next: () => { this.cadastrado=true
        setTimeout(() => {
          this.isModal= true
          }, 1000)
          this.funcionarioService.buscarFuncionarioPeloCpf(this.funcionario.func_cpf)
        .subscribe(resultado =>{
          console.log(resultado)
          this.idFuncCadastrado = resultado.id_funcionario
         console.log(resultado)
          this.funcCadastrado = true
        })},
      error: () => { this.error=true
        setTimeout(() => {
          this.location.back()
        }, 2000)},
      complete: () => {setTimeout(() => {
        this.cadastrado=true
        }, 2000)}
    })
  }

  subirFoto(event:any){

    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
                const [file] = event.target.files;
                reader.readAsDataURL(file);
                reader.onload = () => {
                  this.func_foto = reader.result;
                };

      this.foto = event.target.files[0]
      const formData = new FormData
      formData.append("foto",this.foto)
      const nome:string = this.funcionario.func_cpf + "-" + event.target.files[0].name
      this.http.post(`http://localhost:8080/empresa/envio/${this.idFuncCadastrado}?nome=${nome}`,formData).subscribe({
          next: () => {
                      setTimeout(() => {
                        this.anexada=true
                      }, 2000)},

                  },
              )}

             }






  atribuir(){

    this.funcionarioService.buscar(this.funcionario.cep).subscribe({

      next:(resultado) => {
        console.log(resultado);
        this.funcionario = <any> resultado
      }
    })

  }


  cancelarAcao(){
    this.isModal=false
  }

  fechar(){
    this.cadastrado=false
    this.error=false
    this.erro=false
    this.anexada=false
  }

  mostrarModal(func_cpf:any){
    this.isModal= true
    this.idCadastrar = func_cpf
  }

  

}
