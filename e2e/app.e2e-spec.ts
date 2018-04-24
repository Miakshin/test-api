import { TestApiAppPage } from './app.po';

describe('test-api-app App', function() {
  let page: TestApiAppPage;

  beforeEach(() => {
    page = new TestApiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
