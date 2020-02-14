const basicGoods = [
  {
    date: '01/13/2020',
    transaction: '94 CX207A',
    by: 'Camille',
    quantity: '100',
  },
  {
    date: '01/13/2020',
    transaction: 'LX207A SA1',
    by: 'DenMark',
    quantity: '-5',
  },
  {
    date: '01/13/2020',
    transaction: 'LX207A SA1',
    by: 'DenMark',
    quantity: '-5',
  },
  {
    date: '01/13/2020',
    transaction: 'LX207A MB2',
    by: 'DenMark',
    quantity: '-3',
  },
];
const basicProgress = [
  {
    key: '1',
    time: '2017-10-01 14:10',
    rate: '联系客户',
    status: 'processing',
    operator: '取货员 ID1234',
    cost: '5mins',
  },
  {
    key: '2',
    time: '2017-10-01 14:05',
    rate: '取货员出发',
    status: 'success',
    operator: '取货员 ID1234',
    cost: '1h',
  },
  {
    key: '3',
    time: '2017-10-01 13:05',
    rate: '取货员接单',
    status: 'success',
    operator: '取货员 ID1234',
    cost: '5mins',
  },
  {
    key: '4',
    time: '2017-10-01 13:00',
    rate: '申请审批通过',
    status: 'success',
    operator: '系统',
    cost: '1h',
  },
  {
    key: '5',
    time: '2017-10-01 12:00',
    rate: '发起退货申请',
    status: 'success',
    operator: '用户',
    cost: '5mins',
  },
];
const getProfileBasicData = {
  basicGoods,
  basicProgress,
};
export default {
  'GET  /api/profile/basic': getProfileBasicData,
};
