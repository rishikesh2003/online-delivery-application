package com.deliveryApplication.zipzap.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deliveryApplication.zipzap.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	public List<Product> findByCategory(String category);
}




