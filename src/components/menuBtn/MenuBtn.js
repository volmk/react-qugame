import React, {Component} from 'react';

class MenuBtn extends Component {
    render() {
        const btnText = this.props.btnText
        const onClick = this.props.onClick
        return (
            <button
                className='btn btn-sm btn-primary'
                onClick={onClick}
            >
                {btnText}
            </button>
        );
    }
}

export default MenuBtn;