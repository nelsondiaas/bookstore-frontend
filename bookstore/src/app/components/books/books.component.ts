import { Component, OnInit } from '@angular/core';

/* Add imports */
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  applyFilter: boolean = false;
  itemsPerPage: number = 12;
  currentPage: number = 1;
  totalPages: any = [];

  carouselOptions = {
    items: 1,
    dots: false,
    navigation: false,
    loop: true,
    margin: 10,
    autoplay: true,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoHeightClass: 'owl-height'
  };

  books: [];

  default = new Array(12);

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(query => this.loadPage(query.page || 1));
  }

  private loadPage(page) {

    this.bookService.getAllBooks(page).subscribe(response => {

      this.totalPages = this.countPages(response.count, 12);

      this.currentPage = page;

      if (!response.status) {
        this.books = response.results;
      }
    });
  }

  private countPages(amountItems, itemsPerPage) {
    const totalPages: any = [];

    let amountPages = Math.round((amountItems + 1) / itemsPerPage);

    if (Math.round((amountItems + 1)) % 12 !== 0) { amountPages++; }

    for (let i = 1; i <= amountPages; i++) { totalPages.push(i); }

    return totalPages;
  }

  preserveFilterName:string;
  showFilter: boolean = false;

  showOption(selectedOption: string){
    if (selectedOption === this.preserveFilterName) {
      this.showFilter = false;
      this.preserveFilterName = null;
    } else {
      this.showFilter = true;
      this.preserveFilterName = selectedOption;
    }
  }
}
