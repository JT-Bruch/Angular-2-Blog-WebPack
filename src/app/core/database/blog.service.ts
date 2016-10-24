
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { BlogPost, FCatKey } from '../interfaces/blog-post';
import { ConstService } from '../utility/const.service';
import { RandomService } from '../utility/random.service';

@Injectable()
export class BlogService {

  visibleBlogs$: Observable<BlogPost[]>;


  public blogs$: FirebaseListObservable<BlogPost[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredBlogs$: FirebaseListObservable<BlogPost[]>;

  constructor(af: AngularFire,
              private randomService: RandomService,
              private constService: ConstService) {
    const path = `/blogs/`;
    this.blogs$ = af.database.list(path, { query: {
      orderByChild: 'displayOrder',
      limitToFirst: constService.maxBlogPosts
    }});

    this.filteredBlogs$ = af.database.list(path, {query: {
      orderByChild: 'modDate',
      equalTo: this.filter$
    }});


  }




  createBlog(blog: BlogPost): firebase.Promise<any> {
    return firebase.database().ref(this.constService.blogRoute).push(blog);
  }

  removeBlog(blog: BlogPost): firebase.Promise<any> {
    return this.blogs$.remove(blog.$key);
  }

  updateBlog(blog: BlogPost, changes: any): firebase.Promise<any> {
    return this.blogs$.update(blog.$key, changes);
  }

  getBlogById(id: string): Promise<BlogPost> {
    let retVal = firebase.database().ref(this.constService.blogRoute + id);

    return  Promise.resolve(retVal.once('value').then( (snapshot: firebase.database.DataSnapshot) => {
      let blogPost: BlogPost = snapshot.val();
      this.addView(snapshot.ref);
      return blogPost;
    }));
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
