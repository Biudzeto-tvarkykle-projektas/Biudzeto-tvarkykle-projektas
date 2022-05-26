package lt.vtmc.bva.model;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@Entity
public class Amount {

	@Id
	@GeneratedValue
	private Long id;
	private BigDecimal amount;
	@NotNull
	private LocalDate date;
	private String title;

	private Amount(BigDecimal amount, LocalDate date, String title) {
		this.amount = amount;
		this.date = date;
		this.title = title;
	}
	
}
