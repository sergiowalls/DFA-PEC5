import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ScoreAndShow } from "../models/showAndScore.interface";
import { Show } from "../models/show.interface";


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient) {
  }

  getShows(): Observable<ScoreAndShow[]> {
    return this.http.get<ScoreAndShow[]>('https://api.tvmaze.com/search/shows?q=pokemon');
  }

  getShowById(id: number): Observable<Show> {
    return this.http.get<Show>(`https://api.tvmaze.com/shows/${id}`);
  }
}
