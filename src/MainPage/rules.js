import React from 'react';
import RegistrationForm from './RegistrationForm';
import {
  Form
} from 'antd';

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
    return (
      <WrappedRegistrationForm />
    );
  }

}