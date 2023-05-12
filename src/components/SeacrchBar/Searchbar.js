import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SearchBar } from '../icons/seacrh.svg';
import {
  FormSeacrh,
  Header,
  ButtonSearch,
  Span,
  InputSearch,
} from './SearchBar.styled';
// import PropTypes from 'prop-types';
class SeacrhBar extends React.Component {
  state = {
    value: '',
  };
  submitSeacrh = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      return;
    }
    console.log(this.state.value);
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <FormSeacrh onSubmit={this.submitSeacrh}>
          <ButtonSearch type="submit">
            <Span>Search</Span>
            {this.state.value && <SearchBar />}
          </ButtonSearch>

          <InputSearch
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={event =>
              this.setState({ value: event.currentTarget.value })
            }
          />
        </FormSeacrh>
      </Header>
    );
  }
}
SeacrhBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SeacrhBar;
