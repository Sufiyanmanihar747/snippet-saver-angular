import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{

  snippetId!: string;
  snippet: any;

  constructor(private dbServices: DbService, private route: ActivatedRoute,private toast:HotToastService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.dbServices.getSnippetById(id).then((data:any)=>{
      this.snippet = data;
    })
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code)
    this.toast.success("Copied to clipboard!")
  }
}
