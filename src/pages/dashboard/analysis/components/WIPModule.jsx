import { Card, Col, Icon, Row, Table, Tooltip } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import numeral from 'numeral';
import { MiniArea, MiniProgress } from './Charts';
import NumberInfo from './NumberInfo';
import Trend from './Trend';
import styles from '../style.less';

const orderData = [];
for (let i = 0; i < 50; i += 1) {
  orderData.push({
    index: i + 1,
    keyword: `LX01-BATCH-0${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Model',
    dataIndex: 'keyword',
    key: 'keyword',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: 'Units',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
    className: styles.alignRight,
  },
  {
    title: "Percent Completed",
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => (
      <React.Fragment>
        <div style={{width: '80%', display: 'inline-block', marginRight: 8}}>
          <MiniProgress percent={text} strokeWidth={8} target={100} color="#13C2C2" /> 
        </div>
        <span>{text}%</span>
      </React.Fragment>
    ),
  },
];

const WIPModule = ({ loading, visitData2, searchData, dropdownGroup }) => (
  <Card
    loading={loading}
    bordered={false}
    title="WIP Summary"
    extra={dropdownGroup}
    style={{
      height: '100%',
    }}
  >
    
    <Table
      rowKey={record => record.index}
      size="small"
      columns={columns}
      dataSource={orderData}
      pagination={{
        style: {
          marginBottom: 0,
        },
        pageSize: 5,
      }}
    />
  </Card>
);

export default WIPModule;
