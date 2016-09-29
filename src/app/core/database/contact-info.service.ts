import { Injectable } from '@angular/core';

@Injectable()
export class ContactInfoService {

  primaryEmailAddress: string = 'jtbruch@gmail.com';
  primaryCellPhone: string = '+1 406 223 5161';

  constructor() { }

}
