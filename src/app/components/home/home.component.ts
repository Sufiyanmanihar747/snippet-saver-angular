import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ShimmerComponent } from "../shimmer/shimmer.component";
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, RouterLink, ShimmerComponent]
})
export class HomeComponent {

  constructor(private dbService: DbService, private toast: HotToastService) { }

  items: any[] = []
  loading = true
  ngOnInit() {
    this.dbService.getAllSnippet().then((data: any) => {
      this.loading = false;
      this.items = data
    })
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code)
    this.toast.success("Copied to clipboard!")
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
