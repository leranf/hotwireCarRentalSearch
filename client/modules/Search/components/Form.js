import React from 'react';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';
import Calendar from 'react-input-calendar';
import TimeSelect from 'react-time-select';
import Submit from './Submit';
import 'moment-range';
import { setPickUpLocation, setPickUpDate, setDropOffDate, setPickUpTime, setDropOffTime } from '../SearchActions';

const initialTime = new Date();
initialTime.setHours(12);
initialTime.setMinutes(0);

const mapDispatchToProps = dispatch => ({
  changePickUpLocation: location => dispatch(setPickUpLocation(location)),
  changePickUpDate: date => dispatch(setPickUpDate(date)),
  changeDropOffDate: date => dispatch(setDropOffDate(date)),
  changePickUpTime: time => dispatch(setPickUpTime(time)),
  changeDropOffTime: time => dispatch(setDropOffTime(time)),
});

const Form = ({ changePickUpLocation, changePickUpDate, changeDropOffDate, changePickUpTime, changeDropOffTime }) => (
  <div className="container" style={{ float: 'left' }}>
    <table style={{ border: '1px solid' }}>
      <tr>Location</tr>
      <tr>
        <div style={{ 'padding-top': '10px' }}>
          <Geosuggest placeholder="Enter address" onSuggestSelect={suggest => changePickUpLocation(suggest.label)} />
        </div>
      </tr>
      <tr>Pick up date</tr>
      <tr>
        <td style={{ 'padding-top': '10px', 'padding-bottom': '10px', 'padding-right': '20px' }}><Calendar placeholder="Select Date" format="MM/DD/YYYY" computableFormat="MM/DD/YYYY" onChange={e => changePickUpDate(e)} /></td>
        <td><TimeSelect label="" value={initialTime} onChange={e => changePickUpTime(e.toTimeString().slice(0, 5))} /></td>
      </tr>
      <tr>Drop off date</tr>
      <tr>
        <td style={{ 'padding-top': '10px', 'padding-bottom': '10px' }}><Calendar placeholder="Select Date" format="MM/DD/YYYY" computableFormat="MM/DD/YYYY" onChange={e => changeDropOffDate(e)} /></td>
        <td><TimeSelect label="" value={initialTime} onChange={e => changeDropOffTime(e.toTimeString().slice(0, 5))} /></td>
      </tr>
      <tr>
        <div style={{ 'margin-left': '65px', 'padding-top': '10px' }}>
          <Submit />
        </div>
      </tr>
    </table>
  </div>
);

Form.propTypes = {
  changePickUpLocation: React.PropTypes.func.isRequired,
  changePickUpDate: React.PropTypes.func.isRequired,
  changeDropOffDate: React.PropTypes.func.isRequired,
  changePickUpTime: React.PropTypes.func.isRequired,
  changeDropOffTime: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
