import React from 'react';
import IndexProductsContainer from './products/productsContainer';
import NavbarContainer  from './navbar/navbarContainer';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestProducts();
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

                <IndexProductsContainer purpose="index" />             
            </div>
        )
    }
}

export default Index;