import { Button, Card, Col, Dropdown, Form, Icon, Input, Menu, Row, message } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import CreateForm from './components/CreateForm';
import StandardTable from './components/StandardTable';
import UpdateForm from './components/UpdateForm';
import styles from './style.less';
import { Link } from 'umi';

const FormItem = Form.Item;
// const { Option } = Select;

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

/* eslint react/no-multi-comp:0 */
@connect(({ listAndtableList1, loading }) => ({
  listAndtableList1,
  loading: loading.models.listAndtableList1,
}))

class TableList extends Component {
  state = {
    modalVisible: false,
    updateModalVisible: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
  };

  columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text, row, index) => {
        return {
          children: (
            <span
              style={{
                fontWeight: 600,
              }}
            >
              {/* <Link to="/accounts/advanced">{text}</Link> */}
              {text}
            </span>
          )
        };
      },
    },
    {
      title: 'Name',
      dataIndex: 'Name',
    },
    {
      title: 'Debut',
      dataIndex: 'Debut',
    },
    {
      title: 'Genre',
      dataIndex: 'Genre',
    },
    {
      title: 'Notes',
      dataIndex: 'Notes',
    },
  ];

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'listAndtableList1/getItems',
    });
  };

  componentDidMount() {}

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;
    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});
    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };

    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'listAndtableList1/fetch',
      payload: params,
    });
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'listAndtableList1/fetch',
      payload: {},
    });
  };

  handleMenuClick = e => {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;
    if (!selectedRows) return;

    switch (e.key) {
      case 'remove':
        dispatch({
          type: 'listAndtableList1/remove',
          payload: {
            key: selectedRows.map(row => row.key),
          },
          callback: () => {
            this.setState({
              selectedRows: [],
            });
          },
        });
        break;

      default:
        break;
    }
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };
      this.setState({
        formValues: values,
      });
      dispatch({
        type: 'listAndtableList1/fetch',
        payload: values,
      });
    });
  };

  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handleUpdateModalVisible = (flag, record) => {
    this.setState({
      updateModalVisible: !!flag,
      stepFormValues: record || {},
    });
  };

  handleAdd = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'listAndtableList1/add',
      payload: {
        FirstName: fields.FirstName,
        LastName: fields.LastName,
        EmailAddress: fields.EmailAddress,
        PhoneNumber: fields.PhoneNumber,
      },
    });
    message.success('Successfully added user');
    this.handleModalVisible();
  };

  handleUpdate = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'listAndtableList1/update',
      payload: {
        FirstName: fields.FirstName,
        LastName: fields.LastName,
        EmailAddress: fields.EmailAddress,
        PhoneNumber: fields.PhoneNumber,
      },
    });
    message.success('Update');
    this.handleUpdateModalVisible();
  };

  renderSimpleForm() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const status = (
      <Menu selectedKeys={[]}>
        <Menu.Item>-Select Status-</Menu.Item>
        <Menu.Item>Active</Menu.Item>
        <Menu.Item>Inactive</Menu.Item>
      </Menu>
    );
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row
          gutter={{
            md: 8,
            lg: 24,
            xl: 48,
          }}
        >
          <Col md={7} sm={12}>
            <FormItem label="Search">
              {getFieldDecorator('FullName')(<Input placeholder="Employee ID or Name" />)}
            </FormItem>
          </Col>

          <Col md={6} sm={5}>
            <FormItem>
            {getFieldDecorator('Status')(
                <Dropdown overlay={status}>
                  <Button>
                    Status <Icon type="down" />
                  </Button>
                </Dropdown>)}
            </FormItem>
          </Col>

          <Col md={8} sm={15}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button
                style={{
                  marginLeft: 8,
                }}
                onClick={this.handleFormReset}
              >
                Reset
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  render() {
    const {
      listAndtableList1: { data },
      loading,
    } = this.props;
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">Delete</Menu.Item>
        <Menu.Item key="approval">Batch Approval</Menu.Item>
      </Menu>
    );

    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    const updateMethods = {
      handleUpdateModalVisible: this.handleUpdateModalVisible,
      handleUpdate: this.handleUpdate,
    };

    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderSimpleForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                New Account
              </Button>
              {selectedRows.length > 0 && (
                <span>
                  <Button>Batch Operations</Button>
                  <Dropdown overlay={menu}>
                    <Button>
                      More Operations <Icon type="down" />
                    </Button>
                  </Dropdown>
                </span>
              )}
            </div>
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
              rowKey="id"
            />
          </div>
        </Card>
        <CreateForm {...parentMethods} modalVisible={modalVisible} />
        {stepFormValues && Object.keys(stepFormValues).length ? (
          <UpdateForm
            {...updateMethods}
            updateModalVisible={updateModalVisible}
            values={stepFormValues}
          />
        ) : null}
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(TableList);
