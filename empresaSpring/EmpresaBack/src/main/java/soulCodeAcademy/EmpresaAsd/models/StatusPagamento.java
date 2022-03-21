package soulCodeAcademy.EmpresaAsd.models;

/**
 * 
 * @author Alana Dias
 * 
 * Mapeamento dos Status de Pagamentos da classe ContraCheque.
 *  
 */
public enum StatusPagamento {

	 PENDENTE("Pendente"),
	 CANCELADO("Cancelado"),
	 PAGO("Pago");
	 

	    private String descricao;

	    StatusPagamento(String descricao) {
	        this.descricao = descricao;
	    }

	    public String getDescricao() {
	        return descricao;
	    }
}
