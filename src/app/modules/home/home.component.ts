import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { GitService } from 'src/app/core/services/git/git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private gitService : GitService){
  }
  loading : boolean = false;
  potrait !: Post;
  list_post_potrait !: Array<Post>;
  footer_post_potrait !: Array<Post>;
  latest_post !: Array<Post>;

  getPost(){
    this.loading = true;
    this.gitService.getPost().subscribe({
      next: (data:any) => {
        this.loading = false;
        if(data.status === 200){
          const posts = data.data;
          this.potrait = posts[0];
          this.list_post_potrait = posts.slice(1, 4);
          this.footer_post_potrait = posts.slice(5, 7);
          this.latest_post = posts.slice(0, 4);
        }
      },
      error: (error:any) => {
        this.loading = false;
      }
    })
  }

  ngOnInit(): void {
    this.getPost();
  }


}
