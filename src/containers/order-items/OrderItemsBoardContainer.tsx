import {useQuery} from '@apollo/client';
import {OrderItemStatus} from '@pickk/common';

import OrderItemBoard from '@src/components/order-items';

import BoardStoreProvider from '@src/common/contexts/Board';
import {GET_ORDER_ITEMS} from '@src/common/graphql/order-item.graphql';
import {orderItemsRecordMapper} from '@src/components/order-items/table';

function OrderItemsBoardContainer() {
  return (
    <BoardStoreProvider
      dataFetchConfig={{
        useBoardData: () => useQuery(GET_ORDER_ITEMS),
        operationName: 'meSellerOrderItems',
        filterName: 'orderItemFilter',
        mapRecord: orderItemsRecordMapper,
        filterRecord: (v) => v.status !== OrderItemStatus.Pending,
      }}>
      <OrderItemBoard
        title="주문 조회"
        subTitle="모든 주문건을 조회하실 수 있는 통합 주문조회 메뉴입니다."
      />
    </BoardStoreProvider>
  );
}

export default OrderItemsBoardContainer;
