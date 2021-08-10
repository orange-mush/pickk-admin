import React from 'react';
import styled from 'styled-components';
import {Typography} from 'antd';

import {TitleText} from '@src/components/common/organisms/Board/Filter/Header';
import {WHITE} from '@src/common/constants/colors';

import {useSettlementAmountPreview} from '@src/common/hooks/Settlement';
import {addCommaToNumber} from '@src/common/helpers/NumberParser';
import Space from '@src/components/common/atoms/space';

const {Text} = Typography;

const LABELS = ['이번 달 정산액', '이번 달 이슈 정산액', '다음 달 정산 예정액'];

export default function SettlementAmountPreview() {
  const {data} = useSettlementAmountPreview([]);

  if (data) {
    return (
      <Wrapper>
        <TitleText>정산 예정 금액</TitleText>
        <Space level={1} />
        <Row>
          {Object.values(data).map((value, index) => (
            <AmountCard key={index} label={LABELS[index]} value={value} />
          ))}
        </Row>
      </Wrapper>
    );
  }
  return null;
}

const Wrapper = styled.div`
  background-color: ${WHITE};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const AmountCard = ({label, value}) => (
  <AmountCardWrapper>
    <StyledText>{label}</StyledText>
    <StyledText>{addCommaToNumber(value)}원</StyledText>
  </AmountCardWrapper>
);

const AmountCardWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: 0 24px;
`;

const StyledText = styled(Text)``;
