import Header from './components/Header.js'
import ContentTitle from './components/ContentTitle.js'


export default class {
    constructor(target) {
        this.target = target;
        this.render();
    }


    render() {
        new Header(this.target);
        new ContentTitle();
        // new Router(this.target, this.routes, /*this.NotFoundPage*/ `<h1>Not FoundPage</h1>`)
    }
}


