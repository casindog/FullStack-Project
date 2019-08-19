import React from 'react';
import IndexProductsContainer from './products/productsContainer';
import NavbarContainer  from './navbar/navbarContainer';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.infiniteScroll = this.infiniteScroll.bind(this);
        this.state = {
            startIdx: 0,
            endIdx: 13,
            loading: false
        };
    }

    componentDidMount() {
        // kc: for a real infinite loop, i'd ping the server for 13 new products.
        // scroll down on index page.
        this.props.requestProducts(
            { products: {
                startIdx: 0,
                endIdx: 13
                }
            }
        );
        window.addEventListener('scroll', this.infiniteScroll);
    }

    infiniteScroll(e) {
        // let rect = document.getElementById('root').getBoundingClientRect();
        // console.log(`scrollH: ${document.scrollingElement.scrollHeight}`);
        // console.log(`scrollT: ${document.scrollingElement.scrollTop}`);
        // console.log(`clientH: ${document.scrollingElement.clientHeight}`);
        // console.log(`scrollH-scrollT-clientH: ${document.scrollingElement.scrollHeight - document.scrollingElement.scrollTop - document.scrollingElement.clientHeight}`)
        // console.log("-----------")

        if (document.scrollingElement.scrollHeight
            - document.scrollingElement.scrollTop
            - document.scrollingElement.clientHeight < 15 &&
            !this.state.loading) {

            window.removeEventListener('scroll', this.infiniteScroll);

            this.setState((prevState) => {
                return {
                    startIdx: prevState.startIdx+13,
                    endIdx: prevState.endIdx+13,
                    loading: true
                };
            }, () => {
                setTimeout(() => {

                    this.props.requestProducts({
                        products: { startIdx: this.state.startIdx, endIdx: this.state.endIdx }
                    }).then(() => {
                        this.setState(prevState => {
                            return {
                                startIdx: prevState.startIdx,
                                endIdx: prevState.endIdx,
                                loading: false
                            };
                        })
                    }).then(() => {
                        window.addEventListener('scroll', this.infiniteScroll);
                    })
                }, 1000);
            });
        };
    }

    render() {
        if (this.props.products.length === 0) return null;

        return (
            <div id="index">

                <NavbarContainer />

                <div className='MultiView'>
                    <div>
                        Dogs
                    </div>

                    <div>
                        Barbecue
                    </div>

                    <div>
                        Express
                    </div>

                    <div>
                        Recently Viewed
                    </div>
                    
                </div>

                <div style={{ backgroundColor: "rgb(248, 250, 251)", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <IndexProductsContainer purpose="index" />     
                    {this.state.loading ? <div id="infinite-load"> </div> : null}
                </div>

            </div>
        )
    }
}

export default Index;