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
    space: 'xry6e7iqylks',
    accessToken: 'oCnDf77JKDyt4v9WUfKI4BO1ejS3zPuHh8U3'
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
