import React from 'react';
import { GridContent, PageHeaderWrapper, RouteContext } from '@ant-design/pro-layout';
import styles from './all.css';

export default function() {
  return (
    <PageHeaderWrapper title="Manage Orders">
      <div className={styles.normal}>
        <h1>Orders</h1>
      </div>
    </PageHeaderWrapper>
  );
}
