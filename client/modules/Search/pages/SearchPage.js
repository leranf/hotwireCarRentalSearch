import React from 'react';
import Form from '../components/Form';
import Submit from '../components/Submit';
import ResultsList from '../../Results/components/ResultsList'

const SearchPage = () => (
  <div className="rentalCarSearchForm">
    <Form />
    <Submit />
    <ResultsList />
  </div>
);

export default SearchPage;