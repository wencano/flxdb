import React from 'react';
import { GridContent, PageHeaderWrapper, RouteContext } from '@ant-design/pro-layout';
import styles from './roles.css';
import TableBasic from './TableBasic';

export default function() {
  return (
    <PageHeaderWrapper>
      <div className={styles.normal}>
        <TableBasic />
      </div>
    </PageHeaderWrapper>
  );
}
