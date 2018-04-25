import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy{

 //   @Input() postList;

    postArray: any[];
    postSubscription: Subscription;

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postSubscription = this.postService.postSubject.subscribe(
            (postArray: any[]) => {
                this.postArray = postArray;
            }
        );
        this.postService.emitPostSubject();
    }

    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }
}
