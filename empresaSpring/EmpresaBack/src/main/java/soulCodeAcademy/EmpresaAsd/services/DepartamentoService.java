package soulCodeAcademy.EmpresaAsd.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCodeAcademy.EmpresaAsd.models.Cargo;
import soulCodeAcademy.EmpresaAsd.models.Departamento;
import soulCodeAcademy.EmpresaAsd.repositories.CargoRepository;
import soulCodeAcademy.EmpresaAsd.repositories.DepartamentoRepository;
import soulCodeAcademy.EmpresaAsd.services.exceptions.DataIntegrityViolationException;

/**
 * 
 * @author Alana Dias
 *
 *Camada de serviço da classe Departamento.
 */
@Service
public class DepartamentoService {

	@Autowired
	private DepartamentoRepository departamentoRepository;
	
	@Autowired
	private CargoService cargoService;
	
	@Autowired
	private CargoRepository cargoRepository;
	
	public List<Departamento> mostrarTodosDepartamentos(){
		return departamentoRepository.findAll();	
	}
	
	
	public Departamento mostrarUmDepartamento(Integer id_departamento) {
		Optional<Departamento> departamento = departamentoRepository.findById(id_departamento);
		return departamento.orElseThrow();
	}
	

	public Departamento buscarDepartamentoDoCargo(Integer id_cargo){
		Departamento departamento = departamentoRepository.buscarDepartamentoDoCargo(id_cargo);
		return departamento;
	}
	
	public List<Departamento> departamentoSemCargo(){
		return departamentoRepository.departamentoSemCargo();
	}
	
	public List<List> departamentoComSeuCargo(){
		return departamentoRepository.departamentoComSeuCargo();
	}
	

	public Departamento inserirDepartamento(Integer id_cargo, Departamento departamento) {
		departamento.setId_departamento(null);
		
		if(id_cargo != null) {
			Cargo cargo = cargoService.buscarUmCargo(id_cargo);
			departamento.setCargo(cargo);		
		}
		return departamentoRepository.save(departamento);	
	}
	
	
	
	public Departamento editarDepartamento(Departamento departamento) {
		mostrarUmDepartamento(departamento.getId_departamento());
		return departamentoRepository.save(departamento);
	}
	
	public void deletarUmDepartamento(Integer id_departamento){
		mostrarUmDepartamento(id_departamento);
		try {
			departamentoRepository.deleteById(id_departamento);
		} catch (org.springframework.dao.DataIntegrityViolationException e) {
			// O catch vem diretamente do Spring
			throw new DataIntegrityViolationException
			// Aqui no throw será inserido o tratamento de erro personalizado
			("O departamento não pode ser deletado.");
		}
	}
	
}