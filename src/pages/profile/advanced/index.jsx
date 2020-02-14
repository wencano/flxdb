import {
  Badge,
  Button,
  Card,
  Row,
  Col,
  Tag,
  Statistic,
  Descriptions,
  Divider,
  Dropdown,
  Icon,
  Menu,
  Popover,
  Steps,
  Table,
  Tooltip,
  Empty,
} from 'antd';
import { GridContent, PageHeaderWrapper, RouteContext } from '@ant-design/pro-layout';
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { connect } from 'dva';
import styles from './style.less';

const { Step } = Steps;
const ButtonGroup = Button.Group;
const menu = (
  <Menu>
    <Menu.Item key="1">Menu 1</Menu.Item>
    <Menu.Item key="2">Menu 2</Menu.Item>
    <Menu.Item key="3">Menu 3</Menu.Item>
  </Menu>
);
const mobileMenu = (
  <Menu>
    <Menu.Item key="1">操作一</Menu.Item>
    <Menu.Item key="2">操作二</Menu.Item>
    <Menu.Item key="3">选项一</Menu.Item>
    <Menu.Item key="4">选项二</Menu.Item>
    <Menu.Item key="">选项三</Menu.Item>
  </Menu>
);
const action = (
  <RouteContext.Consumer>
    {({ isMobile }) => {
      if (isMobile) {
        return (
          <Dropdown.Button
            type="primary"
            icon={<Icon type="down" />}
            overlay={mobileMenu}
            placement="bottomRight"
          >
            主操作
          </Dropdown.Button>
        );
      }

      return (
        <Fragment>
          <ButtonGroup>
            <Button>Edit</Button>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>
                <Icon type="ellipsis" />
              </Button>
            </Dropdown>
          </ButtonGroup>
        </Fragment>
      );
    }}
  </RouteContext.Consumer>
);

const description = (
  <RouteContext.Consumer>
    {({ isMobile }) => (
      <Descriptions className={styles.headerList} size="small" column={1}>
        <Descriptions.Item><Tag color={"geekblue"}>ACTIVE</Tag></Descriptions.Item>
        <Descriptions.Item label="Emp. ID">111-111-101</Descriptions.Item>
        <Descriptions.Item>Brgy. Tadlac, Los Banos, Laguna</Descriptions.Item>
        <Descriptions.Item>apfernandez2@up.edu.ph</Descriptions.Item>
        <Descriptions.Item>+63 916 123 9563</Descriptions.Item>
      </Descriptions>
    )}
  </RouteContext.Consumer>
);
const desc1 = (
  <div className={classNames(styles.textSecondary, styles.stepDescription)}>
    <Fragment>
      曲丽丽
      <Icon
        type="dingding-o"
        style={{
          marginLeft: 8,
        }}
      />
    </Fragment>
    <div>2016-12-12 12:32</div>
  </div>
);
const desc2 = (
  <div className={styles.stepDescription}>
    <Fragment>
      周毛毛
      <Icon
        type="dingding-o"
        style={{
          color: '#00A0E9',
          marginLeft: 8,
        }}
      />
    </Fragment>
    <div>
      <a href="">催一下</a>
    </div>
  </div>
);
const popoverContent = (
  <div
    style={{
      width: 160,
    }}
  >
    吴加号
    <span
      className={styles.textSecondary}
      style={{
        float: 'right',
      }}
    >
      <Badge
        status="default"
        text={
          <span
            style={{
              color: 'rgba(0, 0, 0, 0.45)',
            }}
          >
            未响应
          </span>
        }
      />
    </span>
    <div
      className={styles.textSecondary}
      style={{
        marginTop: 4,
      }}
    >
      耗时：2小时25分钟
    </div>
  </div>
);

const customDot = (dot, { status }) => {
  if (status === 'process') {
    return (
      <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
        {dot}
      </Popover>
    );
  }

  return dot;
};

const operationTabList = [
  {
    key: 'tab1',
    tab: 'Attendance',
  },
  {
    key: 'tab2',
    tab: 'Notes',
  },
];
const columns = [
  {
    title: '#',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Time In',
    dataIndex: 'timein',
    key: 'timein',
  },
  {
    title: 'Time Out',
    dataIndex: 'timeout',
    key: 'timeout',
  },
  {
    title: 'Hours',
    dataIndex: 'hours',
    key: 'hours',
  },
];

@connect(({ profileAndadvanced, loading }) => ({
  profileAndadvanced,
  loading: loading.effects['profileAndadvanced/fetchAdvanced'],
}))
class Advanced extends Component {
  state = {
    operationKey: 'tab1',
    tabActiveKey: 'Attendance',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profileAndadvanced/fetchAdvanced',
    });
  }

  onOperationTabChange = key => {
    this.setState({
      operationKey: key,
    });
  };

  onTabChange = tabActiveKey => {
    this.setState({
      tabActiveKey,
    });
  };

  render() {
    const { operationKey, tabActiveKey } = this.state;
    const { profileAndadvanced, loading } = this.props;
    const { advancedOperation1 } = profileAndadvanced;
    const contentList = {
      tab1: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation1}
          columns={columns}
        />
      ),
    };
    return (
      <PageHeaderWrapper
        title="Abigail Fernandez"
        extra={action}
        className={styles.pageHeader}
        content={description}
        tabActiveKey={tabActiveKey}
        onTabChange={this.onTabChange}
      >
        <div className={styles.main}>
          <GridContent>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              onTabChange={this.onOperationTabChange}
            >
              {contentList[operationKey]}
            </Card>
          </GridContent>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Advanced;
