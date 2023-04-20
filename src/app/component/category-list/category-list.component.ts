import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }
}
