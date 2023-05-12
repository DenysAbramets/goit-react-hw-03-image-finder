import React from 'react';
import SeacrhBar from '../SeacrchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchImages, loadMoreDataFromAPI } from 'components/Api/Api';
import Button from 'components/Button/Button';
import { Container } from './App.styled';
import Spinner from 'components/Loader/Loader';
export class App extends React.Component {
  state = {
    value: '',
    images: [],
    page: 1,
    loading: false,
  };

  handleFormSubmit = value => {
    this.setState({ value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      fetchImages(this.state.value)
        .then(images => {
          this.setState({ images, page: 1 });
        })
        .catch(error => console.error(error));
    }
  }
  handleLoadMore = () => {
    this.setState({ loading: true });
    loadMoreDataFromAPI()
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <>
        <Container>
          <SeacrhBar onSubmit={this.handleFormSubmit} />
          <ImageGallery Images={this.state.images} />

          {this.state.images.length !== 0 && (
            <>
              {this.state.loading && <Spinner />}
              <Button PageChange={this.handleLoadMore} />
            </>
          )}
        </Container>
      </>
    );
  }
}
