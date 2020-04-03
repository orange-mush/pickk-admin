import React from 'react';
import MainLayout from '@src/components/templates/MainLayout';
import CancelRequestBoard from '@src/board/cancel-request';

export default function CancelRequests() {
  return (
    <MainLayout>
      <CancelRequestBoard
        title="취소 관리"
        subTitle="구매자가 요청한/완료된 취소 주문건들을 조회하실 수 있는 메뉴입니다."
      />
    </MainLayout>
  );
}
