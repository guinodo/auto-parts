package br.com.autoparts.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api/usuario")
public class UsuarioController {

	@GetMapping("/lista")
	public List<String> getJobs() {
		
		List<String> t = new ArrayList<>();
		t.add("teste 1");
		t.add("teste 2");
		t.add("teste 3");
		t.add("teste 4");
		
		return t;
	}
	
}
