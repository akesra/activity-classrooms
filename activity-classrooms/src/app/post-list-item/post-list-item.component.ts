import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title : string;
  @Input() content : string;
  @Input() loveIts : number = 0;
  @Input() index: number;

  created_at = new Date();

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
  }

  //Save like in the service
  onLike(){
      this.postService.like(this.index);
  }

  //Save dislike in the service
  onDislike(){
      this.postService.dislike(this.index);
  }

  onDeletePost() {
      if(confirm('Etes-vous sûr de vouloir supp ?')) {
          this.postService.deletePost(this.index);
          this.router.navigate(['posts']);
      } else {
          return null;
      }
  }

  //call the service and go through the postArray to check the loveIts value
  getColor(){
      var posts;
      posts = this.postService.getPostArray();
      if (posts[this.index].loveIts > 0){
          return 'lightgreen';
      } else if (posts[this.index].loveIts < 0){
          return 'red';
      }
  }
}
