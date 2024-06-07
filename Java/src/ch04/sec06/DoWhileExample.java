package ch04.sec06;

import java.util.Scanner;

public class DoWhileExample {
    public static void main(String[] args) {
        System.out.println("메세지를 입력하세요");
        System.out.println("프로그램을 종료하려면 q를 입력하세요");

        Scanner scanner = new Scanner(System.in);
        String inputStirng;

        do {
            System.out.print(">");
            inputStirng = scanner.nextLine();
            System.out.println(inputStirng);
        } while ( ! inputStirng.equals("q"));

        System.out.println();
        System.out.println("프로그램 종료");
    }
}
