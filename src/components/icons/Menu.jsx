import * as React from 'react';

const MenuIcon = ({ width = '37', height = '36', fill = '#061A30' }) => (
  <svg width={width} height={height} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="2.57143" rx="1.28571" fill={fill} />
    <rect y="6.57143" width="22" height="2.57143" rx="1.28571" fill={fill} />
    <rect y="13.1429" width="22" height="2.57143" rx="1.28571" fill={fill} />
  </svg>
);

export default MenuIcon;
