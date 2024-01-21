package my.Library.model;
import my.Library.service.AccountInterface;

import java.util.Scanner;

public class Librarian implements AccountInterface {

    private Scanner s = new Scanner(System.in);
    private String lID;
    private String name;
    private String password;

    public String register() {
        System.out.println("Enter your name");
        this.name = s.next();
        System.out.println("Enter your password");
        this.password = s.next();
        int count = 0;
        this.lID = "LIB"+ count;
        System.out.println("Librarian Registration Successful !");
        return lID;
    }

    public String login() {

        String id,passw;
        System.out.println("Enter your ID");
        id = s.next();
        System.out.println("Enter your password");
        passw = s.next();
        System.out.println("Librarian Login Successful !");
        return id;
    }
}
