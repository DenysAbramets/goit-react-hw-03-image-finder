import React from 'react';
import SeacrhBar from '../SeacrchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import fetchImages from 'Api/Api';
import Button from 'components/Button/Button';
import { Container } from './App.styled';
export class App extends React.Component {
  state = {
    value: '',
    images: [],
    page: 1,
  };

  handleFormSubmit = value => {
    this.setState({ value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      fetchImages(this.state.value, this.state.page)
        .then(images => {
          console.log(images);
          this.setState({ images });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <>
        <Container>
          <SeacrhBar onSubmit={this.handleFormSubmit} />
          <ImageGallery Images={this.state.images} />

          {this.state.images.length !== 0 && <Button />}
        </Container>
      </>
    );
  }
}
