import routerContext from '../router-context.js';

    export default class {
        constructor(target) {
            this.title = 'home'
            this.htmlStr = '';

            this.routerContext = routerContext;
            console.log('a')
            this.addEvent();
            // this.myList.innerHTML = this.myList;
        }

        getHtml2(data){
                for(let i =0; i<data.length; i++){
                    this.htmlStr += `<div idx="${i+1}" class="card">
                        <div class="card_plane card_plane--front">${data[i].name}</div>
                    </div>`
                }
                debugger;
        }

        addEvent(){
            document.querySelector('.header').addEventListener('click', e => {
                    document.querySelector('#cards_container').insertAdjacentHTML(
                        'beforeend',
                        this.htmlStr
                    );
            });
        }

        bbb() {
            this.aaa();
            let dom = `<main id="page_content">
                                <div class="content_title">
                                </div>
                                <div id="cards_container">
                                </div>
                            </main>
                        `
            return dom;
        }

         aaa() {

            fetch("src/data/new_data.json")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error, status = ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    this.getHtml2(data);

                    document.querySelector('#cards_container').insertAdjacentHTML(
                        'beforeend',
                        this.htmlStr
                    );


                })
                .catch((error) => {
                    const p = document.createElement("p");
                    p.appendChild(document.createTextNode(`Error: ${error.message}`));
                    // document.body.insertBefore(p, myList);
                });
             debugger;

        }
    }
