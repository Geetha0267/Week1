public class SingletonExample {
    private static SingletonExample instance;

    private SingletonExample() {
        System.out.println("Singleton instance created!");
    }

    public static SingletonExample getInstance() {
        if (instance == null) {
            instance = new SingletonExample();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}
