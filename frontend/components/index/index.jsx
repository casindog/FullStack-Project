import React from 'react';
import ProductsContainer from './products/productsContainer';
import NavbarContainer  from './navbar/navbarContainer';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="index">
                <NavbarContainer />

                <div className='MultiView'>
                    <div>
                        Popular
                    </div>

                    <div>
                        Express
                    </div>

                    <div>
                        Recently Viewed
                    </div>

                    <div>
                        More
                    </div>
                </div>
                
                <ProductsContainer style="index" /> 
            </div>
        )
    }
}

export default Index;