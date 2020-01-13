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
      title="New Location"
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
        })(<Input placeholder="Enter Location Name" />)}
      </FormItem>
    </Modal>
  );
};

export default Form.create()(CreateForm);
