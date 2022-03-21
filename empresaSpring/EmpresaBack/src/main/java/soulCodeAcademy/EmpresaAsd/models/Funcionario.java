package soulCodeAcademy.EmpresaAsd.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
/**
 * 
 * @author Alana Dias
 * 
 * Mapeamento da classe Funcionario.
 * Modelo da classe Funcionario.
 *  
 */
@Entity //Faz definição de tabela
public class Funcionario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_funcionario;

//	false - falsa a possibilidade de ser null
	@Column(nullable = false, length = 60)
	private String func_nome;
	
	

	@Column(nullable = false, length = 30)
	private String localidade;
	
	@Column(nullable = false, length = 60)
	private String bairro;
	
	@Column(nullable = false, length = 60)
	private String func_referencia;
	
	@Column(nullable = false, length = 60)
	private Integer numero;
	
	@Column(nullable = false, length = 100)
	private String logradouro;
	
	@Column(nullable = false, length = 30)
	private String cep;
	
	@Column(nullable = false, length = 30)
	private String uf;
	
	@Column(nullable = false, length = 11)
	private String func_cpf;
	
	@Column(nullable = false, length = 30)
	private String func_telefone;
	
	@Column(nullable = false, length = 100)
	private String func_email;

	@Column(nullable = true, length = 1000)
	private String func_foto;
	
	@DateTimeFormat(pattern="dd-MM-yyyy")
	@Column(columnDefinition = "date", nullable = false)
//	@Temporal(TemporalType.DATE) //sem salvar a hora, só o dia
	private Date func_nascimento;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_cargo")
	private Cargo cargo;

	public Integer getId_funcionario() {
		return id_funcionario;
	}

	public void setId_funcionario(Integer id_funcionario) {
		this.id_funcionario = id_funcionario;
	}

	public String getFunc_nome() {
		return func_nome;
	}

	public void setFunc_nome(String func_nome) {
		this.func_nome = func_nome;
	}


	public String getLocalidade() {
		return localidade;
	}

	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public String getFunc_referencia() {
		return func_referencia;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

	public String getFunc_foto() {
		return func_foto;
	}

	public void setFunc_foto(String func_foto) {
		this.func_foto = func_foto;
	}

	public String getFunc_cpf() {
		return func_cpf;
	}

	public void setFunc_cpf(String func_cpf) {
		this.func_cpf = func_cpf;
	}

	public void setFunc_referencia(String func_referencia) {
		this.func_referencia = func_referencia;
	}

	public String getFunc_telefone() {
		return func_telefone;
	}

	public void setFunc_telefone(String func_telefone) {
		this.func_telefone = func_telefone;
	}

	public String getFunc_email() {
		return func_email;
	}

	public void setFunc_email(String func_email) {
		this.func_email = func_email;
	}

	public Date getFunc_nascimento() {
		return func_nascimento;
	}

	public void setFunc_nascimento(Date func_nascimento) {
		this.func_nascimento = func_nascimento;
	}

	
	
	
	
	
}

