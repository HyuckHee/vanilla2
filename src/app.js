import Header from './components/Header.js'
import Router from './router.js'
import HomePage from "./page/HomePage.js";
import SignPage from "./page/signPage.js";

export default class {
    constructor(target) {
        this.target = target;
        this.header = new Header();
        this.routes = [
            {path: '/' , component : this.header.getHtml()+HomePage},
            {path: '/sign' , component : this.header.getHtml()+SignPage},
        ];
        this.render();

    }


    render() {
        new Router(this.target, this.routes, /*this.NotFoundPage*/ `<h1>Not FoundPage</h1>`)
    }
}


