import { initPage } from './initPage.js';

describe('initPage', () => {
  let el, input;
  beforeEach(() => {
    el = document.createElement('div');
    el.className = 'mainContainer';
    initPage(el);
    input = el.querySelector('.inputCity');
  });
  it('creates initial markup', () => {
    expect(input).not.toBe(null);
    expect(el.querySelectorAll('div').length).toBe(4);
  });
});
