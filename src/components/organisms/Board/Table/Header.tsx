import React from 'react';
import styled from 'styled-components';
import {Typography} from 'antd';

import TableReloadButton from '@src/components/molecules/button/TableReload';
import ExcelDownloadButton, {
  ExcelDownloadButtonProps,
} from '@src/components/molecules/button/ExcelDownload';
import CsvDownloadButton from '@src/components/molecules/button/CsvDownload';
import Space from '@src/components/atoms/space';
import {isEqualObject} from '@src/lib/utils';

const {Text} = Typography;

export type TableHeaderProps = Pick<
  ExcelDownloadButtonProps,
  'title' | 'dataSource'
>;

function TableHeader(props: TableHeaderProps) {
  return (
    <Wrapper>
      <Text strong style={{marginRight: 'auto'}}>
        {`${props.title} 목록 (총 ${
          props.dataSource ? props.dataSource.length : '...'
        }개)`}
      </Text>
      <TableReloadButton />
      <Space direction="ROW" />
      <ExcelDownloadButton {...props} />
      <Space direction="ROW" size={4} />
      <CsvDownloadButton {...props} />
    </Wrapper>
  );
}

export default React.memo(TableHeader, (prev, next) =>
  isEqualObject(prev.dataSource, next.dataSource),
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
