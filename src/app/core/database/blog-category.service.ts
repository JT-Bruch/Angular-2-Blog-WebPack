
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';



import { BlogCategory, FBlogKey } from '../interfaces/blog-category';
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

    this.categoriesObj$ = af.database.object(constSvc.categoryRoute, { query: {
      orderByChild: 'name'
    }});
  }




  createBlogCategory(blogCat: BlogCategory): firebase.Promise<any> {
    return this.categories$.push(blogCat);
  }

  getCategories(): firebase.Promise<any> {
    return firebase.database().ref(this.constSvc.categoryRoute).once('value');
  }

  getCategoriesByName(maxRows = 0): Promise<BlogCategory[]> {
    let retVal = firebase.database().ref(this.constSvc.categoryRoute);
    if (maxRows > 0) {
      retVal.limitToLast(maxRows);
    }
    return  Promise.resolve(retVal.once('value').then(function(snapshot) {
      let catList: BlogCategory[] = [];
      snapshot.forEach(function(childSnapshot) {
        let childData: BlogCategory = childSnapshot.val();
        childData.count = Object.keys(childData.blogs).length;
        catList.push(childData);
      });
      return catList.sort((a, b) => b.count - a.count);
    }));
  }

  addBlogCategory(val: string): void {
    let newCat: BlogCategory = {
      name: val,
      createDate: firebase.database.ServerValue.TIMESTAMP,
      blogs: {
        '-KSbXFL6EBpBqT2mben3': true,
        '-KSbXFNgp7wQs_Hiu-nN': true
      }
    };
    firebase.database().ref(this.constSvc.categoryRoute).push(newCat);
  }

  addBlogToCategory(blogCat: BlogCategory, blogKey: FBlogKey): firebase.Promise<any> {
    blogCat.blogs = blogKey;
    return firebase.database().ref(this.constSvc.categoryRoute).set(blogCat);
  }

  removeBlogCategory(blogCat: BlogCategory): firebase.Promise<any> {
    return this.categories$.remove(blogCat.$key);
  }

  updateBlogCategory(blogCat: BlogCategory, changes: any): firebase.Promise<any> {
    return this.categoriesObj$.update(blogCat);
  }



}
