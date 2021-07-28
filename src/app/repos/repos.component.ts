import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
 
 
  @Input () githubRepos:any[];

  constructor() { }

  ngOnInit(): void {
  }

}
