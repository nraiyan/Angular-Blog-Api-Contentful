import { ContentfulService } from './../../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  blogPost$: Observable<any> | undefined;

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];

        this.blogPost$ = this.contentfulService.getEnrtyById(id);
      }
    );

  }

}
