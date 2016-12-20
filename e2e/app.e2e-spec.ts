import { Angular2BlogPage } from './app.po';

describe('angular-2-blog App', () => {
  let page: Angular2BlogPage;

  beforeEach(() => {
    page = new Angular2BlogPage();
  });

  xit('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
