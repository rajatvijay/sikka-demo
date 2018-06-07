import React from 'react';

import {Form, Input, Button, Select, DatePicker, message, Col} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const {MonthPicker} = DatePicker;

const success = () => {
  message.success ('Car insurance added!', 2);
};

const error = () => {
  message.error ('Some error occurred!', 2);
};

class InsuranceForm extends React.Component {
  onSubmit = e => {
    e.preventDefault ();
    this.props.form.validateFields ((err, values) => {
      if (!err) {
        this.props.onSubmit (values);
      }
    });
  };

  UNSAFE_componentWillReceiveProps (nextProps) {
    // if (nextProps.isSuccess) {
    //   success ();
    // } else if (nextProps.isError) {
    //   error ();
    // }
  }

  render () {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Form onSubmit={this.onSubmit} layout="inline" style={{padding: '1em'}}>
          <Col span={8}>
            <FormItem label="Zip Code">
              {getFieldDecorator ('zipCode', {
                rules: [
                  {required: true, message: 'Please provide ZIP Code!'},
                  {max: 5, message: 'Please provide valid ZIP Code!'},
                  {min: 5, message: 'Please provide valid ZIP Code!'},
                ],
              }) (<Input type="text" style={{marginLeft: '3em'}} />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="Deductibles">
              {getFieldDecorator ('deductible', {
                rules: [
                  {required: true, message: 'Please Provide Deductibles!'},
                ],
              }) (
                <Select
                  style={{width: 200, marginLeft: '1em'}}
                  size={'default'}
                >
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                  <Option value={3}>3</Option>
                  <Option value={4}>4</Option>
                  <Option value={5}>5</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="Car Year">
              {getFieldDecorator ('carYear', {
                rules: [
                  {required: true, message: 'Please Provide Car Year!'},
                  {max: 4, message: 'Please provide valid year!'},
                  {min: 4, message: 'Please provide valid year!'},
                ],
              }) (<Input type="text" style={{marginLeft: '4em'}} />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="Car Make">
              {getFieldDecorator ('carMake', {
                rules: [{required: true, message: 'Please provide Car Make!'}],
              }) (<Input type="text" style={{marginLeft: '3em'}} />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="Car Model">
              {getFieldDecorator ('carModel', {
                rules: [{required: true, message: 'Please provide Car Model!'}],
              }) (<Input type="text" style={{marginLeft: '2em'}} />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="No. of Incidents">
              {getFieldDecorator ('incidents', {
                rules: [
                  {required: true, message: 'Please provide No. of Incidents!'},
                ],
              }) (<Input type="number" style={{marginLeft: '5px'}} />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="Driver License Tenure">
              {getFieldDecorator ('licenseTenure', {
                rules: [
                  {
                    required: true,
                    message: 'Please provide Driver License Tenure!',
                  },
                ],
              }) (<Input type="number" style={{marginLeft: '3px'}} />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="Coverage">
              {getFieldDecorator ('coverage', {
                rules: [{required: true, message: 'Please Provide Coverage!'}],
              }) (
                <Select
                  style={{width: 200, marginLeft: '2.3em'}}
                  size={'default'}
                >
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                  <Option value={3}>3</Option>
                  <Option value={4}>4</Option>
                  <Option value={5}>5</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem>
              <Button
                loading={this.props.isLoading}
                type="primary"
                htmlType="submit"
                style={{
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%',
                  marginRight: '-50%',
                  marginTop: '20px',
                }}
              >
                Submit
              </Button>
            </FormItem>
          </Col>
        </Form>
      </div>
    );
  }
}

const WrappedInsuranceForm = Form.create () (InsuranceForm);

export default WrappedInsuranceForm;
