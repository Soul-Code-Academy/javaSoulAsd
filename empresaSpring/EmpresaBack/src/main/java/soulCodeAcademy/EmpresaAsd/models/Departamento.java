package soulCodeAcademy.EmpresaAsd.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
/**
 * 
 * @author Alana Dias
 * 
 * Mapeamento da classe Departamento.
 * Modelo da classe Departamento.
 *  
 */
@Entity
public class Departamento {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_departamento;
	
	
	@Column(nullable = false, length = 100)
	private String dep_nome;
	
	
	@OneToOne
	@JoinColumn(name = "id_cargo", unique = true)
	@JsonIgnore
	private Cargo cargo;


	public Integer getId_departamento() {
		return id_departamento;
	}


	public void setId_departamento(Integer id_departamento) {
		this.id_departamento = id_departamento;
	}


	public String getDep_nome() {
		return dep_nome;
	}


	public void setDep_nome(String dep_nome) {
		this.dep_nome = dep_nome;
	}


	public Cargo getCargo() {
		return cargo;
	}


	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}


	
	
	
}

