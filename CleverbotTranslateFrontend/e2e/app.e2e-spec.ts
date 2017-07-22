import { CleverbotTranslateFrontendPage } from './app.po';

describe('cleverbot-translate-frontend App', () => {
  let page: CleverbotTranslateFrontendPage;

  beforeEach(() => {
    page = new CleverbotTranslateFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
