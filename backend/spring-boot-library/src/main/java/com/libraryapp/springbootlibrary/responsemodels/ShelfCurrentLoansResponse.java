package com.libraryapp.springbootlibrary.responsemodels;


import com.libraryapp.springbootlibrary.entity.Book;

public class ShelfCurrentLoansResponse {

    private Book book;
    private int daysLeft;

    public ShelfCurrentLoansResponse(Book book, int daysLeft){
        this.book = book;
        this.daysLeft = daysLeft;
    }
}
