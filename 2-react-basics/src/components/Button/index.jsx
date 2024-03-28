import { Component } from 'react'
import p from 'prop-types';
import './styles.css';
export class Button extends Component {
    render() {
        const { text, onClick, disabled } = this.props;
        return (
            // eslint-disable-next-line react/react-in-jsx-scope
            <button onClick={onClick} className='button' disabled={disabled}>
                {text}
            </button>

        );
    }
}

Button.defaultProps = {
  disabled : false,
}

Button.propTypes = {
  text: p.string.isRequired,
  onClick: p.func.isRequired,
  disabled: p.bool,
}
