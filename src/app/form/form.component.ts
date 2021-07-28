import { Component, OnInit } from '@angular/core';
import { ApifService } from '../apif.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

public githubUserQuery:string;
public githubProfile:any;
public githubRepos:any[];

  constructor(private githubService:ApifService) {}
  
public searchUserInfo(){
// to get github profile  

  this.githubService.gitProfile(this.githubUserQuery).subscribe((data)=>{this.githubProfile = data;
    
  });
        //to get github repo
  this.githubService.gitRepos(this.githubUserQuery).subscribe((data)=>{this.githubRepos = data;
  });
}
  ngOnInit(): void {}

  }
