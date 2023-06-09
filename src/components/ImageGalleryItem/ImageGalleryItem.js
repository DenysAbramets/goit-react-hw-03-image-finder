/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Modal from '../Modal/Modal';
import { Item, ImageStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };
  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    return (
      <Item key={this.props.Card.id}>
        <ImageStyled
          src={this.props.Card.webformatURL}
          alt={`Image with id=${this.props.Card.id}`}
          width="150"
          onClick={this.toogleModal}
        />
        {this.state.showModal && (
          <Modal
            ImageDrop={this.props.Card.largeImageURL}
            onClose={this.toogleModal}
          />
        )}
      </Item>
    );
  }
}
ImageGalleryItem.propTypes = {
  Card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};
export default ImageGalleryItem;
