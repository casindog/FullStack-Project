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

                <ProductsContainer purpose="index" /> 

                {/* infinite scroll if detects like bottom of page */}
                
                
            </div>
        )
    }
}

export default Index;