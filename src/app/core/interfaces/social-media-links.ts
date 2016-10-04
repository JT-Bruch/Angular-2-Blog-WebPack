export interface SocialMediaLinks {
  facebook: string;
  twitter: string;
  github: string;
  linkedin: string;
  createDate: string;
}

export class SocialMediaLinks implements SocialMediaLinks {

  constructor(facebook?: string,
              twitter?: string,
              linkedin?: string,
              github?: string) {
    facebook = '';
    twitter = '';
    linkedin = '';
    github = '';
  }

}
