import { RestorderPage } from './app.po';

describe('restorder App', function() {
  let page: RestorderPage;

  beforeEach(() => {
    page = new RestorderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
