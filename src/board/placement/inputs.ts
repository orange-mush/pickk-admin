import moment from 'moment';

import InputBox from '@src/components/molecules/BoardFilter/input/InputBox';
import Datepicker from '@src/components/molecules/BoardFilter/input/DatePicker';
import Selector from '@src/components/molecules/BoardFilter/input/Selector';
import {OrderStatus} from '@src/types/Order';

export const itemInputs = [
  {
    name: 'name',
    defaultValue: {
      query: '',
    },
    labelText: '상품명',
    Component: InputBox,
  },
  {
    name: 'status',
    labelText: '주문상태',
    select: [
      {name: '전체', value: null},
      {name: '발주대기', value: 'PAID'},
      {name: '발송대기', value: 'PLACED'},
      {name: '배송중', value: 'SHIPPING'},
      {name: '배송완료', value: 'DELIVERED'},
    ],
    Component: Selector,
  },
];
