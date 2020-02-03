import React from 'react';
import MainLayout from '@src/components/templates/MainLayout';
import Board from '@src/components/templates/Board';

export default function Order() {
  const columns = [
    {
      title: '상품주문번호',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id > b.id,
      fixed: 'left',
    },
    {
      title: '주문번호',
      dataIndex: 'merchantUid',
      key: 'merchantUid',
      sorter: (a, b) => a.merchantUid > b.merchantUid,
      fixed: 'left',
    },
    {
      title: '주문일시',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => a.createdAt > b.createdAt,
      fixed: 'left',
    },
    {
      title: '주문상태',
      dataIndex: 'state',
      key: 'state',
      sorter: (a, b) => a.state > b.state,
      fixed: 'left',
    },
    {
      title: '클레임상태',
      dataIndex: 'claimState',
      key: 'claimState',
      sorter: (a, b) => a.claimState > b.claimState,
      fixed: 'left',
    },
    {
      title: '상품명',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name > b.name,
    },
    {
      title: '색상',
      dataIndex: 'color',
      key: 'color',
      sorter: (a, b) => a.color > b.color,
    },
    {
      title: '사이즈',
      dataIndex: 'size',
      key: 'size',
      sorter: (a, b) => a.size > b.size,
    },
    {
      title: '기타옵션',
      dataIndex: 'options',
      key: 'options',
      sorter: (a, b) => a.options > b.options,
    },
    {
      title: '수량',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: '구매자명',
      dataIndex: 'customerName',
      key: 'customerName',
      sorter: (a, b) => a.customerName > b.customerName,
    },
    {
      title: '구매자번호',
      dataIndex: 'customerPhoneNumber',
      key: 'customerPhoneNumber',
      sorter: (a, b) => a.customerPhoneNumber > b.customerPhoneNumber,
    },
    {
      title: '수취인명',
      dataIndex: 'recipientName',
      key: 'recipientName',
      sorter: (a, b) => a.recipientName > b.recipientName,
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 92; ++i) {
    dataSource.push({
      id: 'id',
      merchantUid: 'merchantUid',
      createdAt: `2020/01/0${i % 9 + 1}`,
      state: '배송중',
      claimState: '교환',
      name: '기모 짱짱 맨투맨 (그레이)' + i,
      color: '화이트',
      size: 'L',
      options: '',
      quantity: i % 3,
      customerName: `구매자${i % 10}`,
      customerPhoneNumber: '01012345678',
      recipientName: `수령자${i % 10}`,
    });
  }

  return (
    <MainLayout>
      <Board
        title="주문 조회"
        subTitle="모든 주문건을 조회하실 수 있는 통합 주문조회 메뉴입니다."
        helpTexts={[
          `상세조회 조건을 넣지 않고, 기간으로 조회하시는 경우 최대 1주일 이내에서 조회가 가능합니다.`,
          `주문건을 클릭하시면, 현재 처리 가능한 버튼이 활성화 되며, 버튼을 누르시면 관련 메뉴로 이동됩니다.`,
        ]}
        {...{columns, dataSource}}
      />
    </MainLayout>
  );
}
