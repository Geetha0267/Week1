public class Forecast {
    private double income;
    private double expenses;

    public Forecast(double income, double expenses) {
        this.income = income;
        this.expenses = expenses;
    }

    public double calculateMonthlySavings() {
        return income - expenses;
    }

    public double forecastSavings(int months) {
        return calculateMonthlySavings() * months;
    }
}
