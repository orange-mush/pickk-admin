import React, {useState} from 'react';
import {Input, Typography, Button, Tooltip, Popconfirm, message} from 'antd';
import styled from 'styled-components';
import dayjs from 'dayjs';

import DayjsDatePicker from '../../BoardFilter/input/DayjsDatePicker';
import Space from '@src/components/atoms/space';
import {INDIGO_BLUE} from '@src/components/atoms/colors';
import {QuestionCircleOutlined} from '@ant-design/icons';

const {Text} = Typography;
const {RangePicker} = DayjsDatePicker;

export type DiscountRowProps = {
  subscribeDiscountRate: number;
  subscribeDiscountStartPeriod: string;
  subscribeDiscountEndPeriod: string;
};

export default function SubscriptionDiscountRow({
  subscribeDiscountRate,
  subscribeDiscountStartPeriod,
  subscribeDiscountEndPeriod,
}: DiscountRowProps) {
  const [subscribeDiscountData, setSubscribeDiscountData] = useState({
    subscribeDiscountRate,
    subscribeDiscountStartPeriod,
    subscribeDiscountEndPeriod,
  });

  // tslint:disable-next-line: no-any
  const handleChange = (data: any) => {
    setSubscribeDiscountData({
      ...subscribeDiscountData,
      ...data,
    });
  };

  const handleSubscribeDiscountRateChange = (e) => {
    handleChange({subscribeDiscountRate: e.target.value});
  };

  const handleSubscribeDiscountPeriodChange = (date) => {
    handleChange({
      subscribeDiscountStartPeriod: dayjs(date[0]).format('YYYY-MM-DD'),
      subscribeDiscountEndPeriod: dayjs(date[1]).format('YYYY-MM-DD'),
    });
  };

  const handleSubmit = () => {
    message.success('변경 완료');
  };

  const handleReset = () => {
    handleChange({
      subscribeDiscountRate,
      subscribeDiscountStartPeriod,
      subscribeDiscountEndPeriod,
    });
    message.success('초기화 완료');
  };

  return (
    <Wrapper>
      <TitleRow>
        <Text strong>구독 할인율</Text>
        <Space direction="ROW" />
        <Tooltip placement="right" title="구독 할인율 설명입니다">
          <GuideButton shape="circle" icon="question" />
        </Tooltip>
      </TitleRow>
      <Space direction="ROW" level={4} />
      <DiscountRateInput
        size="small"
        value={subscribeDiscountData.subscribeDiscountRate}
        onChange={handleSubscribeDiscountRateChange}
      />
      <Space direction="ROW" />
      <Text>%</Text>
      <Space direction="ROW" level={4} />
      <DiscountPeriodPicker
        name="choicedSelectValue"
        size="small"
        value={[
          dayjs(subscribeDiscountData.subscribeDiscountStartPeriod),
          dayjs(subscribeDiscountData.subscribeDiscountEndPeriod),
        ]}
        onChange={handleSubscribeDiscountPeriodChange}
      />
      <Space direction="ROW" level={4} />
      <Popconfirm
        title="정말 변경하시겠습니까？"
        onConfirm={handleSubmit}
        okText="예"
        cancelText="아니오"
        icon={<QuestionCircleOutlined />}>
        <Button size="small">변경</Button>
      </Popconfirm>
      <Space direction="ROW" />
      <Popconfirm
        title="정말 초기화하시겠습니까？"
        onConfirm={handleReset}
        okText="예"
        cancelText="아니오"
        icon={<QuestionCircleOutlined style={{color: INDIGO_BLUE[900]}} />}>
        <ResetButton size="small">초기화</ResetButton>
      </Popconfirm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const GuideButton = styled(Button)`
  width: 18px;
  min-width: 18px;
  height: 18px;
  font-size: 10px;
`;

const DiscountRateInput = styled(Input)`
  width: 40px;
`;

const DiscountPeriodPicker = styled(RangePicker)`
  width: 400px;
`;

const ResetButton = styled(Button)`
  color: ${INDIGO_BLUE[900]};
`;
