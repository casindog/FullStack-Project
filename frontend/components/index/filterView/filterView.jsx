import React from 'react';

class FilterView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e,tag) {
        // e.preventDefault();
        console.log("LOOK AT ME")
        console.log(e)
        console.log(search)
        this.props.requestProducts(
            { search: {
                tag
                }
            }
        )
    }

    render() {
        return (
            <div className='MultiView'>
                <div onClick={() => {this.handleClick(event,"dog")}}>
                    Dogs
                </div>

                <div onClick={() => { this.handleClick(event, "bbq") }}>
                    Barbecue
                </div>

                <div onClick={this.handleClick}>
                    Express
                </div>

                <div onClick={this.handleClick}>
                    Recently Viewed
                </div>
            </div>
        )
    }
}

export default FilterView;