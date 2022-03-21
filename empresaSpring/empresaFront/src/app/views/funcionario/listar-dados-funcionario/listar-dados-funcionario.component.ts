import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionarioModelo';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-dados',
  templateUrl: './listar-dados-funcionario.component.html',
  styleUrls: ['./listar-dados-funcionario.component.css']
})
export class ListarDadosFuncionarioComponent implements OnInit {

  funcionarios:any=[]

  funcionarioCadastrado: boolean = false
  search:any

  constructor(private funcionarioService:FuncionarioService) {

  }

  ngOnInit(): void {

    this.funcionarioService.buscarTodosFuncionarios().subscribe(res =>{
      res.forEach((funcionario:any=[])=>{
        let funcionariosGeral: any = {
          id_funcionario:'',
          func_foto:'',
          func_nome: '',
          func_cpf:'',
          func_nascimento:'',
          func_telefone:'',
          func_email:'',
          cep:'',
          localidade:'',
          uf:'',
          logradouro:'',
          numero:'',
          ca_nome:'',
          ca_atribuicao:'',
          dep_nome:'',
          bairro:'',
          func_referencia:''
        }
          funcionariosGeral.id_funcionario = funcionario[0]
          funcionariosGeral.func_foto = funcionario[1]
          funcionariosGeral.func_nome = funcionario[2]
          funcionariosGeral.func_cpf = funcionario[3]
          funcionariosGeral.func_nascimento = funcionario[4]
          funcionariosGeral.func_telefone = funcionario[5]
          funcionariosGeral.func_email = funcionario[6]
          funcionariosGeral.cep= funcionario[8]
          funcionariosGeral.localidade = funcionario[9]
          funcionariosGeral.bairro = funcionario[10]
          funcionariosGeral.logradouro = funcionario[11]
          funcionariosGeral.numero = funcionario[12]
          funcionariosGeral.func_referencia= funcionario[13]
          funcionariosGeral.uf = funcionario[14]
          funcionariosGeral.ca_nome = funcionario[14]
          funcionariosGeral.ca_atribuicao = funcionario[15]
          // funcionariosGeral.dep_nome = funcionario[12]
          console.log(funcionario[4] + "esse")

          if(funcionariosGeral.func_nome == undefined){
            funcionariosGeral.func_foto = '***'
            funcionariosGeral.func_nome = '***'
            funcionariosGeral.func_cpf = '***'
            funcionariosGeral.func_telefone = '***'
            funcionariosGeral.func_email = '***'
            funcionariosGeral.localidade = '***'
            funcionariosGeral.uf = '***'
            funcionariosGeral.logradouro = '***'
            funcionariosGeral.ca_nome = '***'
            funcionariosGeral.ca_atribuicao = '***'
            funcionariosGeral.dep_nome = '***'
            funcionariosGeral.bairro = '***'
            this.funcionarioCadastrado=false
            this.funcionarios.push(funcionariosGeral)


          }else{
            this.funcionarioCadastrado=true
            this.funcionarios.push(funcionariosGeral)
          }
        })
    })
  }

  resetSearch() {
    this.search = '';
  }


  }


