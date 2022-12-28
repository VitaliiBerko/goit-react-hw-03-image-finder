import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from '../styles.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    const {onClose} = this.props
    console.log(onClose());

    if (e.code === 'Escape') {
      console.log(e.code, 'нажав');
      onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleOverlayClick}>
        <div className={s.Modal}>
          <img src="" alt="" />
          <p>Modal window</p>
        </div>
      </div>,
      modalRoot
    );
  }
}
