package my.Library.repository;

import my.Library.model.Book; // Corrected import statement
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, String> {
    // The JpaRepository provides all the basic CRUD operations.
    // You can add custom methods if needed.
}
