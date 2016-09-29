import { Injectable } from '@angular/core';

@Injectable()
export class GlobalLinkService {

  facebookLink: string = 'https://facebook.com';
  twitterLink: string = 'https://twitter.com';
  linkedInLink: string = 'https://linkedin.com';
  githubLink: string = 'https://github.com';

  copywriteYear: string = this.generateCopywriteYear();
  constructor() {
  }

  generateCopywriteYear(): string {
    const dateNow = new Date();
    return dateNow.getFullYear().toString();
  }





}
