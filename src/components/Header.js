import HomePage from "../page/HomePage.js";
import SignPage from "../page/SignPage.js";
import Router from "../router.js"

export default class {
    constructor(target) {
        this.target = target;
        this.homePage = new HomePage(target);
        this.routes = [
            {path: '/' , component : this.homePage.bbb()},
            {path: '/sign' , component : SignPage},
        ];

        this.render();

        this.NotFoundPage = `<h1>Not FoundPage</h1>`;

    }

    render() {
        new Router(this.target,this.routes,this.NotFoundPage);
    }
}
