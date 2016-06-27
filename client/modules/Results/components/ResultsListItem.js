import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  carTypes: state.results.carTypes,
});

const ResultsListItem = ({ carTypes, CarTypeCode, DailyRate, TotalPrice, MileageDescription }) => (
  <div style={{ padding: '10px' }}>
    <table style={{ border: '1px solid', width: '500px' }}>
      <tr>
        <td style={{ float: 'left', 'font-weight': 'bold', 'font-size': 'larger' }}>{carTypes[CarTypeCode].CarTypeName}</td>
        <td style={{ float: 'right', 'font-weight': 'bold', 'font-size': 'larger', color: 'red' }}>${DailyRate.split('.')[0]}</td>
      </tr>
      <tr>
        <td style={{ float: 'left' }}>{carTypes[CarTypeCode].PossibleModels}</td>
        <td style={{ float: 'right', 'font-size': 'small' }}>and up, per day</td>
      </tr>
      <tr>
        <td style={{ float: 'left' }}>{MileageDescription} miles</td>
        <td style={{ float: 'right' }}>${TotalPrice.split('.')[0]} total</td>
      </tr>
    </table>
  </div>
);

ResultsListItem.propTypes = {
  carTypes: React.PropTypes.object.isRequired,
  CarTypeCode: React.PropTypes.string.isRequired,
  DailyRate: React.PropTypes.string.isRequired,
  TaxesAndFees: React.PropTypes.string.isRequired,
  TotalPrice: React.PropTypes.string.isRequired,
  MileageDescription: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(ResultsListItem);
