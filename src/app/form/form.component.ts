import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApifService } from '../apif.service';
import { catchError } from 'rxjs/operators'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

public githubUserQuery:string;
public githubProfile:any;
public githubRepos:any[];
public errorMessage:string;

  constructor(private githubService:ApifService) {}
  
public searchUserInfo(){
// to get github profile  
  this.githubService.gitProfile(this.githubUserQuery).subscribe((data)=>{this.githubProfile = data;
  },(error)=>{
    this.errorMessage = error;
  });
        //to get github repo
  this.githubService.gitRepos(this.githubUserQuery).subscribe((data)=>{this.githubRepos = data;
  },(error)=>{
    this.errorMessage = error;
  });
}
  ngOnInit(): void {
  }

  }
