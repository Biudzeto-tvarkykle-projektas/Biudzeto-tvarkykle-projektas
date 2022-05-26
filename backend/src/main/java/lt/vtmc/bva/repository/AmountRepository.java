package lt.vtmc.bva.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import lt.vtmc.bva.model.Amount;
//import lt.vtmc.bva.model.Income;

public interface AmountRepository extends JpaRepository<Amount, Long> {
	
	//List<Income> findById(Long id);

}
