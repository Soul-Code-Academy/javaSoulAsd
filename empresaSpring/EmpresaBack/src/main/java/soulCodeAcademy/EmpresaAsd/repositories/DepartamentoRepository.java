package soulCodeAcademy.EmpresaAsd.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCodeAcademy.EmpresaAsd.models.Departamento;
/**
 * 
 * @author Alana Dias
 * 
 * Interface da classe Departamento.
 *
 */
public interface DepartamentoRepository extends JpaRepository<Departamento,Integer>{
	
	@Query(value = "SELECT * FROM departamento WHERE id_cargo = :id_cargo", nativeQuery = true)
	Departamento buscarDepartamentoDoCargo(Integer id_cargo);
	/**
	 * Retorna o departamento atribuído ao cargo especificado.
	 * @return
	 */
	@Query(value="SELECT * FROM departamento WHERE id_cargo is null", nativeQuery = true)
	List<Departamento> departamentoSemCargo();
	/**
	 * Retorna a lista de departamentos sem cargo atribuído.
	 * @return
	 */
	@Query(value = "SELECT departamento.id_departamento,departamento.dep_nome,cargo.ca_nome,cargo.ca_atribuicao FROM cargo right JOIN departamento ON departamento.id_departamento = cargo.id_cargo order by departamento.dep_nome",nativeQuery = true)
	List<List> departamentoComSeuCargo();
	 /**
	  * Lista todas as declarações especificadas.
	  */

}

