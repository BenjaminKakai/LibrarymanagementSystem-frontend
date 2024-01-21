package my.Library.model;
import java.util.Date;
import java.util.Scanner;
import java.util.UUID;

public class IssueRequest {


    private static Scanner s = new Scanner(System.in);

    private String memberID;
    private String librarianID;
    private String ISBN;
    private Date startDate;
    private int noOfDays;
    private boolean status;
    private String issueID;

    public void createRequest() {

        this.memberID = "0";
        this.librarianID = "0";
        System.out.println("Enter ISBN of book");
        this.ISBN = s.next();
        System.out.println("Enter no of days");
        this.noOfDays = s.nextInt();
        UUID uuid=UUID.randomUUID();
        this.issueID = uuid.toString();
        this.startDate = new Date();
        this.status = true;
    }

    public void showRequest() {

        System.out.println("------------ REQUEST SUMMARY ---------");
        System.out.println("Issue ID :"+this.issueID);
        System.out.println("Member ID :"+this.memberID);
        System.out.println("Book ID :"+this.ISBN);
        System.out.println("Librarian ID :"+this.librarianID);
        System.out.println("Member ID :"+this.memberID);
        System.out.println("Start Date :"+this.startDate);
        System.out.println("Number of Days :"+this.noOfDays);
        System.out.println("Status :"+(this.status==true?"Active":"Not Active"));
        System.out.println("--------------------------------------");


    }

    public void updateStatus() {
        this.status=false;
    }

    public boolean getStatus() {
        return this.status;
    }

    public String getId() {
        return this.issueID;
    }

    public void renewal(int noOfDays) {
        this.noOfDays += noOfDays;
    }
}
