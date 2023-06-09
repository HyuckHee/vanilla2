import HomePage from "../page/HomePage.js";
import SignPage from "../page/SignPage.js";
import Router from "../router.js"

export default class {
    constructor(target) {
        this.target = target;
        this.routes = [
            {path: '/' , component : HomePage},
            {path: '/sign' , component : SignPage},
        ];
        this.NotFoundPage = `<h1>Not FoundPage</h1>`;
        this.render();
    }

    // getHtml(){
    //     return`
    //         <header class="header">
    //             <div class="header header_left">
    //                 <a class="menu_name" id="menu_home" href="/">HOME</a>
    //             </div>
    //             <div class="header header_right">
    //                 <a class="menu_name" id="menu_signup" href="/sign">SIGNUP</a>
    //             </div>
    //         </header>
    //     `
    // }
    render() {
        new Router(this.target,this.routes,this.NotFoundPage);
        this.target.innerHTML = `
        
        `
    }
}
