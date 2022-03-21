package soulCodeAcademy.EmpresaAsd.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCodeAcademy.EmpresaAsd.models.ContraCheque;
/**
 * 
 * @author Alana Dias
 * 
 * Interface da classe ContraCheque.
 *
 */
public interface ContraChequeRepository extends JpaRepository<ContraCheque, Integer> {
	 @Query(value = "SELECT * FROM bd_empresa.contra_cheque WHERE id_funcionario= :id_funcionario", nativeQuery = true)
	    List<ContraCheque> buscarContrasChequesDoFuncionario(Integer id_funcionario);
	 	 	/**
	 	 	 * Lista todos os contra cheques referente ao funcionário identificado.
	 	 	 */
}
