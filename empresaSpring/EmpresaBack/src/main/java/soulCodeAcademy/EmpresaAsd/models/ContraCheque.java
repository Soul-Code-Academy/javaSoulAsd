package soulCodeAcademy.EmpresaAsd.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
/**
 * 
 * @author Alana Dias
 * 
 * Mapeamento da classe ContraCheque.
 * Modelo da classe ContraCheque.
 *  
 */
@Entity
public class ContraCheque {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer matricula;
	
	@Column(nullable = false, length=100)
	private String cc_descricao;
	
	@Column(nullable = false, length=11)
	private String cc_pis;
	
	@NumberFormat(pattern = "#,##0.00")
	@Column(nullable = false)
	private String cc_bonificacao;
	
	@NumberFormat(pattern = "#,##0.00")
	@Column(nullable = false)
	private String cc_auxilioAlimentacao;
	
	@NumberFormat(pattern = "#,##0.00")
	@Column(nullable = false)
	private String cc_auxilioTransporte;
	
	@NumberFormat(pattern = "#,##0.00")
	@Column(nullable = false)
	private Double cc_valor;
	
	@NumberFormat(pattern = "#,##0.00")
	@Column(nullable = false)
	private Double cc_total;
	
	
	@DateTimeFormat(pattern="dd-MM-yyyy")
	@Column(columnDefinition = "date", nullable = false)
//	@Temporal(TemporalType.DATE) //sem salvar a hora, só o dia
	private Date cc_dataAdmissao;
	
	@DateTimeFormat(pattern="dd-MM-yyyy")
	@Column(columnDefinition = "date", nullable = false)
//	@Temporal(TemporalType.DATE) //sem salvar a hora, só o dia
	private Date cc_dataPagamento;
	
	@Enumerated(EnumType.STRING)
	private StatusPagamento cc_status;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_funcionario")
	private Funcionario funcionario;

	public Integer getMatricula() {
		return matricula;
	}

	public void setMatricula(Integer matricula) {
		this.matricula = matricula;
	}

	public String getCc_descricao() {
		return cc_descricao;
	}

	public void setCc_descricao(String cc_descricao) {
		this.cc_descricao = cc_descricao;
	}

	public String getCc_pis() {
		return cc_pis;
	}

	public void setCc_pis(String cc_pis) {
		this.cc_pis = cc_pis;
	}

	public String getCc_bonificacao() {
		return cc_bonificacao;
	}

	public void setCc_bonificacao(String cc_bonificacao) {
		this.cc_bonificacao = cc_bonificacao;
	}

	public String getCc_auxilioAlimentacao() {
		return cc_auxilioAlimentacao;
	}

	public void setCc_auxilioAlimentacao(String cc_auxilioAlimentacao) {
		this.cc_auxilioAlimentacao = cc_auxilioAlimentacao;
	}

	public String getCc_auxilioTransporte() {
		return cc_auxilioTransporte;
	}

	public void setCc_auxilioTransporte(String cc_auxilioTransporte) {
		this.cc_auxilioTransporte = cc_auxilioTransporte;
	}

	public Double getCc_valor() {
		return cc_valor;
	}

	public void setCc_valor(Double cc_valor) {
		this.cc_valor = cc_valor;
	}

	public StatusPagamento getCc_status() {
		return cc_status;
	}

	public void setCc_status(StatusPagamento cc_status) {
		this.cc_status = cc_status;
	}

	public Date getCc_dataAdmissao() {
		return cc_dataAdmissao;
	}

	public void setCc_dataAdmissao(Date cc_dataAdmissao) {
		this.cc_dataAdmissao = cc_dataAdmissao;
	}

	public Date getCc_dataPagamento() {
		return cc_dataPagamento;
	}

	public void setCc_dataPagamento(Date cc_dataPagamento) {
		this.cc_dataPagamento = cc_dataPagamento;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}

	public Double getCc_total() {
		return cc_total;
	}

	public void setCc_total(Double cc_total) {
		this.cc_total = cc_total;
	}

	
	

	
	
}
