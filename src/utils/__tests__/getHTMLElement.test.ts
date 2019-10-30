import { getHTMLElement } from '../getHTMLElement';

describe('getHTMLElement', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('with string should return an HTML element', () => {
    const root = document.createElement('div');
    root.id = 'root';

    document.body.appendChild(root);

    expect(getHTMLElement('#root')).toEqual(root);
  });

  test('with HTML element should return the HTML element', () => {
    const root = document.createElement('div');
    root.id = '#root';

    document.body.appendChild(root);

    expect(getHTMLElement(root)).toEqual(root);
  });
});
