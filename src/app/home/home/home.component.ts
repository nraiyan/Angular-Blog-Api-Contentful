import { ContentfulService } from './../../services/contentful.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ContentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.ContentfulService.getAllEnteries();
  }

}
