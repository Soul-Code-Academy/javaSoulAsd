import { ContraCheque } from './../../../models/contraChequeModelo';
import { Component, OnInit } from '@angular/core';
import { ContraChequeService } from 'src/app/services/contraCheque.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-contra-cheque',
  templateUrl: './cadastrar-contra-cheque.component.html',
  styleUrls: ['./cadastrar-contra-cheque.component.css']
})
export class CadastrarContraChequeComponent implements OnInit {

 id_funcionario: any
 nomeFunc: any
 cadastrado=false
 error=false

  cc: ContraCheque = {
    matricula:'',
    cc_descricao: '',
    cc_pis: '',
    cc_bonificacao: 0,
    cc_auxilioAlimentacao: 0,
    cc_auxilioTransporte: 0,
    cc_valor: 0,
    cc_dataAdmissao: '',
    cc_dataPagamento:'',
    cc_status: "PENDENTE",
    cc_total:0
  }

  constructor(
    private  ccService: ContraChequeService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private funcionarioService: FuncionarioService) {
      this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
     }

  ngOnInit(): void {
    this.funcionarioService.mostrarUmFuncionario(this.id_funcionario).subscribe(resultado => {
      this.nomeFunc = resultado.func_nome
    })

  }

  cadastrarContraCheque(value:any){
    this.cc.cc_total=(this.cc.cc_auxilioAlimentacao + this.cc.cc_auxilioTransporte + this.cc.cc_bonificacao + this.cc.cc_valor)
      this.ccService.cadastrarContraCheque(this.cc, this.id_funcionario).subscribe({
          next: () => {this.cadastrado=true
                        setTimeout(() => {
                          this.location.back()
                        }, 2000)},
          error: () => {this.error=true
                        setTimeout(() => {
                          this.location.back()
                        }, 2000)},
          complete:() => {setTimeout(() => {
                          this.location.back()
                      }, 2000)}
        })
  }

  fechar(){
    this.cadastrado=false
    this.error=false
  }

}

