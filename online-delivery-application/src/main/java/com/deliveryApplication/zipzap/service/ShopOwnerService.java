package com.deliveryApplication.zipzap.service;

import com.deliveryApplication.zipzap.entity.Product;
import java.util.Optional;

import com.deliveryApplication.zipzap.entity.ShopOwner;
import com.deliveryApplication.zipzap.repository.ProductRepository;
import com.deliveryApplication.zipzap.repository.ShopOwnerRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ShopOwnerService {
	@Autowired
    private ShopOwnerRepository shopOwnerRepository;
	@Autowired
	private ProductRepository productRepository;
	
    public ShopOwner getShopOwnerByEmail(String email) {
        return shopOwnerRepository.findByUserEmail(email);
    }
    
    public ResponseEntity<?> createProduct(Product product, String email) {
    	ShopOwner owner = shopOwnerRepository.findByUserEmail(email);
    	Product p = Product.builder()
    			.category(product.getCategory())
    			.description(product.getDescription())
    			.quantity(product.getQuantity())
    			.imgURL(product.getImgURL())
    			.price(product.getPrice())
    			.name(product.getName())
    			.shopOwner(owner)
    			.build();
    	
    	owner.getProducts().add(p);
    	shopOwnerRepository.save(owner);
    	
    	return ResponseEntity.ok("Product created successfully");
    }
    
    public ResponseEntity<String> deleteProduct( Long id) {
    	productRepository.deleteById(id);
    	return ResponseEntity.ok("Product deleted");
    } 
    
    public List<Product> getProduct(String email) {
    	ShopOwner owner =  shopOwnerRepository.findByUserEmail(email);
    	return owner.getProducts();
    }
    
    public ResponseEntity<String> editProduct(Product product, Long id) {
    	Optional<Product> existingProduct = productRepository.findById(product.getId());
    	existingProduct.get().setCategory(product.getCategory());
		existingProduct.get().setDescription(product.getDescription());
		existingProduct.get().setImgURL(product.getImgURL());
		existingProduct.get().setName(product.getName());
		existingProduct.get().setPrice(product.getPrice());
		existingProduct.get().setQuantity(product.getQuantity());
		existingProduct.get().setId(product.getId());
		productRepository.save(existingProduct.get());
		return ResponseEntity.ok("Product edited Successfully");
    }
}
