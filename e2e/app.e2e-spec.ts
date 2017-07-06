import { Aula3Page } from './app.po';

describe('aula3 App', () => {
  let page: Aula3Page;

  beforeEach(() => {
    page = new Aula3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
