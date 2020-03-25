import {Button} from 'antd';

import {getDateTimeStrings} from '@src/lib/DateParser';
import {addDashToPhoneNumber} from '@src/lib/PhoneNumberParser';
import {addCommaToNumber} from '@src/lib/NumberParser';

export const itemColumns = [
  {
    title: '주분번호',
    dataIndex: 'orderMerchantUid',
    key: 'orderMerchantUid',
    sorter: (a, b) => a.orderMerchantUid > b.orderMerchantUid,
    width: 150,
    ellipsis: true,
  },
  {
    title: '상품주문번호',
    dataIndex: 'orderItemMerchantUid',
    key: 'orderItemMerchantUid',
    sorter: (a, b) => a.orderItemMerchantUid > b.orderItemMerchantUid,
    width: 150,
    ellipsis: true,
  },
  {
    title: '상품번호',
    dataIndex: 'productSku',
    key: 'productSku',
    sorter: (a, b) => a.productSku > b.productSku,
    width: 100,
    ellipsis: true,
  },
  {
    title: '주문일시',
    dataIndex: 'paidAt',
    key: 'paidAt',
    render: value => {
      const {year, month, day} = getDateTimeStrings(value);
      return <div>{`${year}.${month}.${day}`}</div>;
    },
    sorter: (a, b) => a.paidAt > b.paidAt,
    width: 100,
    ellipsis: true,
  },
  {
    title: '주문상태',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => a.status > b.status,
    width: 70,
    ellipsis: true,
  },
  {
    title: '상품명',
    dataIndex: 'itemName',
    key: 'itemName',
    sorter: (a, b) => a.itemName > b.itemName,
    width: 130,
    ellipsis: true,
  },
  {
    title: '옵션(통합)',
    dataIndex: 'options',
    key: 'options',
    render: value => value.join('-'),
    sorter: (a, b) => a.options.join('-') - b.options.join('-'),
    width: 100,
    ellipsis: true,
  },
  {
    title: '수량',
    dataIndex: 'quantity',
    key: 'quantity',
    sorter: (a, b) => a.quantity - b.quantity,
    width: 50,
    ellipsis: true,
  },
  {
    title: '구매자명',
    dataIndex: 'buyerName',
    key: 'buyerName',
    sorter: (a, b) => a.buyerName - b.buyerName,
    width: 70,
    ellipsis: true,
  },
  {
    title: '구매자 연락처',
    dataIndex: 'buyerPhone',
    key: 'buyerPhone',
    render: value => <div>{value ? addDashToPhoneNumber(value) : null}</div>,
    sorter: (a, b) => a.buyerPhone - b.buyerPhone,
    width: 130,
    ellipsis: true,
  },
  {
    title: '구매자 이메일',
    dataIndex: 'buyerEmail',
    key: 'buyerEmail',
    sorter: (a, b) => a.buyerEmail - b.buyerEmail,
    width: 150,
    ellipsis: true,
  },
  {
    title: '수취인명',
    dataIndex: 'addressName',
    key: 'addressName',
    sorter: (a, b) => a.addressName - b.addressName,
    width: 70,
    ellipsis: true,
  },
  {
    title: '수취인 연락처',
    dataIndex: 'addressPhone',
    key: 'addressPhone',
    render: value => <div>{value ? addDashToPhoneNumber(value) : null}</div>,
    sorter: (a, b) => a.addressPhone - b.addressPhone,
    width: 130,
    ellipsis: true,
  },
  {
    title: '우편번호',
    dataIndex: 'addressPostCode',
    key: 'addressPostCode',
    sorter: (a, b) => a.addressPostCode - b.addressPostCode,
    width: 70,
    ellipsis: true,
  },
  {
    title: '배송지 주소',
    dataIndex: 'baseAddress',
    key: 'baseAddress',
    sorter: (a, b) => a.baseAddress - b.baseAddress,
    width: 150,
    ellipsis: true,
  },
  {
    title: '배송지 상세주소',
    dataIndex: 'detailAddress',
    key: 'detailAddress',
    sorter: (a, b) => a.detailAddress - b.detailAddress,
    width: 150,
    ellipsis: true,
  },
  {
    title: '배송메세지',
    dataIndex: 'addressMessage',
    key: 'addressMessage',
    sorter: (a, b) => a.addressMessage - b.addressMessage,
    width: 150,
    ellipsis: true,
  },
  {
    title: '택배사',
    dataIndex: 'courier',
    key: 'courier',
    sorter: (a, b) => a.courier - b.courier,
    width: 100,
    ellipsis: true,
  },
  {
    title: '송장번호',
    dataIndex: 'trackingCode',
    key: 'trackingCode',
    sorter: (a, b) => a.trackingCode - b.trackingCode,
    width: 150,
    ellipsis: true,
  },
  {
    title: '배송추적',
    dataIndex: 'trackingViewUrl',
    key: 'trackingViewUrl',
    render: value => (
      <a href={value} target="_blank">
        <Button size="small">배송추적</Button>
      </a>
    ),
    sorter: (a, b) => a.trackingViewUrl - b.trackingViewUrl,
    width: 100,
    ellipsis: true,
  },
  {
    title: '판매가격',
    dataIndex: 'salePrice',
    key: 'salePrice',
    render: value => <div>{addCommaToNumber(value)}원</div>,
    sorter: (a, b) => a.salePrice - b.salePrice,
    width: 100,
    ellipsis: true,
  },
  {
    title: '리뷰어',
    dataIndex: 'reviewer',
    key: 'reviewer',
    sorter: (a, b) => a.reviewer - b.reviewer,
    width: 100,
    ellipsis: true,
  },
  {
    title: '구독할인율',
    dataIndex: 'subDiscountRate',
    key: 'subDiscountRate',
    render: value => <div>{value}%</div>,
    sorter: (a, b) => a.subDiscountRate - b.subDiscountRate,
    width: 100,
    ellipsis: true,
  },
];
