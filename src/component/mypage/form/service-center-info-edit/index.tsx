import {message} from 'antd';
import {useMutation, useQuery} from '@apollo/client';

import BaseForm from '@src/components/organisms/Form/base';

import {UPDATE_ME_SELLER_MUTATION} from '@src/operations/sellers/mutation';
import {ME_SELLER_QUERY} from '@src/operations/sellers/query';

import {FORM_ITEMS} from './form-items';

function ServiceCenterInfoEditForm() {
  const {data} = useQuery(ME_SELLER_QUERY);
  const [updateMe] = useMutation(UPDATE_ME_SELLER_MUTATION);

  const handleSaveClick = (updateSellerInput) => {
    updateMe({
      variables: {
        updateSellerInput,
      },
    })
      .then(() => {
        message.success('저장되었습니다.');
      })
      .catch(() => {
        message.error('저장에 실패했습니다.');
      });
  };

  return (
    <BaseForm
      FORM_ITEMS={FORM_ITEMS}
      onSaveClick={handleSaveClick}
      defaultValue={data?.meSeller}
    />
  );
}

export default ServiceCenterInfoEditForm;
