import {getTimeString} from '@src/common/helpers/date';
import {addDashToPhoneNumber} from '@src/common/helpers/PhoneNumberParser';
import {stringSorter} from '@src/common/helpers/sorter';
import {getOrderItemStatusDisplayName} from '@src/common/helpers';

export const orderItemColumns = [
  {
    title: '상품주문번호',
    dataIndex: 'merchantUid',
    key: 'merchantUid',
    sorter: (a, b) => b.merchantUid - a.merchantUid,
    width: 140,
    ellipsis: true,
  },
  {
    title: '주문번호',
    dataIndex: 'orderMerchantUid',
    key: 'orderMerchantUid',
    sorter: (a, b) => b.orderMerchantUid - a.orderMerchantUid,
    width: 120,
    ellipsis: true,
  },
  {
    title: '주문 일시',
    dataIndex: 'paidAt',
    key: 'paidAt',
    render: (value) => <div>{getTimeString(value)}</div>,
    sorter: (a, b) => stringSorter(b.paidAt, a.paidAt),
    width: 100,
    ellipsis: true,
  },
  {
    title: '주문상태',
    dataIndex: 'status',
    key: 'status',
    render: (value) => <div>{getOrderItemStatusDisplayName(value)}</div>,
    sorter: (a, b) => stringSorter(b.status, a.status),
    width: 90,
    ellipsis: true,
  },
  {
    title: '클레임 상태',
    dataIndex: 'claimStatus',
    key: 'claimStatus',
    sorter: (a, b) => stringSorter(b.claimStatus, a.claimStatus),
    width: 140,
    ellipsis: true,
  },
  {
    title: '상품명',
    dataIndex: 'itemName',
    key: 'itemName',
    render: (value, record) => (
      <a href={`https://pickk.one/item/${record.itemId}`} target="_blank">
        {getOrderItemStatusDisplayName(value)}
      </a>
    ),
    sorter: (a, b) => stringSorter(b.itemName, a.itemName),
    width: 200,
    ellipsis: true,
  },
  {
    title: '옵션',
    dataIndex: 'productVariantName',
    key: 'productVariantName',
    sorter: (a, b) => stringSorter(b.productVariantName, a.productVariantName),
    width: 200,
    ellipsis: true,
  },
  {
    title: '수량',
    dataIndex: 'quantity',
    key: 'quantity',
    sorter: (a, b) => b.quantity - a.quantity,
    width: 75,
    ellipsis: true,
  },
  {
    title: '구매자명',
    dataIndex: 'orderBuyerName',
    key: 'orderBuyerName',
    sorter: (a, b) => stringSorter(b.orderBuyerName, a.orderBuyerName),
    width: 75,
    ellipsis: true,
  },
  {
    title: '구매자 연락처',
    dataIndex: 'orderBuyerPhoneNumber',
    key: 'orderBuyerPhoneNumber',
    render: (value) => <div>{value ? addDashToPhoneNumber(value) : null}</div>,
    width: 75,
    ellipsis: true,
  },
  {
    title: '수취인명',
    dataIndex: 'orderReceiverName',
    key: 'orderReceiverName',
    sorter: (a, b) => stringSorter(b.orderReceiverName, a.orderReceiverName),
    width: 75,
    ellipsis: true,
  },
];
