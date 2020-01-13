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
      title="New Account"
      visible={modalVisible}
      width={700}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 5,
        }}
        label="Photo"
      >
        {form.getFieldDecorator('Photo', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input/>)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 7,
        }}
        label="Employee ID"
      >
        {form.getFieldDecorator('EmployeeID', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="111-111-101" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 7,
        }}
        label="Status"
      >
        {form.getFieldDecorator('Status', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<select placeholder="Enter Status">
            <option>ACTIVE</option>
            <option>INACTIVE</option>
            </select>)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 7,
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
        })(<Input placeholder="Abigail" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 7,
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
        })(<Input placeholder="Fernandez" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
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
        })(<Input placeholder="apfernandez2@up.edu.ph" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
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
        })(<Input placeholder="+63 916 123 9563" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="Address"
      >
        {form.getFieldDecorator('Address', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Brgy. Tadlac" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 10,
        }}
        label="City/Province"
      >
        {form.getFieldDecorator('CityProvince', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<select placeholder="Enter City/Province">
            <option>Los Banos, Laguna</option>
            </select>)}
      </FormItem>
    </Modal>
  );
};

export default Form.create()(CreateForm);
