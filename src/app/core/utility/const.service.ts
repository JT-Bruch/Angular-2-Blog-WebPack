import { Injectable } from '@angular/core';

@Injectable()
export class ConstService {

  public readonly maxBlogPosts: number = 5;
  public readonly maxCatToShow: number = 5;

  public readonly socialMediaRoute: string = `/socialmedia/`;
  public readonly categoryRoute: string = `/blogcategories/`;
  public readonly blogRoute: string = `/blogs/`;

}
