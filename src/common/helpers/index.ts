export const range = (start: number, end: number) =>
  [...Array(end - start).keys()].map((i) => i + start);

export * from './alias';
export * from './Array';
export * from './column-render';
export * from './Cookies';
export * from './date';
export * from './generate-excel-columns';
export * from './NumberParser';
export * from './Object';
export * from './PhoneNumberParser';
export * from './sorter';
export * from './Url';
