import { getPathname, getQuery } from './utils.js';

class RouterContext {
    constructor() {
        this.state = { pathname: getPathname(), query: getQuery(), params: {}, push: () => {}, goBack: () => {} };
    }

    setState(nextState) {
        this.state = { ...this.state, ...nextState };
    }
}

export default new RouterContext();