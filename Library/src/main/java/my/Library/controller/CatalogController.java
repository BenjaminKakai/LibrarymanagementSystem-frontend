package my.Library.controller;

import my.Library.model.Book;
import my.Library.service.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/catalog")
public class CatalogController {

    @Autowired
    private CatalogService catalogService;

    @GetMapping("/books")
    public ResponseEntity<List<Book>> getAllBooks() {
        return ResponseEntity.ok(catalogService.getAllBooks());
    }

    @PostMapping("/books")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book savedBook = catalogService.addBook(book);
        return ResponseEntity.ok(savedBook);
    }

    @PutMapping("/books/{isbn}")
    public ResponseEntity<Book> updateBook(@PathVariable String isbn, @RequestBody Book book) {
        return catalogService.updateBook(isbn, book)
                .map(ResponseEntity::ok) // If a book is found, return it with an OK status
                .orElseGet(() -> ResponseEntity.notFound().build()); // If not found, return a NOT_FOUND status
    }

    @DeleteMapping("/books/{isbn}")
    public ResponseEntity<Void> deleteBook(@PathVariable String isbn) {
        catalogService.deleteBook(isbn);
        return ResponseEntity.ok().build();
    }
}
