import { AuthService } from './../auth/auth.service';

import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { BlogPost, EditBlogPost } from '../interfaces/blog-post';
import { ConstService } from '../utility/const.service';
import { RandomService } from '../utility/random.service';

@Injectable()
export class BlogService {

  public blogs$: FirebaseListObservable<BlogPost[]>;
  public blogsObj$: FirebaseObjectObservable<BlogPost[]>;

  constructor(private af: AngularFire,
              private randomService: RandomService,
              private authService: AuthService,
              private constService: ConstService) {

    this.blogs$ = af.database.list(this.constService.blogRoute, { query: {
      limitToFirst: constService.maxBlogPosts,
      orderByChild: 'displayOrder'
    }});

    this.blogsObj$ = af.database.object(this.constService.blogRoute);

  }

  createBlog(blog: BlogPost): firebase.database.ThenableReference {
    blog.author = this.authService.getDisplayName();
    return this.blogs$.push(blog);
  }

  removeBlog(blog: BlogPost): firebase.Promise<any> {
    return this.blogs$.remove(blog.$key);
  }

  updateBlog(key: string, changes: EditBlogPost): firebase.Promise<void> {
    return this.af.database.object(this.constService.blogRoute + key).update(changes);
  }

  getBlog(id: string): FirebaseObjectObservable<BlogPost> {
    return this.af.database.object(this.constService.blogRoute + id);
  }

  addViewForBlog(id): void {
    // this.blogs$.update(id, )
  }

  addView(blogRef: firebase.database.Reference) {
    blogRef.transaction((blog: BlogPost) => {
      if (blog) {
        blog.viewCount++;
          if (!blog.viewCount) {
            blog.viewCount = 1;
          }
      }
      return blog;
    });
  }

  createFakeBlogPost(): BlogPost {
    return {
        articleContent: this.randomService.getRandomParagraph(),
        author: this.randomService.getRandomName(),
        categories: {},
        commentCount: this.randomService.getRandomInt(1, 20),
        createDate: firebase.database['ServerValue']['TIMESTAMP'],
        description: this.randomService.getRandomParagraph(),
        displayOrder: this.randomService.getRandomInt(1, 10),
        imageUrl: this.randomService.getRandomPhoto(720, 240),
        likeCount: this.randomService.getRandomInt(1, 1000),
        linkUrl: this.randomService.getRandomGoogleUrl(),
        modDate: this.randomService.getRandomDate().toISOString(),
        title: this.randomService.getRandomSentence(),
        viewCount: this.randomService.getRandomInt(1, 1000)
      };
  }

}
