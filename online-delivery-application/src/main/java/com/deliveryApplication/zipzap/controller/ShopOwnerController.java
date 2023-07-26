package com.deliveryApplication.zipzap.controller;

import com.deliveryApplication.zipzap.entity.Product;
import com.deliveryApplication.zipzap.entity.ShopOwner;
import com.deliveryApplication.zipzap.service.ShopOwnerService;

import java.util.List;

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

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/shop-owners")
public class ShopOwnerController {
	@Autowired
    private  ShopOwnerService shopOwnerService;


    @GetMapping("/{email}")
    public ShopOwner getShopOwnerByEmail(@PathVariable String email) {
        return shopOwnerService.getShopOwnerByEmail(email);
    }
    
    @PostMapping("/create-product/{email}")
    public ResponseEntity<?> createProduct(@RequestBody Product product, @PathVariable String email) {
    
    	return shopOwnerService.createProduct(product, email);
    }
    
    @GetMapping("/get-products/{email}")
    public List<Product> getProducts(@PathVariable String email) {
    	return shopOwnerService.getProduct(email);
    }
    
    @DeleteMapping("/delete-product/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
    	return shopOwnerService.deleteProduct(id);
    }
    
    @PutMapping("/edit-product/{id}")
    public ResponseEntity<String> editProduct(@RequestBody Product product, @PathVariable Long id) {
    	return shopOwnerService.editProduct(product, id);
    }
}
