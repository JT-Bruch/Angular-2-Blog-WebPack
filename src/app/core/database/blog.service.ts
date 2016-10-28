
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';

import { BlogPost, FCatKey } from '../interfaces/blog-post';
import { ConstService } from '../utility/const.service';
import { RandomService } from '../utility/random.service';

@Injectable()
export class BlogService {

  public blogs$: FirebaseListObservable<BlogPost[]>;
  public blogsObj$: FirebaseObjectObservable<BlogPost[]>;

  constructor(private af: AngularFire,
              private randomService: RandomService,
              private constService: ConstService) {

    this.blogs$ = af.database.list(this.constService.blogRoute, { query: {
      orderByChild: 'displayOrder',
      limitToFirst: constService.maxBlogPosts
    }});

    this.blogsObj$ = af.database.object(this.constService.blogRoute, { query: {
      orderByChild: 'displayOrder',
      limitToFirst: constService.maxBlogPosts
    }});

  }

  createBlog(blog: BlogPost): firebase.Promise<any> {
    return firebase.database().ref(this.constService.blogRoute).push(blog);
  }

  removeBlog(blog: BlogPost): firebase.Promise<any> {
    return this.blogs$.remove(blog.$key);
  }

  updateBlog(blog: BlogPost, changes: BlogPost): firebase.Promise<any> {
    return this.blogs$.update(blog.$key, changes);
  }

  getBlog(id: string): FirebaseObjectObservable<BlogPost> {
    return this.af.database.object(this.constService.blogRoute + id);
  }

  addViewForBlog(id): void {
    // this.blogs$.update(id, )
  }

  addView(blogRef: firebase.database.Reference) {
    blogRef.transaction(function(blog: BlogPost) {
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
        imageUrl: this.randomService.getRandomPhoto(720, 240),
        author: this.randomService.getRandomName(),
        modDate: this.randomService.getRandomDate().toISOString(),
        createDate: firebase.database.ServerValue.TIMESTAMP,
        displayOrder: this.randomService.getRandomInt(1, 10),
        viewCount: this.randomService.getRandomInt(1, 1000),
        title: this.randomService.getRandomSentence(),
        description: this.randomService.getRandomParagraph(),
        articleContent: this.randomService.getRandomParagraph(),
        likeCount: this.randomService.getRandomInt(1, 1000),
        commentCount: this.randomService.getRandomInt(1, 20),
        linkUrl: this.randomService.getRandomGoogleUrl(),
        categories: this.createFakeBlogCategoryKey()

      };
  }

  createFakeBlogCategoryKey(): FCatKey {
    let catKey: FCatKey = {};
    catKey['article'] = true;


    if (this.randomService.getRandomBool()) {
      catKey['fakse'] = true;
    }

    if (this.randomService.getRandomBool()) {
      catKey['test'] = true;
    }

    if (this.randomService.getRandomBool()) {
      catKey['anotherCat2'] = true;
    }

    if (this.randomService.getRandomBool()) {
      catKey['anotherCat1'] = true;
    }

    if (this.randomService.getRandomBool()) {
      catKey['anotherCat'] = true;
    }



    return catKey;
  }

}
