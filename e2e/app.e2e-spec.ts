import { Ang2boot3Page } from './app.po';

describe('ang2boot3 App', () => {
  let page: Ang2boot3Page;

  beforeEach(() => {
    page = new Ang2boot3Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
