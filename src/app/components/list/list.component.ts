import { Component, OnInit } from '@angular/core';
import { ShowsService } from "../../services/shows.service";
import { Show } from "../../models/show.interface";
import { Router } from "@angular/router";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
          opacity: 0.2
        })
      ),
      transition('void <=> *', animate(1500)),
    ])
  ]
})
export class ListComponent implements OnInit {
  shows: Show[] = [];
  loading: boolean = true;

  constructor(private showsService: ShowsService, private router: Router) { }

  ngOnInit() {
    this.showsService.getShows().subscribe(shows => {
      shows.forEach(show => {
        this.shows.push(show.show);
      })
      this.loading = false;
    });
  }

  navigateToShow(id: number) {
    this.router.navigateByUrl(`/show/${id}`);
  }
}
