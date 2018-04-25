import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { FormsModule } from '@angular/forms';
import {PostService} from './services/post.service';
import {RouterModule, Routes} from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
    { path: 'posts',  component: PostListComponent },
    { path: 'new',  component: NewPostComponent },
    { path: '',  component: PostListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
