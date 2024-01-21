package my.Library.service;

import my.Library.model.Book;
import my.Library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CatalogService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Optional<Book> updateBook(String isbn, Book updatedBook) {
        Optional<Book> bookOptional = bookRepository.findById(isbn);
        if (bookOptional.isPresent()) {
            Book existingBook = bookOptional.get();
            existingBook.setName(updatedBook.getName());
            existingBook.setAuthor(updatedBook.getAuthor());
            // Other fields you might need to update
            return Optional.of(bookRepository.save(existingBook));
        }
        return Optional.empty();
    }

    public void deleteBook(String isbn) {
        bookRepository.deleteById(isbn);
    }
}
