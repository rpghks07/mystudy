package sec05.chap04.ex03;

public class Product {

    private static double discount = 0.2;
    private static double increaseLimit = 1.2;

    private String name;
    private int price;

    public static double getDiscount() {
        return discount;
    }

    public static void setDiscount(double discount) {
        Product.discount = discount;
    }

    public static double getIncreaseLimit() {
        return increaseLimit;
    }

    public static void setIncreaseLimit(double increaseLimit) {
        Product.increaseLimit = increaseLimit;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Product(String name, int price) {
        this.name = name;
        this.price = price;
    }
}