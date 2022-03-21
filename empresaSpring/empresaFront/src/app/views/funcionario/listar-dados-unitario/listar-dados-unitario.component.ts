import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarioModelo';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-dados-unitario',
  templateUrl: './listar-dados-unitario.component.html',
  styleUrls: ['./listar-dados-unitario.component.css']
})
export class ListarDadosUnitarioComponent implements OnInit {

  func_nome:any
  ca_nome:any
  atribuicao:any
  funcionarios:any=[]

  funcionario:Funcionario= {
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

  constructor(private funcionarioService:FuncionarioService,
              private route: ActivatedRoute) {
      this.funcionario.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')


     }

  ngOnInit(): void {
    this.funcionarioService.mostrarUmFuncionario(this.funcionario.id_funcionario).subscribe((resposta)=>{
      this.funcionario = resposta
      this.func_nome = resposta.func_nome
      console.log(this.funcionario)
    })

    this.funcionarioService.buscarTodosFuncionarios().subscribe(res =>{
      res.forEach((func:any)=>{
        let funcionariosGeral: any = {
          ca_atribuicao:'',
          ca_nome:''
        }
          funcionariosGeral.ca_nome = func[14]
          funcionariosGeral.ca_atribuicao= func[15]
          // funcionariosGeral.dep_nome = funcionario[12]
          this.funcionarios.push(funcionariosGeral)
          this.ca_nome=funcionariosGeral.ca_nome
          this.atribuicao=funcionariosGeral.ca_atribuicao
        })
    })
  }



}
