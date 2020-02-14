import { Badge, Card, Descriptions, Divider, Table, Tag } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';

const progressColumns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '当前进度',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: text => {
      if (text === 'success') {
        return <Badge status="success" text="成功" />;
      }

      return <Badge status="processing" text="进行中" />;
    },
  },
  {
    title: '操作员ID',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '耗时',
    dataIndex: 'cost',
    key: 'cost',
  },
];

@connect(({ profileAndbasic, loading }) => ({
  profileAndbasic,
  loading: loading.effects['profileAndbasic/fetchBasic'],
}))
class Basic extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profileAndbasic/fetchBasic',
    });
  }

  render() {
    const { profileAndbasic, loading } = this.props;
    const { basicGoods, basicProgress } = profileAndbasic;
    let goodsData = [];

    if (basicGoods.length) {
      let num = 0;
      let amount = 0;
      basicGoods.forEach(item => {
        num += Number(item.num);
        amount += Number(item.amount);
      });
      goodsData = basicGoods.concat({
        id: '总计',
        num,
        amount,
      });
    }

    const renderContent = (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };

      if (index === basicGoods.length) {
        obj.props.colSpan = 0;
      }

      return obj;
    };

    const description = (
      <Descriptions column={1}>
        <Descriptions.Item><Tag color={'geekblue'}>ACTIVE</Tag></Descriptions.Item>
        <Descriptions.Item>100/100</Descriptions.Item>
      </Descriptions>
    );

    const goodsColumns = [
      // {
      //   title: 'Part Name',
      //   dataIndex: 'id',
      //   key: 'id',
      //   render: (text, row, index) => {
      //     if (index < basicGoods.length) {
      //       return <a href="">{text}</a>;
      //     }

      //     return {
      //       children: (
      //         <span
      //           style={{
      //             fontWeight: 600,
      //           }}
      //         >
      //           总计
      //         </span>
      //       ),
      //       props: {
      //         colSpan: 4,
      //       },
      //     };
      //   },
      // },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: renderContent,
      },
      {
        title: 'Transaction',
        dataIndex: 'transaction',
        key: 'transaction',
        render: renderContent,
      },
      {
        title: 'By',
        dataIndex: 'by',
        key: 'by',
        render: renderContent,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: renderContent,
      },
    ];
    return (
      <PageHeaderWrapper title= "C-0001" content={description}>
        <Card bordered={true}>
          <div className={styles.title}>Specification</div>
          <Table
            style={{
              marginBottom: 24,
            }}
            pagination={false}
            loading={loading}
            dataSource={goodsData}
            columns={goodsColumns}
          />
        </Card>
        <Card bordered={true}>
          <div className={styles.title}>Transaction History</div>
          <Table
            style={{
              marginBottom: 24,
            }}
            pagination={false}
            loading={loading}
            dataSource={goodsData}
            columns={goodsColumns}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Basic;
