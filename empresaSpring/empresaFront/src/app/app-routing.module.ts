import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCargoComponent } from './views/cargo/cadastrar-cargo/cadastrar-cargo.component';
import { CadastrarFuncionarioComponent } from './views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarCargoComponent } from './views/cargo/editar-cargo/editar-cargo.component';
import { EditarFuncionarioComponent } from './views/funcionario/editar-funcionario/editar-funcionario.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { HomeComponent } from './views/home/home.component';
import { ListarCargosComponent } from './views/cargo/listar-cargos/listar-cargos.component';
import { ListarFuncionariosCargoComponent } from './views/funcionario/listar-funcionarios-cargo/listar-funcionarios-cargo.component';
import { TelaLoginComponent } from './security/tela-login/tela-login.component';
import { FooterComponent } from './templates/footer/footer.component';
import { ListarDepartamentoComponent } from './views/departamento/listar-departamento/listar-departamento.component';
import { DepartamentoCargoComponent } from './views/departamento/inserir-departamento-cargo/departamento-cargo.component';
import { CadastrarDadosDepartamentoComponent } from './views/departamento/cadastrar-dados-departamento/cadastrar-dados-departamento.component';
import { EditarDadosDepartamentoComponent } from './views/departamento/editar-dados-departamento/editar-dados-departamento.component';
import { ListarContraChequeFuncionarioComponent } from './views/contraCheque/listar-contra-cheque-funcionario/listar-contra-cheque-funcionario.component';
import { CadastrarContraChequeComponent } from './views/contraCheque/cadastrar-contra-cheque/cadastrar-contra-cheque.component';
import { EditarContraChequeComponent } from './views/contraCheque/editar-contra-cheque/editar-contra-cheque.component';
import { ListarDadosFuncionarioComponent } from './views/funcionario/listar-dados-funcionario/listar-dados-funcionario.component';
import { ListarDadosUnitarioComponent } from './views/funcionario/listar-dados-unitario/listar-dados-unitario.component';
import { AuthGuard } from './security/authGuard/auth';

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: 'full'},
    {path: "home", component:HomeComponent, canActivate: [AuthGuard]},
    {path: "galeria", component:GaleriaComponent},
    {path: "footer", component:FooterComponent},
    {path: "login", component:TelaLoginComponent},

    //Cargos
    {path: "listarCargos", component:ListarCargosComponent, canActivate: [AuthGuard]},
    {path: "cadastrarCargo", component:CadastrarCargoComponent, canActivate: [AuthGuard]},
    {path: "editarCargo/:id", component:EditarCargoComponent, canActivate: [AuthGuard]},
    //Funcionario
    {path: "cadastrarCargo/editarCargo/:id", component:EditarCargoComponent, canActivate: [AuthGuard]},
    {path: "funcionarioCargo/:id_cargo", component:ListarFuncionariosCargoComponent, canActivate: [AuthGuard] },
    {path: "cadastrarFuncionario/:id_cargo", component:CadastrarFuncionarioComponent, canActivate: [AuthGuard]},
    {path: "editarFuncionario/:id_funcionario/:id_cargo", component:EditarFuncionarioComponent, canActivate: [AuthGuard]},
    {path: "listarDadosFuncionario", component: ListarDadosFuncionarioComponent, canActivate: [AuthGuard]},
    { path: "listarDadosUnitario/:id_funcionario", component: ListarDadosUnitarioComponent, canActivate: [AuthGuard]},
    //Departamento
    {path: "departamento", component:ListarDepartamentoComponent, canActivate: [AuthGuard]},
    {path: "departamentoCargo/:id_cargo", component:DepartamentoCargoComponent, canActivate: [AuthGuard]},
    {path: "cargoDepartamento", component:CadastrarDadosDepartamentoComponent, canActivate: [AuthGuard]},
    {path: "editarDepartamento/:id_departamento", component:EditarDadosDepartamentoComponent, canActivate: [AuthGuard]},
    //Contra Cheque
    {path: "listarContraCheque/:id_funcionario", component:ListarContraChequeFuncionarioComponent, canActivate: [AuthGuard]},
    {path: "cadastrarContraCheque/:id_funcionario", component:CadastrarContraChequeComponent, canActivate: [AuthGuard]},
    {path: "editarContraCheque/:matricula/:id_funcionario", component: EditarContraChequeComponent, canActivate: [AuthGuard]},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
