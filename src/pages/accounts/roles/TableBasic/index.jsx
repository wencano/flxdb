import React from "react";
import styles from "./index.less";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Tag>Edit</Tag>
        <Divider type="vertical" />
        <Tag>Delete</Tag>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "Admin",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Supervisor",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Engineer",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "4",
    name: "Technician",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "5",
    name: "Operator",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-basic">
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
);
