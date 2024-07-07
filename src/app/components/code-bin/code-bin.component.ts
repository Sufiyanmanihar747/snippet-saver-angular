import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../models/Snippet';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-code-bin',
  standalone: true,
  templateUrl: './code-bin.component.html',
  styleUrl: './code-bin.component.css',
  imports: [ReactiveFormsModule]
})
export class CodeBinComponent {
  constructor(private dbService: DbService, private toast: HotToastService) { }

  // Reactive driven form 
  title = new FormControl("", [
    Validators.required,
  ])

  code = new FormControl("", [
    Validators.required,
  ])

  accessible = new FormControl("public", [
    Validators.required,
  ])

  binForm = new FormGroup({
    title: this.title,
    code: this.code,
    accessible: this.accessible
  })

  save() {
    if (this.binForm.valid) {
      this.dbService.createSnippet(this.binForm.value as Snippet);
      this.toast.success('Your Snippet added successfully!');
      this.binForm.reset({ accessible: 'public' });
    }
    else {
      this.toast.info('Title and snippet required!');
    }
  }
}
