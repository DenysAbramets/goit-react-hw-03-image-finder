import { ImageStyle, ModalStyle, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import React from 'react';
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay>
        <ModalStyle>
          <ImageStyle src={this.props.ImageDrop} alt="" />
        </ModalStyle>
      </Overlay>,
      modalRoot
    );
  }
}
export default Modal;
