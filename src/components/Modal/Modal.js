import React, { Component } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleOutideClick = this.handleOutideClick.bind(this);
  }

  handleOutideClick(e) {
    const { onClose } = this.props;

    if (e.target.className === 'modal') onClose();
  }

  render() {
    const { children, onClose } = this.props;

    return (
      <div
        className="modal"
        onClick={ (e) => this.handleOutideClick(e) }
        aria-hidden="true"
      >
        <div className="container">
          <div className="content-modal">{ children }</div>
          <button
            className="button-ok"
            onClick={ () => onClose() }
            type="button"
          >
            OK
          </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
