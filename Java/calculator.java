class calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        calculator obj = new calculator();
        System.out.println(obj.add(5, 6));        
        System.out.println(obj.add(5, 10, 15));    
        System.out.println(obj.add(2.5, 7.5));     
    }
}
