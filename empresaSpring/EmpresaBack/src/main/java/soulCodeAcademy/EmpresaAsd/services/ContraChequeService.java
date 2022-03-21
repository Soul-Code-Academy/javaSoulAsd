package soulCodeAcademy.EmpresaAsd.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCodeAcademy.EmpresaAsd.models.ContraCheque;
import soulCodeAcademy.EmpresaAsd.models.Funcionario;
import soulCodeAcademy.EmpresaAsd.models.StatusPagamento;
import soulCodeAcademy.EmpresaAsd.repositories.ContraChequeRepository;
/**
 * 
 * @author Alana Dias
 *
 *Camada de serviço da classe ContraCheque.
 */
@Service
public class ContraChequeService {

	@Autowired
	private ContraChequeRepository contraChequeRepository;
	
	@Autowired
	private FuncionarioService funcionarioService;

	public List<ContraCheque> buscarTodosContraCheques() {
        return contraChequeRepository.findAll();
    }
	
  
    public ContraCheque buscarUmContraCheque(Integer matricula) {
        Optional<ContraCheque> contraCheque = contraChequeRepository.findById(matricula);
        return contraCheque.orElseThrow();
    }
    

    public List<ContraCheque> buscarContraChequesDeUmFuncionario(Integer id_funcionario) {
        List<ContraCheque> contraCheque = contraChequeRepository.buscarContrasChequesDoFuncionario(id_funcionario);
        return contraCheque;
    }


    public ContraCheque adicionarUmContraCheque(ContraCheque contraCheque, Integer id_funcionario) {
        contraCheque.setMatricula(null);
        Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
        contraCheque.setFuncionario(funcionario);
        return contraChequeRepository.save(contraCheque);
    }

    public ContraCheque editarContraCheque(ContraCheque contraCheque, Integer id_funcionario) {
        buscarUmContraCheque(contraCheque.getMatricula());
        Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
        contraCheque.setFuncionario(funcionario);
        return contraChequeRepository.save(contraCheque);
    }
    
    public ContraCheque pagarContraCheque(Integer matricula) {
        ContraCheque contraCheque = buscarUmContraCheque(matricula);
        StatusPagamento st1 = StatusPagamento.PAGO;
        contraCheque.setCc_status(st1);
        return contraChequeRepository.save(contraCheque);
    }

    public ContraCheque cancelarContraCheque(Integer matricula) {
        ContraCheque contraCheque = buscarUmContraCheque(matricula);
        StatusPagamento st1 = StatusPagamento.CANCELADO;
        contraCheque.setCc_status(st1);
        return contraChequeRepository.save(contraCheque);
    }
    

}