import routerContext from './router-context.js';
import {getPathname, getQuery, pathValidation} from './utils.js';

export default class {
    constructor(target, routes, NotFoundPage) {
        this.target = target;
        this.routes = routes;
        this.NotFoundPage = NotFoundPage;
        this.routerContext = routerContext;
        this.push = this.push.bind(this);
        this.goBack = this.goBack.bind(this);
        this.set();
        this.route();
        this.addLinkChangeHandler();
        this.addBackChangeHandler();
        console.log('b')
    }

    set() {
        // 처음에 라우터 인스턴스가 생성될 때 해야할 세팅
        routerContext.setState({ push: url => this.push(url) });
        routerContext.setState({ goBack: () => this.goBack() });
    }

    route() {
        // 경로를 찾는 메서드
        const currentPath = this.routerContext.state.pathname.slice(1).split('/');
        for (let i = 0; i < this.routes.length; i++) {
            const routePath = this.routes[i].path.slice(1).split('/');
            const params = pathValidation(currentPath, routePath);
            if (!params) continue;
            routerContext.setState({ params });
            // this.contentTitle.titleChange();
            let Page = this.routes[i].component;
            this.target.innerHTML = Page;
            return;
        }
        this.target.innerHTML = this.NotFoundPage;
    }
    addLinkChangeHandler() {
        // a 태그의 이벤트를 바꾼다
        document.querySelector('.header').addEventListener('click', e => {
            const { target } = e;
            const closest = target.closest('a');
            if (!closest || closest.getAttribute('target')) return;
            e.preventDefault();
            const pathname = closest.getAttribute('href');
            this.push(pathname);
            console.log(2)
        });
    }

    addBackChangeHandler() {
        window.addEventListener('popstate', () => {
            routerContext.setState({ pathname: getPathname(), query: getQuery() });
            this.route();
        });
    }

    push(url) {
        window.history.pushState(null, '', url);
        routerContext.setState({ pathname: url, query: getQuery() });
        this.route();
    }

    goBack() {
        window.history.back();
    }
}
