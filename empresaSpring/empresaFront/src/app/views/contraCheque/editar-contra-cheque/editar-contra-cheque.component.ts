import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContraCheque } from 'src/app/models/contraChequeModelo';
import { ContraChequeService } from 'src/app/services/contraCheque.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-contra-cheque',
  templateUrl: './editar-contra-cheque.component.html',
  styleUrls: ['./editar-contra-cheque.component.css']
})
export class EditarContraChequeComponent implements OnInit {

  id_funcionario:any
  matricula:any

  nomeFunc:any

  editado=false
  error=false

  c:ContraCheque[]=[]
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
    cc_status: '',
    cc_total:0
  }

  constructor(private contraChequeService: ContraChequeService,
              private funcionarioService:FuncionarioService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location)
            {this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
             this.matricula = this.route.snapshot.paramMap.get('matricula')}

  ngOnInit(): void {
    this.funcionarioService.mostrarUmFuncionario(this.id_funcionario).subscribe(resultado => {
      this.nomeFunc = resultado.func_nome
    })

    this.contraChequeService.buscarUmContraCheque(this.matricula).subscribe(resultado => {
      this.cc = resultado
      console.log(resultado)
      this.cc.cc_dataAdmissao= resultado.cc_dataAdmissao.slice(0, 10)
      this.cc.cc_dataPagamento= resultado.cc_dataPagamento.slice(0, 10)
    })

    this.contraChequeService.listarContraChequesDoFuncionario(this.id_funcionario).subscribe(resultado =>{
      this.c = resultado
    })
  }


  editarContraCheque() {
    this.cc.cc_total=Number(this.cc.cc_auxilioAlimentacao) + Number(this.cc.cc_auxilioTransporte) + Number(this.cc.cc_bonificacao) + Number(this.cc.cc_valor)

    this.contraChequeService.editarContraCheque(this.cc, this.matricula, this.id_funcionario).subscribe({
      next: () => {this.editado=true
        setTimeout(() => {
          this.router.navigate([`/listarContraCheque/${this.id_funcionario}`])
        }, 2000)},
      error: () => {this.error=true
        setTimeout(() => {
          this.location.back()
        }, 2000)},
      complete:() => {setTimeout(() => {
        this.router.navigate([`/listarContraCheque/${this.id_funcionario}`])
            }, 2000)}
        })
  }

  fechar(){
    this.editado=false
    this.error=false
  }

}
