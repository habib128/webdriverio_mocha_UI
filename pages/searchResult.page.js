import Page from './page'

class SearchResult extends Page{

    get firstSearchResult() {
        return $('#search a>h3')
    }

    firstSearchResultText(){
        this.firstSearchResult.waitForDisplayed();
        return this.firstSearchResult.getText();
    }
}

export default new SearchResult();