class ElmntFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <figure>
                    <img src="assets/img/wartech/transparent.svg" alt"Icon">
                </figure>
                
                <div class="text-box">
                    <h1>BURGER</h1>
                    <p> 
                        Email : 
                        <a href="https://gmail.com">
                            nrizky131103@gmail.com
                        </a>
                    </p>
                    <p>
                        Instagram : 
                        <a href="https://instagram.com/naufalrzky._">
                            @naufalrzky._
                        </a>
                    </p>
                    <p class="last">Made With Love. Developed by Naufal Rizky</p>
                </div>
            </div>
        `;
    }
}

customElements.define('elmnt-footer', ElmntFooter);