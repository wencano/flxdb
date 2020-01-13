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
      title="New Part"
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
        label="Photos"
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
        label="Part Name"
      >
        {form.getFieldDecorator('PartName', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="C-0001" />)}
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
        label="Quantity"
      >
        {form.getFieldDecorator('Quantity', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="100" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 7,
        }}
        label="Max"
      >
        {form.getFieldDecorator('Max', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="100" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="Documents"
      >
        {form.getFieldDecorator('Documents', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input />)}
      </FormItem>
    </Modal>
  );
};

export default Form.create()(CreateForm);
