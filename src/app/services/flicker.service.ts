import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlickerService {
  // prevKeyword: string;
  currPage: any;
  imageDataEvent: EventEmitter<any>;

  constructor(private http: HttpClient) {
    this.imageDataEvent = new EventEmitter<any>();
  }
  emitEvent(data: any) {
    this.imageDataEvent.emit(data);
  }
  getImages() {
    console.log('in service.');
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${environment.flickr.key}&min_date=05-10-21&format=json&nojsoncallback=1&per_page=5&page=5`;

    //return this.http.get(url);
    return this.http.get(url);
    //  const photoObj = {
    //    url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
    //    title: ph.title,
    //  };
    //https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg
  }
}
