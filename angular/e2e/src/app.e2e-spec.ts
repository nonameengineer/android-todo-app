import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Delat\n\'');
  });

  it('should go to new task page', () => {
    page.navigateTo();
    element(by.tagName('input')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/new');
  });

  it('should go to today tasks section settings page', () => {
    page.navigateTo();
    element(by.tagName('app-section-title')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/section-settings?title=today');
  });

  it('should go to today task page', () => {
    page.navigateTo();
    element(by.tagName('app-task-item')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/task?id=2');
  });

  it('should go to trashcan page', () => {
    page.navigateTo();
    element(by.css('.buttons > img:nth-child(1)')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/trashcan');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
