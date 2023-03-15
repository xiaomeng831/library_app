package com.libraryapp.springbootlibrary.dao;

import com.libraryapp.springbootlibrary.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    Page<Review> findByBookId(@Param("book_id") Long bookId,
                              Pageable pageable);
}
