import React from 'react';
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
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <Header>
        <FormSeacrh onSubmit={this.submitSeacrh}>
          <ButtonSearch type="submit">
            <Span>Search</Span>
          </ButtonSearch>

          <InputSearch
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
        </FormSeacrh>
      </Header>
    );
  }
}

export default SeacrhBar;
