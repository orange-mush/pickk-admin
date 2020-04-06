import moment from 'moment';

import Selector from '@src/components/molecules/BoardFilter/input/Selector';
import {range} from '@src/lib/utils';

export const settlementInputs = [
  {
    name: 'expected',
    labelText: '정산예정월',
    select: [
      {name: '전체', value: null},
      ...range(-5, 2)
        .reverse()
        .map((diff) => {
          const target = moment().add(diff, 'M');
          return {
            name: target.format('YYYY년 MM월'),
            value: target.format('YYYY-MM'),
          };
        }),
    ],
    Component: Selector,
    guideText: '해당 월에 정산예정인 주문건만 필터링합니다.',
  },
];
