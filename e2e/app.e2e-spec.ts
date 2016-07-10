import { IntelliMonitorPage } from './app.po';

describe('intelli-monitor App', function() {
  let page: IntelliMonitorPage;

  beforeEach(() => {
    page = new IntelliMonitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
