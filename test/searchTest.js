'use strict';

const chai = require('chai');
const expect = chai.expect;
import SearchPage  from '../pages/search.page';
import SearchResult from '../pages/searchResult.page';

describe('Google Search', () => {
  it('User search', () => {
    browser.url('/');
    const searchText = 'WebdriverIO';
    SearchPage.searchText(searchText);
    expect(SearchResult.firstSearchResultText()).to.include(searchText);
  });
});
