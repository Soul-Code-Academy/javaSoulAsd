import { CargoService } from 'src/app/services/cargo.service';
import { ContraCheque } from './../../../models/contraChequeModelo';
import { Component, OnInit } from '@angular/core';
import { ContraChequeService } from 'src/app/services/contraCheque.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-contra-cheque-funcionario',
  templateUrl: './listar-contra-cheque-funcionario.component.html',
  styleUrls: ['./listar-contra-cheque-funcionario.component.css']
})
export class ListarContraChequeFuncionarioComponent implements OnInit {

  search:any

  id_funcionario: any
  matricula:any
  id_cargo:any

  nomeFunc: any
  cpfFunc:any
  cargoFunc:any

  pago:boolean=false
  cancelado:boolean=false
  error:boolean=false
  erro:boolean=false

  cc: ContraCheque[] = []

  ccs: ContraCheque = {
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
 


  constructor(
    private contraChequeService: ContraChequeService,
    private router: Router,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private cargoService:CargoService
  ) {
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.matricula = this.route.snapshot.paramMap.get('matricula')
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
  }

  ngOnInit(): void {
    this.listarContraCheques()

    this.funcionarioService.mostrarUmFuncionario(this.id_funcionario).subscribe(resultado => {
      this.nomeFunc = resultado.func_nome
      this.cpfFunc = resultado.func_cpf

    })

    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(resultado => {
      this.cargoFunc = resultado.ca_nome
      console.log(this.cargoFunc + 'wu')
    })
  }

  listarContraCheques() {
    this.contraChequeService.listarContraChequesDoFuncionario(this.id_funcionario).subscribe(resultado => {
      this.cc = resultado
    })
  }

  pagarContraCheque(cc: ContraCheque, matricula: any) {
    this.contraChequeService.pagarContraCheque(cc,matricula).subscribe({
        next: () => {this.pago=true
                    setTimeout(() => {

                      this.listarContraCheques()
                    }, 2000)},
        error: () => {this.error=true
                      setTimeout(() => {
                        this.listarContraCheques()
                      }, 2000)},
        complete:() => setTimeout(() => {
                        this.listarContraCheques()
                        }, 2000)
                      })
                    }

  cancelarContraCheque(cc: ContraCheque, matricula: any) {
    this.contraChequeService.cancelarContraCheque(cc, matricula).subscribe({
      next: () => {this.cancelado=true
                  setTimeout(() => {
                    this.listarContraCheques()
                  }, 2000)},
      error: () => {this.erro=true
                    setTimeout(() => {
                      this.listarContraCheques()
                    }, 2000)},
      complete:() => {setTimeout(() => {
                      this.listarContraCheques()
                      }, 2000)}
                  })
                }

      resetSearch() {
        this.search = '';
      }

      fechar(){
        this.pago=false
        this.cancelado=false
        this.error=false
        this.erro=false
      }

}
