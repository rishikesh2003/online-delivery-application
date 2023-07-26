package com.deliveryApplication.zipzap.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deliveryApplication.zipzap.entity.Product;
import com.deliveryApplication.zipzap.service.ProductService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/products")
public class ProductController {
	@Autowired
	private ProductService service;
	
	@GetMapping("/")
	public List<Product> getProducts() {
		return service.getProducts();
	}
	

	@GetMapping("/{category}")
	public List<Product> getProductByCategory(@PathVariable String category) {
		return service.getProductByCategory(category);
	}
}
