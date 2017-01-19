import { Injectable } from '@angular/core';

// import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { BlogCategory } from '../interfaces/blog-category';
import { ConstService } from '../utility/const.service';
import { RandomService } from '../utility/random.service';

@Injectable()
export class BlogCategoryService {

  public categories$: FirebaseListObservable<BlogCategory[]>;

  private categoriesObj$: FirebaseObjectObservable<BlogCategory[]>;

  constructor(private af: AngularFire,
              private randomService: RandomService,
              private constSvc: ConstService) {

    this.categories$ = af.database.list(constSvc.categoryRoute, { query: {
      orderByChild: 'name'
    }});

    this.categoriesObj$ = af.database.object(constSvc.categoryRoute);
  }

  createBlogCategory(blogCat: BlogCategory): firebase.Promise<any> {
    return this.categories$.push(blogCat);
  }

  getCategorySnapshot() {
    return this.af.database.list(this.constSvc.categoryRoute, { preserveSnapshot: true });
  }

  addBlogCategory(val: string): void {
    let newCat: BlogCategory = {
      blogs: {
      },
      createDate: firebase.database['ServerValue']['TIMESTAMP'],
      name: val
    };
    this.categories$.push(newCat);
  }

  removeBlogCategory(blogCat: BlogCategory): firebase.Promise<any> {
    return this.categories$.remove(blogCat.$key);
  }

  updateBlogCategory(blogCat: BlogCategory, changes: any): firebase.Promise<any> {
    return this.categoriesObj$.update(blogCat);
  }
}
