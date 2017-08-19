import { MaistoreMaistorePage } from './app.po';

describe('maistore-maistore App', () => {
  let page: MaistoreMaistorePage;

  beforeEach(() => {
    page = new MaistoreMaistorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
