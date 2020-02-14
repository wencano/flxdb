import { Form, Input, Modal, Dropdown, Button, Menu, Icon } from 'antd';
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
      width={500}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >

      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 7,
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
          span: 7,
        }}
        wrapperCol={{
          span: 10,
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
          span: 7,
        }}
        wrapperCol={{
          span: 10,
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
        })(<Dropdown overlay={<Menu>
          <Menu.Item>-Select Status-</Menu.Item>
          <Menu.Item>Active</Menu.Item>
          <Menu.Item>Inactive</Menu.Item>
        </Menu>}>
            <Button>
              Status <Icon type="down" />
            </Button>
          </Dropdown>)}
      </FormItem>


      <FormItem
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 10,
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
          span: 7,
        }}
        wrapperCol={{
          span: 10,
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
          span: 7,
        }}
        wrapperCol={{
          span: 10,
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
          span: 7,
        }}
        wrapperCol={{
          span: 12,
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
          span: 7,
        }}
        wrapperCol={{
          span: 12,
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
          span: 7,
        }}
        wrapperCol={{
          span: 12,
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
        })(<Dropdown overlay={<Menu>
          <Menu.Item>-Select City/Province-</Menu.Item>
          <Menu.Item>Los Banos, Laguna</Menu.Item>
          </Menu>}>
          <Button>
            Status <Icon type="down" />
          </Button>
        </Dropdown>)}
      </FormItem>
    </Modal>
  );
};

export default Form.create()(CreateForm);
