package soulCodeAcademy.EmpresaAsd.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import soulCodeAcademy.EmpresaAsd.models.Cargo;
import soulCodeAcademy.EmpresaAsd.models.Departamento;
import soulCodeAcademy.EmpresaAsd.repositories.CargoRepository;
import soulCodeAcademy.EmpresaAsd.services.exceptions.DataIntegrityViolationException;
import soulCodeAcademy.EmpresaAsd.services.exceptions.ObjectNotFoundException;
/**
 * 
 * @author Alana Dias
 *
 *Camada de serviço da classe Cargo.
 */
@Service
public class CargoService {

	@Autowired
	private CargoRepository cargoRepository;
	
	@Lazy
	@Autowired
	private DepartamentoService departamentoService;

	public List<Cargo> mostrarTodosCargos() {
		return cargoRepository.findAll();
	}

	
	
	public Cargo buscarUmCargo(Integer id_cargo) {
		Optional<Cargo> cargo = cargoRepository.findById(id_cargo);
		// Lançamento de exceção. Tratamento de erro para ooperações críticas, passíveis de erro.
		// Se der erro, lança a exceção, a mensagem, que foi criada dentro da classe
		// ObjectNotFoundException é enviada.
		return cargo.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não cadastrado no banco de dados! O id procurado foi: " + id_cargo));
	}
	
	public List<Cargo> cargoSemDepartamento(){
		return cargoRepository.cargoSemDepartamento();
	}
	
	public Cargo cargoDoDepartamento(Integer id_departamento) {
		Cargo cargo = cargoRepository.cargoDoDepartamento(id_departamento);
		return cargo;
	}
	
	public List<List> cargoComSeuDepartamento(){
		return cargoRepository.cargoComSeuDepartamento();
	}

	public Cargo cadastrarCargo(Cargo cargo) {
		// é uma forma de segurança para não setarmos o id;
		cargo.setId_cargo(null);
		return cargoRepository.save(cargo);
	}

	public Cargo editarCargo(Cargo cargo) {
		buscarUmCargo(cargo.getId_cargo());
		return cargoRepository.save(cargo);
	}

	public void deletarUmCargo(Integer id_cargo){
		buscarUmCargo(id_cargo);
		try {
			cargoRepository.deleteById(id_cargo);
		} catch (org.springframework.dao.DataIntegrityViolationException e) {
			// O catch vem diretamente do Spring
			throw new DataIntegrityViolationException
			// Aqui no throw será inserido o tratamento de erro personalizado
			("O cargo não pode ser deletado, pois possui funcionários relacionados");
		}
	}
	
	public Cargo atribuirDepartamento(Integer id_cargo,Integer id_departamento){
		Cargo cargo = buscarUmCargo(id_cargo);
		Departamento departamentoAnterior = departamentoService.buscarDepartamentoDoCargo(id_cargo);
		Departamento departamento = departamentoService.mostrarUmDepartamento(id_departamento);
		if(cargo.getDepartamento()!=null) {
			cargo.setDepartamento(null);
			departamentoAnterior.setCargo(null);
		}
		cargo.setDepartamento(departamento);
		departamento.setCargo(cargo);
		return cargoRepository.save(cargo);
	}
	
	public Cargo deixarCargoSemDepartamento(Integer id_cargo, Integer id_departamento) {
		Cargo cargo = buscarUmCargo(id_cargo);
		cargo.setDepartamento(null);
		Departamento departamento = departamentoService.mostrarUmDepartamento(id_departamento);
		departamento.setCargo(null);
		return cargoRepository.save(cargo);
	}
}

