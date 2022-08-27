import { Injectable } from '@angular/core';
import { createClient, Entry } from "contentful";
import { from, Observable } from 'rxjs';
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
    const promise = this.client.getEntries();
    return from(promise);
  }

  getEnrtyById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
