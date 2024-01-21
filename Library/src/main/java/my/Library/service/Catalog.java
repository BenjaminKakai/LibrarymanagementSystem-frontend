package my.Library.service;

import my.Library.model.Book;

import java.util.HashMap;

public class Catalog {
    private HashMap<String, Book> books = new HashMap<>();

    public Catalog() {
        books.put("1001", new Book("1001", "Harry Potter", "Rowling"));
        books.put("1002", new Book("1002", "War and Peace", "Leo Tolstoy"));
        books.put("1003", new Book("1003", "Half Girlfriend", "Chetan Bhagath"));
    }

    public void showCatalog() {
        for (Book book : books.values()) {
            System.out.println("Book Name: " + book.getName());
            System.out.println("Book ISBN: " + book.getIsbn());
            System.out.println("Book Author: " + book.getAuthor());
            System.out.println("----------");
        }
    }

    public void addToCatalog(String isbn, String name, String author) {
        books.put(isbn, new Book(isbn, name, author));
        System.out.println("Book added to Catalog");
    }

    public void updateCatalog(String isbn, String name, String author) {
        Book book = books.get(isbn);
        if (book != null) {
            book.setName(name);
            book.setAuthor(author);
        }
        System.out.println("Catalog Updated");
    }

    public void removeFromCatalog(String isbn) {
        books.remove(isbn);
        System.out.println("Catalog Updated");
    }
}
