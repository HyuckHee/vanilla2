import Router from '../router.js'

export default class {
    constructor() {
        this.name = "Header"
    }
    homeClick() {
        window.history.pushState({ data: 'some data' }, 'Some history entry title', '/');


    }
    signClick(){
        window.history.pushState({ data: 'some data' }, 'Some history entry title', '/sign/');
    }
    ff ($){
        $.innerHTML = Router.view;
    }
    getHtml(){
        return`
            <header class="header">
                <div class="header header_left">
                    <a class="menu_name" id="menu_home" href="/">HOME</a>
                </div>
                <div class="header header_right">
                    <a class="menu_name" id="menu_signup" href="/sign">SIGNUP</a>
                </div>
            </header>
        `
    }
}
