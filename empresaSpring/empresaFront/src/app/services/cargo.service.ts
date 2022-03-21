import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargoModelo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }

  mostrarTodosCargos():Observable<Cargo[]>{
    const url = `${this.baseUrl}/cargo`
    return this.http.get<Cargo[]>(url)
  }

  mostrarCargosSemDepartamento():Observable<Cargo[]>{
    const url = `${this.baseUrl}/cargo-sem-departamento`
    return this.http.get<Cargo[]>(url)
  }


  mostrarUmCargo(id_cargo:string):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${id_cargo}`
    return this.http.get<Cargo>(url)
  }

  mostrarCargoDoDepartamento(id_departamento:String):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/cargo-departamento/${id_departamento}`
    return this.http.get<Cargo>(url)
  }

  buscarTodosDepartamentos():Observable<any>{
    const url = `${this.baseUrl}/cargo/cargo-departamento`
    return this.http.get<any>(url)
  }

  cadastrarCargo(cargo:Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo`
    return this.http.post<Cargo>(url,cargo)
  }

  excluirUmCargo(id_cargo:String):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${id_cargo}`
    return this.http.delete<Cargo>(url)
  }

  editarCargo(cargo:Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
    return this.http.put<Cargo>(url,cargo)
  }

  atribuirDepartamento(cargo:Cargo,id_cargo:string, id_departamento:string):Observable<void>{
    const url = `${this.baseUrl}/cargo/definir-departamento/${id_cargo}/${id_departamento}`
    return this.http.put<void>(url,cargo)
  }

  deixarCargoSemDepartamento(cargo:Cargo,id_cargo:String, id_departamento:String):Observable<void>{
    const url = `${this.baseUrl}/cargo/tirar-departamento/${id_cargo}/${id_departamento}`
    return this.http.put<void>(url,cargo);

  }

  nomeCargo():Observable<Cargo[]>{
    const url = `${this.baseUrl}/cargo/nome-cargo`
    return this.http.get<Cargo[]>(url)
  }

}
