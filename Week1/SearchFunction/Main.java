import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ProductSearch searchEngine = new ProductSearch();
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter search keyword: ");
        String keyword = scanner.nextLine();

        List<Product> results = searchEngine.search(keyword);

        if (results.isEmpty()) {
            System.out.println("No products found for: " + keyword);
        } else {
            System.out.println("Search results:");
            for (Product p : results) {
                System.out.println(p);
            }
        }

        scanner.close();
    }
}

