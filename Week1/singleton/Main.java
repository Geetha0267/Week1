public class Main {
    public static void main(String[] args) {
        SingletonExample s1 = SingletonExample.getInstance();
        SingletonExample s2 = SingletonExample.getInstance();

        s1.showMessage();

        if (s1 == s2) {
            System.out.println("Both are the same instance!");
        } else {
            System.out.println("Different instances!");
        }
    }
}
