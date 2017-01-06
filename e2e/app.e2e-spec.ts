import { AngArtPage } from './app.po';

describe('ang-art App', function() {
  let page: AngArtPage;

  beforeEach(() => {
    page = new AngArtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
