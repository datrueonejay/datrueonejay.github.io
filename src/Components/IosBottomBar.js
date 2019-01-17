import React, { Component } from 'react';

export default class IosBottomBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            singleClick: false,
            doubleClick: false,
        }
    }

    click = () => {
        this.setState(state => {

            if (!this.state.singleClick) {
                setTimeout(
                    () => {
                        if (!this.state.doubleClick) {
                            this.props.onSingleClick();
                        }
                        this.setState(s => {

                            return {
                                ...s,
                                singleClick: false,
                                doubleClick: false,
                            }
                        })

                    }, 200
                );
                return (
                    {
                        ...state,
                        singleClick: true,
                    }
                
                )
            }
            this.props.onDoubleClick();
            return {
                ...state,
                doubleClick: true
            }
            
        });
    }    

    render() {
        return(
        <div className='Navbar IosBar'>
        <img className='IosBarButton' alt='home' onClick={this.click} src={require('../images/iosHome.png')}/>

        </div>
        );
    }
}
