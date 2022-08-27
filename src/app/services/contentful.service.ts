import { Injectable } from '@angular/core';
import { createClient, Entry } from "contentful";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }
  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  });

  getAllEnteries() {
    this.client.getEntries().then(entries => console.log(entries));
  }
}
