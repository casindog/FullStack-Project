import React from 'react';
import Flyers from './Flyers';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.infiniteScroll = this.infiniteScroll.bind(this);
        this.state = {
            counter: 13,
            loading: false
        };
        this.oneTime = 0;
        // this.oneTime = this.oneTime.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    componentDidMount () {
        // kc: for a real infinite loop, i'd ping the server for 21 new products.
        // however, since this is a small clone of the real site, it is easier
        // to fetch all the products of ~200 products, and only show the next 21 products on event listener

        // scroll down on index page.
        window.addEventListener('scroll', this.infiniteScroll);
    }

    componentDidUpdate() {

        window.addEventListener('scroll', this.infiniteScroll);
    //     this.setState = (() => { 
    //       return {
    //             counter: this.state.counter,
    //             loading: false
    //         };
    //     }) ;
    }

    infiniteScroll(e) {
        // let rect = document.getElementById('root').getBoundingClientRect();
        // console.log(`scrollH: ${document.scrollingElement.scrollHeight}`);
        // console.log(`scrollT: ${document.scrollingElement.scrollTop}`);
        // console.log(`clientH: ${document.scrollingElement.clientHeight}`);
        // console.log(`scrollH-scrollT-clientH: ${document.scrollingElement.scrollHeight - document.scrollingElement.scrollTop - document.scrollingElement.clientHeight}`)

        // console.log("-----------")

        // use a setTimeout for now until I can rework the backend.
        // recruiter would not be able to identify the infinite scroll 
        // b/c it works too fast
        if (document.scrollingElement.scrollHeight 
            - document.scrollingElement.scrollTop
            - document.scrollingElement.clientHeight < 50 &&
            this.oneTime === 0) {

            window.removeEventListener('scroll', this.infiniteScroll);
            
            this.setState(() => {
                return {
                    counter: this.state.counter,
                    loading: true
                };
            });
            
            setTimeout(() => {
                this.setState(() => {
                    // debugger
                    this.oneTime = 0;
                    return { 
                        counter: this.state.counter + 13,
                        loading: false
                    };
                });
                
            },2000);
            this.oneTime += 1
        };

    }

    indexProducts() {
        // limit to show 21 first, then on scroll down detect, show another 21l
        // this.products = this.products.slice(0, 21);

        let products = this.props.products.map((product,idx) => (
            <div className="index_item_container" key={idx}>
                <div className='index_item_img'>
                    <img src={product.photoUrls} />
                    <Flyers product={product} />
                </div>

                <div className='index_item_info'>
                    <div className='index-item-top'>{product.original_price}</div>
                    <div className='index-item-bottom'>{product.transactions}+ bought this</div>
                    {/* <div>{product.verified}</div>
                    <div>{product.fast_shipping}</div>
                    <div>{product.almost_gone}</div> */}
                </div>
            </div>
        ));

        return products
    }

    render() {
        let products = this.indexProducts().slice(0,this.state.counter);

        return (
            <div style={{ backgroundColor: "rgb(248, 250, 251)", display: "flex", alignItems: "center", flexDirection: "column"}}>
                <div id="index-products">
                    {products}
                </div>

                {this.state.loading ? <div id="infinite-load"> </div> : null}
            </div>
        )
    }
}

export default Products;