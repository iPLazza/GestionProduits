package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.dao.ProduitRepository;
import com.example.entities.Produit;


@SpringBootApplication
public class SpringAngularJsApplication implements CommandLineRunner{

	@Autowired
	private ProduitRepository produitRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringAngularJsApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		produitRepository.save(new Produit("Nokia", 900, 6));
		produitRepository.save(new Produit("Samsung", 980, 2));
		produitRepository.save(new Produit("iPhone", 977, 4));

	}
}
