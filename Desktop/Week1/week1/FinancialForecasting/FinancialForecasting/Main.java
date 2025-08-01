import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your monthly income: ");
        double income = scanner.nextDouble();

        System.out.print("Enter your monthly expenses: ");
        double expenses = scanner.nextDouble();

        System.out.print("Enter number of months for forecast: ");
        int months = scanner.nextInt();

        Forecast forecast = new Forecast(income, expenses);
        double monthlySavings = forecast.calculateMonthlySavings();
        double totalSavings = forecast.forecastSavings(months);

        System.out.printf("Monthly savings: ₹%.2f%n", monthlySavings);
        System.out.printf("Forecasted savings after %d months: ₹%.2f%n", months, totalSavings);

        scanner.close();
    }
}

