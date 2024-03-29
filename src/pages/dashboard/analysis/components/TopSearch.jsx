import { Card, Col, Icon, Row, Table, Tooltip } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import numeral from 'numeral';
import { MiniArea, MiniProgress } from './Charts';
import NumberInfo from './NumberInfo';
import Trend from './Trend';
import styles from '../style.less';

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: "Part Name",
    dataIndex: 'keyword',
    key: 'keyword',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: "Units",
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
    className: styles.alignRight,
  },
  {
    title: "Level",
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => (
      <React.Fragment>
        <div style={{width: '60%', display: 'inline-block', marginRight: 8}}>
          <MiniProgress percent={text} strokeWidth={8} target={100} color="#13C2C2" /> 
        </div>
        <span>{text}%</span>
      </React.Fragment>
    )
  },
];

const TopSearch = ({ loading, visitData2, searchData, dropdownGroup }) => (
  <Card
    loading={loading}
    bordered={false}
    title="Inventory Status"
    extra={dropdownGroup}
    style={{
      height: '100%',
    }}
  >
    
    <Table
      rowKey={record => record.index}
      size="small"
      columns={columns}
      dataSource={searchData}
      pagination={{
        style: {
          marginBottom: 0,
        },
        pageSize: 5,
      }}
    />
  </Card>
);

export default TopSearch;
