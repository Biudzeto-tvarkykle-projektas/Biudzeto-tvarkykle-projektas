package lt.vtmc.bva.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.vtmc.bva.model.Income;
import lt.vtmc.bva.repository.IncomeRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/incomes")
public class IncomeController {

	@Autowired
	public IncomeRepository incomeRepo;

//    public String showform(Model m){    
//        m.addAttribute("command", new Income());  
//        return "empform"; 
//    } 

	@GetMapping
	public List<Income> getIncomes() {
		return incomeRepo.findAll();

	}
	@PostMapping
	
	public Income postIncomes(@RequestBody Income income){
		return incomeRepo.save(income);
	}
	
}
