package soulCodeAcademy.EmpresaAsd.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCodeAcademy.EmpresaAsd.models.Cargo;
import soulCodeAcademy.EmpresaAsd.models.Funcionario;
import soulCodeAcademy.EmpresaAsd.repositories.FuncionarioRepository;
import soulCodeAcademy.EmpresaAsd.services.exceptions.ObjectNotFoundException;
/**
 * 
 * @author Alana Dias
 *
 *Camada de serviço da classe Funcionario.
 */
@Service
public class FuncionarioService {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private CargoService cargoService;
	
	public List<Funcionario>mostrarTodosFuncionarios(){
		return funcionarioRepository.findAll();	//findAll mostra todos os registros
		}
	
	public List<List> funcionariosComCargo(){
		return funcionarioRepository.funcionariosComCargo();
	}
	
	public Funcionario buscarUmFuncionario(Integer id_Funcionario) {
		
		//Optional - evita os erros NullPointerExcetion, tirando a necessidade da verificação por criação de código. Ex.: (if funcionario != null
		//orElseThrow() - se o funcionario estiver no banco de dads, retorna o funcionario. Se não, lança uma exceção.
		Optional<Funcionario>funcionario = funcionarioRepository.findById(id_Funcionario);
		return funcionario.orElseThrow(() -> new ObjectNotFoundException("Objeto não cadastrado. ID: " + id_Funcionario));
	}
	
	public Funcionario inserirFuncionario(Integer id_cargo, Funcionario funcionario) {
		funcionario.setId_funcionario(null);
		Cargo cargo = cargoService.buscarUmCargo(id_cargo);
		funcionario.setCargo(cargo);		
		return funcionarioRepository.save(funcionario);
	}
	
	
	public void deletarUmFuncionario(Integer id_funcionario) {
		funcionarioRepository.deleteById(id_funcionario);
	}
	
	public Funcionario editarFuncionario(Funcionario funcionario) {
		buscarUmFuncionario(funcionario.getId_funcionario());
		return funcionarioRepository.save(funcionario);
	}
	
	public List<Funcionario> buscarFuncionarioPorCargo(Integer id_cargo){
		List<Funcionario> funcionario = funcionarioRepository.fetchByCargo(id_cargo);
		return funcionario;
	}
	
	
	public Funcionario salvarFoto(Integer id_funcionario, String caminhoFoto){
		Funcionario funcionario = buscarUmFuncionario(id_funcionario);
		funcionario.setFunc_foto(caminhoFoto);
		return funcionarioRepository.save(funcionario);
	}
	

	public Funcionario buscarFuncionarioPeloCpf(String func_cpf) {
		Funcionario funcionario = funcionarioRepository.fetchByCpf(func_cpf);
		return funcionario;
	}
	

}


