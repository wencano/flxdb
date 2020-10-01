import { Badge, Card, Descriptions, Divider, Table, Tag, Image } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';

const API_URL = 'http://localhost:1337'

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
  loading: loading.effects['profileAndbasic/fetch'],
}))
class Basic extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profileAndbasic/fetch',
      id: this.props.match.params.id
    });
  }

  render() {
    const { profileAndbasic, loading } = this.props;
    const { basicGoods, basicProgress } = profileAndbasic;
    let goodsData = [];
    
    console.log(API_URL + basicGoods.ProductImage[0].url)


    console.log("BASIC RENDER: ", basicGoods);

    // if (basicGoods && basicGoods.length) {
    //   let num = 0;
    //   let amount = 0;
    //   basicGoods.forEach(item => {
    //     num += Number(item.num);
    //     amount += Number(item.amount);
    //   });
    //   goodsData = basicGoods.concat({
    //     id: '总计',
    //     num,
    //     amount,
    //   });
    // }

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
        <Image src={API_URL + basicGoods.ProductImage[0].url}/>
        <Descriptions.Item colSpan={1}>Quantity: {basicGoods.Qty}</Descriptions.Item>
        {/* <Descriptions.Item colSpan={1}>{basicGoods.Qty}</Descriptions.Item> */}
      </Descriptions>
    );

    return (
      <PageHeaderWrapper title= {basicGoods.Name} content={description}>
        {/* <Card bordered={true}>
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
        </Card> */}
        {/* <Card bordered={true}>
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
        </Card> */}
      </PageHeaderWrapper>
    );
  }
}

export default Basic;
