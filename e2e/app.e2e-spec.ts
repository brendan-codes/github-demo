import { GithubDemoPage } from './app.po';

describe('github-demo App', () => {
  let page: GithubDemoPage;

  beforeEach(() => {
    page = new GithubDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
