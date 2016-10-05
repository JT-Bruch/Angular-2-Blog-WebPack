export interface SocialMediaLinks {
  facebook: string;
  twitter: string;
  github: string;
  linkedin: string;
  createDate?: string;
  $key?: string;
}

export class SocialMediaLinks implements SocialMediaLinks {

  constructor(facebook?: string,
              twitter?: string,
              linkedin?: string,
              github?: string) {
    this.facebook = facebook;
    this.twitter = twitter;
    this.linkedin = linkedin;
    this.github = github;
  }

}
