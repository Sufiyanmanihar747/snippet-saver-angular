import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { CommonModule } from '@angular/common';
import { ShimmerComponent } from "../shimmer/shimmer.component";
import { FormsModule } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-mysnippet',
  standalone: true,
  templateUrl: './mysnippet.component.html',
  styleUrls: ['./mysnippet.component.css'],
  imports: [CommonModule, ShimmerComponent, FormsModule]
})

export class MysnippetComponent implements OnInit {
  loading = true;
  editingSnippet: boolean = false;
  currentSnippet: any = null;
  formError: string = '';

  constructor(private dbService: DbService, private toast: HotToastService) { }

  items: any[] = [];

  ngOnInit() {
    this.fetchUserSnippets();
    // this.toast.show('Hello World!');
    // this.toast.loading('Lazyyy...');
    // this.toast.success('Yeah!!');
    // this.toast.warning('Boo!');
    // this.toast.error('Oh no!');
    // this.toast.info('Something...');

  }

  async fetchUserSnippets() {
    console.log("Fetching user snippets");
    try {
      const data: any[] = await this.dbService.getMySnippet();
      this.loading = false;
      if (data && data.length > 0) {
        this.items = data;
      } else {
        this.items = [];
      }
    } catch (error) {
      console.error('Error fetching data', error);
      this.toast.error('Something went wrong!!');
    }

  }
  async deleteSnippet(id: string) {
    this.toast.loading("Loading...", {
      duration: 500,
    })
    await this.dbService.deleteSnippet(id);
    this.toast.success('Snippet deleted successfully!');
    await this.fetchUserSnippets();
  }

  editSnippet(snippet: any) {
    this.currentSnippet = { ...snippet };
    this.editingSnippet = true;
    this.formError = '';

  }

  async updateSnippet() {
    if (!this.currentSnippet.title || !this.currentSnippet.code) {
      this.toast.info('title and code are required');
      return;
    }
    try {
      this.toast.loading("Loading...", {
        duration: 1000,
      })
      await this.dbService.updateSnippet(this.currentSnippet);
      this.items = this.items.map(item => item.id === this.currentSnippet.id ? this.currentSnippet : item);
      this.editingSnippet = false;
      this.toast.success('Snippet updated successfully');

    } catch (error) {
      console.error('Error updating snippet', error);
      this.toast.error('Failed to update snippet');
    }
  }

  cancelEdit() {
    this.editingSnippet = false;
    this.currentSnippet = null;
    this.formError = '';
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code)
    this.toast.success("Copied to clipboard!")
  }
}
