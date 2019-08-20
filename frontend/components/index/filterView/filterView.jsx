import React from 'react';
import merge from 'lodash/merge';
import { isAbsolute } from 'path';


class FilterView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.infiniteScroll = this.infiniteScroll.bind(this);
        this.state = {
            endIdx: 13
        };
    }

    componentDidMount() {
        // kc: for a real infinite loop, i'd ping the server for 13 new products.
        this.props.changeFilterView({view: "all", loading: false});
        this.props.requestProducts(
            {
                products: {
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
            !this.props.filterView.loading) {
                
            window.removeEventListener('scroll', this.infiniteScroll);
            
            let load = merge({}, this.props.filterView);
            load.loading = true;
            this.props.changeFilterView(load);

            this.setState((prevState) => {
                return {
                    endIdx: prevState.endIdx + 13
                };
            }, () => {
                setTimeout(() => {
                    // kc: how does "this" know it's this class obj?
                    // when i debugg in console, this refers to global object window
                    let data;
                    switch (this.props.filterView.view) {
                        case "all":
                            data = {
                                products: { endIdx: this.state.endIdx }
                            }
                            break;
                        case "dog":
                            data = {
                                search: { tag: "dog", endIdx: this.state.endIdx }
                            }
                            break;

                        case "bbq":
                            data = {
                                search: { tag: "bbq", endIdx: this.state.endIdx }
                            }
                            break;
                    }
                    this.props.requestProducts(
                        data).then(() => {
                            this.setState(prevState => {
                                return {
                                    endIdx: prevState.endIdx
                                };
                            })
                        }).then(() => {
                            let load = merge({}, this.props.filterView);
                            load.loading = false;
                            this.props.changeFilterView(load);
                            window.addEventListener('scroll', this.infiniteScroll);
                        })
                }, 1000);
            });
        };
    };

    handleClick(e,tag) {
        // e.preventDefault();

        if (tag === "all" && this.props.filterView.view !== "all") {
            this.props.changeFilterView({view: "all", loading: false});
            this.props.requestProducts(
                {
                    products: {
                        endIdx: 13
                    }
                }
            ).then(() => {
                this.setState(prevState => {
                    return {
                        endIdx: 13
                    };
                });
            });


        } else if (tag ==="dog" && this.props.filterView.view !== "dog" ||
                    tag ==="bbq" && this.props.filterView.view !== "bbq") {
            
            this.props.changeFilterView({view: tag, loading: false});

            this.props.requestProducts(
                { search: {
                    tag,
                    endIdx: 13
                    }
                }
            ).then(() => {
                this.setState(prevState => {
                    return {
                        endIdx: 13,
                    };
                });
            });
        };
    }

    render() {
        if (this.props.products.length === 0) return null;

        let selectedStyle = {
            height: "5px", 
            backgroundColor: "rgb(47, 183, 236)", 
            width: "125px",
            bottom: "-14px",
            position: "relative"
        }

        let blankStyle = {
            height: "5px",
            width: "125px",
            bottom: "-14px",
            position: "relative"
        }

        let slider = new Array(3);
        for (let i=0; i<3; i++) {
            slider[i] = <div key={i} style={selectedStyle}></div>
        }

        // debugger    
        // dumbfounded why this doesn't work.
        // if (this.props.filterView.view = "all") {
        //     slider[0] = <div key={0} style={selectedStyle}></div>
        // } else if (this.props.filterView.view = "dog") {
        //     slider[1] = <div key={1} style={selectedStyle}></div>
        // } else if (this.props.filterView.view = "bbq") {
        //     slider[2] = <div key={2} style={selectedStyle}></div>
        // }

        return (
            <div className='MultiView'>
                <div>
                    <div className="FilterView" onClick={() => this.handleClick(event, "all")}>
                        {/* add a star */}
                        Popular
                    </div>

                    <div className="FilterView" onClick={() => {this.handleClick(event,"dog")}}>
                        {/* add a dog */}
                        Dogs
                    </div>

                    <div className="FilterView" onClick={() => { this.handleClick(event, "bbq") }}>
                        {/* add a barbecue */}
                        Barbecue
                    </div>
                </div>

                <div>
                    {slider}
                </div>


                {/* develop after career fair  */}
                {/* <div onClick={this.handleClick}>
                    Express
                </div> */}

                {/* <div onClick={this.handleClick}>
                    Recently Viewed
                </div> */}
            </div>
        )
    }
}

export default FilterView;