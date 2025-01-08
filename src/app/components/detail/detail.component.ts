import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ShowsService } from "../../services/shows.service";
import { Show } from "../../models/show.interface";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  show!: Show;
  detailsVisible = false;

  constructor(private activatedRoute: ActivatedRoute, private showsService: ShowsService, private router: Router) {
  }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.showsService.getShowById(id).subscribe(show => {
      this.show = show;
    });
  }

  navigateToShowList() {
    this.router.navigateByUrl('/');
  }

  showDetails() {
    this.detailsVisible = true;
  }
}
