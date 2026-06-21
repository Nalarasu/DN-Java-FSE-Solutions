public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double currentValue,
                                     double growthRate,
                                     int years) {

        // Base Case
        if (years == 0) {
            return currentValue;
        }

        // Recursive Case
        return futureValue(currentValue,
                           growthRate,
                           years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double presentValue = 10000.0;
        double growthRate = 0.10; // 10%
        int years = 5;

        double result =
                futureValue(presentValue,
                            growthRate,
                            years);

        System.out.println("Present Value : " + presentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.println("Future Value  : " + result);
    }
}