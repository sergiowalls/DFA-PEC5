import { Component, OnInit } from '@angular/core';
import { ShowsService } from "../../services/shows.service";
import { Show } from "../../models/show.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  shows: Show[] = [];

  constructor(private showsService: ShowsService, private router: Router) { }

  ngOnInit() {
    this.showsService.getShows().subscribe(shows => {
      shows.forEach(show => {
        this.shows.push(show.show);
      })
    });
  }

  navigateToShow(id: number) {
    console.log(id);
    this.router.navigateByUrl(`/show/${id}`);
  }
}
