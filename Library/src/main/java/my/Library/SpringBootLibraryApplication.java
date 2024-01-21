package my.Library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("my.Library.model") // Ensure entities in this package are scanned
@EnableJpaRepositories("my.Library.repository") // Ensure repositories in this package are scanned
public class SpringBootLibraryApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringBootLibraryApplication.class, args);
	}
}
