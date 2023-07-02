import React, { PureComponent } from 'react';

class PureC extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                value: 1
            })
        }, 2000)
    }

    render() {
        console.log('RegularC render!');
        return (
            <div className='pure_component'>Pure component</div>
        )
    }
}

export default PureC