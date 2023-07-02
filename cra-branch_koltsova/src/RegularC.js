import React, { Component } from 'react';

class RegularC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'same',
        };
    }

    componentDidMount() {
        this.renderTimer = setInterval(() => {
            this.setState({
                value: 'same'
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.renderTimer);
    }

    render() {
        console.log('Regular component is rendering');
        return <div className='regular_component'>Regular Component</div>
    }
}

export default RegularC