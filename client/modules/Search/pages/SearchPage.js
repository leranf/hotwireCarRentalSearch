import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import ResultsList from '../../Results/components/ResultsList';

const mapStateToProps = state => ({
  carResults: state.results.carResults,
});

const SearchPage = ({ carResults }) => (
  <div>
    <Form />
    {carResults ? <ResultsList /> : null}
  </div>
);

SearchPage.propTypes = {
  carResults: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(SearchPage);
