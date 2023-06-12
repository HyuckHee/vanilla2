import routerContext from '../router-context.js';

export default class{
    constructor() {
        this.routerContext = routerContext;
        this.addEvent();
        console.log('c')
    }

    addEvent(){
        document.querySelector('.header').addEventListener('click', e => {
            this.titleDom = document.querySelector('.content_title');
            let path = this.routerContext.state.pathname.slice(1).split('/')[0];
            if(path == ''){
                this.titleDom.innerHTML =`
                <h1> CardView </h1>
                `;
            }else if(path == 'sign'){
                this.titleDom.innerHTML =`
                <h1> Hello, GreatPeoPle!</h1>
                `;
            }
            console.log(3)
        });
    }


}