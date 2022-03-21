package soulCodeAcademy.EmpresaAsd.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCodeAcademy.EmpresaAsd.models.Funcionario;

/**
 * 
 * @author Alana Dias
 * 
 * Interface da classe Funcionario.
 *
 */
public interface FuncionarioRepository extends JpaRepository<Funcionario,Integer>{
	
	@Query(value = "SELECT * FROM funcionario WHERE id_cargo = :id_cargo", nativeQuery = true)
	List<Funcionario> fetchByCargo(Integer id_cargo);
	/**
	 * Lista todos os funcionários de um cargo especificado.
	 * @return
	 */
	@Query(value = "SELECT id_funcionario,func_foto,func_nome,func_cpf,func_nascimento,func_telefone,func_email,cep,localidade,bairro,logradouro,numero,func_referencia,uf,ca_nome,ca_atribuicao FROM cargo right JOIN funcionario ON funcionario.id_cargo = cargo.id_cargo order by func_nome",nativeQuery = true)
	List<List> funcionariosComCargo();
	 /**
	  * Lista todas as declarações especificadas.
	  */
	@Query(value = "SELECT * FROM funcionario WHERE func_cpf = :func_cpf", nativeQuery = true)
	Funcionario fetchByCpf(String func_cpf);
	/**
	 * Retorna um funcionario de acordo com seu CPF.
	 */
}




