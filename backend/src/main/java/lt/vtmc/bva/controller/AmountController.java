package lt.vtmc.bva.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lt.vtmc.bva.model.Amount;
import lt.vtmc.bva.repository.AmountRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/amounts")
public class AmountController {
 
	@Autowired
	public AmountRepository amountRepo;

	@GetMapping
	public List<Amount> getAmounts() {
		return amountRepo.findAll();

	}

	@GetMapping("/{id}")
	public Amount getAmount(@PathVariable Long id) {
		return amountRepo.findById(id).get();
	}

	@PostMapping
	public Amount postAmounts(@RequestBody Amount amount) {
		return amountRepo.save(amount);
	}

	@DeleteMapping("/{id}")
//	@RequestMapping
	public void deleteAmounts(@PathVariable Long id) {
		amountRepo.deleteById(id);
	}
	
//	ResponseEntity
	@PutMapping("/{id}")
	public ResponseEntity<Amount> updateAmounts(@PathVariable Long id, @Valid @RequestBody Amount amountDetails) {
		Amount amount = amountRepo.findById(id).orElseThrow() ;
		
		amount.setAmount(amountDetails.getAmount());
		amount.setDate(amountDetails.getDate());
		amount.setTitle(amountDetails.getTitle());
		final Amount updatedAmount = amountRepo.save(amount);
        return ResponseEntity.ok(updatedAmount);
	}
}
