import Page  from "./page";

class SearchPage extends Page {

    get searchInput() { return $('[name=q]') };

    get searchBtn() { return $("(//a[@id='sbfblt']/../../div/div/center/input)[1]") };

    open(path){
        super.open(path);
    }
    
    searchText(text){
        this.searchInput.waitForClickable();
        this.searchInput.setValue(text);
        this.searchBtn.waitForClickable();
        this.searchBtn.click();
    }
}

export default new SearchPage();