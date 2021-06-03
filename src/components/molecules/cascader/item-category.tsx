import React from 'react';
import {useQuery} from '@apollo/client';
import {Cascader} from 'antd';

import {ITEM_MAJOR_CATEGORIES_QUERY} from '@src/operations/item-category/query';
import {ItemMajorCategories} from '@src/operations/__generated__/ItemMajorCategories';
import {CustomInputProps} from '@src/components/organisms/Form/base';

export type ItemCategoryCascaderProps = CustomInputProps<[number, number]> & {
  hasAll?: boolean;
};

function ItemCategoryCascader({
  value,
  onChange,
  hasAll = false,
}: ItemCategoryCascaderProps) {
  const {data} = useQuery<ItemMajorCategories>(ITEM_MAJOR_CATEGORIES_QUERY);
  const majorCategories = data?.itemMajorCategories ?? [];
  const options = (
    hasAll ? [{id: undefined, name: '전체', children: null}] : []
  )
    .concat(majorCategories)
    .map(({id, name, children}) => ({
      value: id,
      label: name,
      ...(children && {
        children: (hasAll
          ? [{id: undefined, name: '전체', children: null}]
          : []
        )
          .concat(children)
          .map(({id: cid, name: cname}) => ({
            value: cid,
            label: cname,
          })),
      }),
    }));

  return <Cascader value={value} options={options} onChange={onChange} />;
}

export default ItemCategoryCascader;
