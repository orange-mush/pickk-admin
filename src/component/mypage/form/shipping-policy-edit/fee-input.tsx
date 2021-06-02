import {useEffect, useState} from 'react';
import {Switch, Tag} from 'antd';
import styled from 'styled-components';

import InputNumber from '@src/components/organisms/Form/Items/input-number';

import {MeSeller_meSeller_shippingPolicy} from '@src/operations/__generated__/MeSeller';

export type ShippingFeeInputValueType = Pick<
  MeSeller_meSeller_shippingPolicy,
  'fee' | 'minimumAmountForFree'
>;

export type ShippingFeeInputProps = {
  value: ShippingFeeInputValueType;
  onChange: (value: ShippingFeeInputValueType) => void;
};

function ShippingFeeInput({value, onChange}: ShippingFeeInputProps) {
  const [isFree, setIsFree] = useState<boolean>();

  useEffect(() => {
    setIsFree(!value?.fee);
  }, [value]);

  const handleSwitchChange = (value: boolean) => {
    setIsFree(value);

    if (value) {
      onChange?.({
        fee: 0,
        minimumAmountForFree: 0,
      });
    }
  };

  const handleNumberChange = (e) => {
    const {value: _value, name} = e.target;
    onChange?.({
      ...value,
      [name]: _value,
    });
  };

  return (
    <>
      <Switch checked={isFree} onChange={handleSwitchChange} />
      <InputWrapper style={{marginTop: '0.8rem'}}>
        {!isFree && (
          <>
            <Label>기본 배송비</Label>
            <InputNumber
              name="fee"
              value={value?.fee || 0}
              onChange={handleNumberChange}
            />
            <Label style={{marginTop: '0.4rem'}}>최소주문금액</Label>
            <InputNumber
              name="minimumAmountForFree"
              value={value?.minimumAmountForFree || 0}
              onChange={handleNumberChange}
            />
          </>
        )}
      </InputWrapper>
    </>
  );
}

export default ShippingFeeInput;

const InputWrapper = styled.div`
  width: 100%;
  height: 4rem;
`;

const Label = styled(Tag).attrs({
  color: 'orange',
})`
  margin-bottom: 0.4rem;
`;
