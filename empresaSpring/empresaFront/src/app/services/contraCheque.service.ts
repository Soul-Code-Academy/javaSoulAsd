import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContraCheque } from '../models/contraChequeModelo';

@Injectable({
  providedIn: 'root'
})
export class ContraChequeService {

  baseUrl: string = 'http://localhost:8080/empresa'

  constructor(
    private http: HttpClient,
  ) { }

  contraCheques():Observable<ContraCheque[]>{
    const url = `${this.baseUrl}/contra-cheque`
    return this.http.get<ContraCheque[]>(url)
  }

  listarContraChequesDoFuncionario(id_funcionario:string):Observable<ContraCheque[]>{
    const url = `${this.baseUrl}/funcionario/contraCheque-funcionario/${id_funcionario}`
    return this.http.get<ContraCheque[]>(url)
  }

  cadastrarContraCheque(contraCheque:ContraCheque, id_funcionario:String):Observable<ContraCheque>{
    const url = `${this.baseUrl}/funcionario/contraCheque/${id_funcionario}`
    return this.http.post<ContraCheque>(url,contraCheque)

  }

  pagarContraCheque(contraCheque:ContraCheque, matricula:string):Observable<ContraCheque>{
    const url = `${this.baseUrl}/funcionario/pagar-contraCheque/${matricula}`
    return this.http.put<ContraCheque>(url,contraCheque)
  }

  cancelarContraCheque(contraCheque:ContraCheque, matricula:string):Observable<ContraCheque>{
    const url = `${this.baseUrl}/funcionario/cancelar-contraCheque/${matricula}`
    return this.http.put<ContraCheque>(url,contraCheque)
  }

  editarContraCheque(contraCheque:ContraCheque, matricula:string, id_funcionario:string):Observable<ContraCheque>{
    const url = `${this.baseUrl}/funcionario/contraCheque/${matricula}/${id_funcionario}`
    return this.http.put<ContraCheque>(url,contraCheque)
  }

  buscarUmContraCheque(matricula:string):Observable<ContraCheque>{
    const url = `${this.baseUrl}/funcionario/contraCheque/${matricula}`
    return this.http.get<ContraCheque>(url)
  }
}
