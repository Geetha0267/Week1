package Factory.SearchFunction;

import java.util.ArrayList;
import java.util.List;

public class ProductSearch {

    private List<Product> productList;

    public ProductSearch() {
        productList = new ArrayList<>();
        productList.add(new Product("iPhone 15", "Electronics"));
        productList.add(new Product("Samsung Galaxy", "Electronics"));
        productList.add(new Product("Nike Shoes", "Footwear"));
        productList.add(new Product("Apple Watch", "Wearables"));
        productList.add(new Product("Denim Jeans", "Clothing"));
    }

    public List<Product> search(String keyword) {
        List<Product> results = new ArrayList<>();

        for (Product product : productList) {
            if (product.getName().toLowerCase().contains(keyword.toLowerCase()) ||
                product.getCategory().toLowerCase().contains(keyword.toLowerCase())) {
                results.add(product);
            }
        }

        return results;
    }
}

