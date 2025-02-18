import { updateHistoryList } from './index.js';
import { initPage } from './initPage';

describe('Basic function inter-working', () => {
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    el.className = 'mainContainer';
    initPage(el);
  });
  const getList = () =>
    [...el.querySelectorAll('.liHistory')].map((el) => el.innerHTML);

  it('Check history list of city', () => {
    updateHistoryList('Samara', el);
    updateHistoryList('Omsk', el);
    expect(getList()).toEqual(['Omsk', 'Samara']);
  });
  it('Check history list lenght <=10', () => {
    for (let i = 1; i <= 12; i++) {
      updateHistoryList('Samara', el);
    }
    expect(getList().length).toBe(10);
  });
});
