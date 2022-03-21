
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargoModelo';
import { Funcionario } from '../models/funcionarioModelo';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  result:any

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }

    buscarFuncionariosCargo(id_cargo: string):Observable<Funcionario[]>{
      const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
      return this.http.get<Funcionario[]>(url)
    }

    buscarTodosFuncionarios():Observable<Funcionario[]>{
      const url = `${this.baseUrl}/funcionario-cargo`
      return this.http.get<Funcionario[]>(url)
    }

    cadastrarFuncionario(funcionario:Funcionario, id_cargo:string):Observable<Funcionario>{
      const url = `${this.baseUrl}/funcionario?cargo=${id_cargo}`
      return this.http.post<Funcionario>(url,funcionario)
    }

    mostrarUmFuncionario(id_funcionario:string):Observable<Funcionario>{
      const url = `${this.baseUrl}/funcionario/${id_funcionario}`
      return this.http.get<Funcionario>(url)
    }

    excluirUmFuncionario(id_funcionario:string):Observable<Funcionario>{
      const url = `${this.baseUrl}/funcionario/${id_funcionario}`
      return this.http.delete<Funcionario>(url)
    }

    editarFuncionario(funcionario:Funcionario, id_funcionario:string, id_cargo:string):Observable<Funcionario>{
      const url = `${this.baseUrl}/funcionario/${id_funcionario}?cargo=${id_cargo}`
      return this.http.put<Funcionario>(url,funcionario)
    }

    buscarFuncionarioPeloCpf(func_cpf:String):Observable<Funcionario>{
      const url = `${this.baseUrl}/funcionario-cpf/${func_cpf}`
      return this.http.get<Funcionario>(url)
    }

    buscarTodosFuncionarios2():Observable<any>{

      const url = `${this.baseUrl}/funcionario`
      return this.http.get<any>(url)
    }

    buscar(cep: string){
      return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
    }


}
