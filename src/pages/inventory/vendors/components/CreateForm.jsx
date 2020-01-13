import { Form, Input, Modal } from 'antd';
import React from 'react';

const FormItem = Form.Item;

const CreateForm = props => {
  const { modalVisible, form, handleAdd, handleModalVisible } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };

  return (
    <Modal
      destroyOnClose
      title="New Vendor"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="First Name"
      >
        {form.getFieldDecorator('FirstName', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Enter First Name" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="Last Name"
      >
        {form.getFieldDecorator('LastName', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Enter Last Name" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="Email Address"
      >
        {form.getFieldDecorator('EmailAddress', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Enter Email Address" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="Phone Number"
      >
        {form.getFieldDecorator('PhoneNumber', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Enter Phone Number" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="Company Name"
      >
        {form.getFieldDecorator('CompanyName', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Enter Company Name" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="Company Address"
      >
        {form.getFieldDecorator('CompanyAddress', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Enter Company Address" />)}
      </FormItem>
    </Modal>
  );
};

export default Form.create()(CreateForm);
