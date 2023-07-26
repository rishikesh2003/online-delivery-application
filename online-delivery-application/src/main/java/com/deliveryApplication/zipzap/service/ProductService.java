package com.deliveryApplication.zipzap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deliveryApplication.zipzap.entity.Product;
import com.deliveryApplication.zipzap.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository repo;
	
	public List<Product> getProducts() {
		return repo.findAll();
	}
	
	
	public List<Product> getProductByCategory(String category) {
		return repo.findByCategory(category);
	}
}
