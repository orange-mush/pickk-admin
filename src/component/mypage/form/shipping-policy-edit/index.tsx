import {message} from 'antd';
import {useMutation} from '@apollo/client';

import BaseEditForm from '../../../../components/organisms/Form/base';

import {UPDATE_MY_SELLER_SHIPPING_POLICY_MUTATION} from '@src/operations/sellers/mutation';

import {FORM_ITEMS} from './form-items';
import {useShippingPolicyEdit} from './use-shipping-policy-form';

function ShippingPolicyEditForm() {
  const {defaultValue, refetch} = useShippingPolicyEdit();
  const [updateShippingPolicy] = useMutation(
    UPDATE_MY_SELLER_SHIPPING_POLICY_MUTATION,
  );

  const handleSaveClick = (formInput) => {
    const {shippingPolicy: updateSellerShippingPolicyInput} = formInput;
    updateShippingPolicy({
      variables: {
        updateSellerShippingPolicyInput,
      },
    })
      .then(() => {
        message.success('저장되었습니다.');
        refetch();
      })
      .catch((error) => {
        message.error('저장에 실패했습니다');
      });
  };

  return (
    <BaseEditForm
      FORM_ITEMS={FORM_ITEMS}
      onSaveClick={handleSaveClick}
      defaultValue={defaultValue}
    />
  );
}

export default ShippingPolicyEditForm;
