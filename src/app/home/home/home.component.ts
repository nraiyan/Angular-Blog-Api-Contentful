import { ContentfulService } from './../../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogPosts$: Observable<any> | undefined;


  constructor(private ContentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.blogPosts$ = this.ContentfulService.getAllEnteries();
  }

}
