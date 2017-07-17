import { SpotiPage } from './app.po';

describe('spoti App', () => {
  let page: SpotiPage;

  beforeEach(() => {
    page = new SpotiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
