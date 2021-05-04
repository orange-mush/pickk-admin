import {Button} from 'antd';
import ButtonProps, {AntdButtonProps} from './button';
import styled, {css} from 'styled-components';

export default function IconButton(props: ButtonProps) {
  return (
    <_Button
      {...(props as AntdButtonProps)}
      onlyContent={props.type === 'only-content'}
      xlarge={props.size === 'xlarge'}>
      {props.children}
    </_Button>
  );
}

const _Button = styled(Button)<{onlyContent: boolean; xlarge: boolean}>`
  && {
    ${(props) => css`
      ${props.onlyContent &&
      `
    background-color: transparent;
    border: none;`}
      ${props.xlarge &&
      `
    height: 60px;
    padding: 0 20px;
    font-size: 20px;
    border-radius: 6px;
    line-height:58px;
    `}
    `}
  }
`;
