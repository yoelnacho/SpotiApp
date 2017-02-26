import { SpotiappPage } from './app.po';

describe('spotiapp App', () => {
  let page: SpotiappPage;

  beforeEach(() => {
    page = new SpotiappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
