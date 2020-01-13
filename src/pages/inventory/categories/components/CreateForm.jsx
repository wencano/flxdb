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
      title="New Category"
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
        label="Name"
      >
        {form.getFieldDecorator('Name', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Enter Category Name" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="Total Products"
      >
        {form.getFieldDecorator('TotalProducts', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Enter Total Products" />)}
      </FormItem>

      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="Parent Category"
      >
        {form.getFieldDecorator('Parent', {
          rules: [
            {
              required: true,
              message: 'This field is required.',
              min: 1,
            },
          ],
        })(<Input placeholder="Enter Parent Category" />)}
      </FormItem>

    </Modal>
  );
};

export default Form.create()(CreateForm);
