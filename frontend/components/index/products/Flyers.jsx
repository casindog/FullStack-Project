import React from 'react';

class Flyers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        // webpack doesn't like this. why? 
        let flyers;
        if (this.props.product.almost_gone) {
            flyers = <div className='flyer'>Almost Gone!</div>
        } else if (this.props.product.just_shipping) {
            flyers = <div className='flyer'>Just pay shipping!</div>
        } else {
            flyers = <div></div>
        }
        
        return (
            <div>{flyers}</div>
        )
    }
}

export default Flyers;