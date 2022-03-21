package soulCodeAcademy.EmpresaAsd.services.exceptions;
/**
 * 
 * @author Alana Dias
 *
 *Exceção lançada quando uma tentativa de inserir ou atualizar dados resulta em violação de uma restrição de integridade. 
 */
public class DataIntegrityViolationException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public DataIntegrityViolationException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public DataIntegrityViolationException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
	
}
