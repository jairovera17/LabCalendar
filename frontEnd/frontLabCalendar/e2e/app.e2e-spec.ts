import { FrontLabCalendarPage } from './app.po';

describe('front-lab-calendar App', () => {
  let page: FrontLabCalendarPage;

  beforeEach(() => {
    page = new FrontLabCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
