import React, { useState } from 'react';
import { Menu } from 'antd';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    'Products',
    'sub1',
    <FolderOpenIcon className="text-black w-5 h-5" />,
    [
      getItem('roadmap', '1'),
      getItem('Feedback', '2'),
      getItem('Performance', '3'),
      getItem('Team', '4'),
    ]
  ),
  getItem('Sales', 'sub2', <FolderOpenIcon className="text-black w-5 h-5" />, [
    getItem('Sales', '5'),
  ]),
  getItem('Design', 'sub3', <FolderOpenIcon className="text-black w-5 h-5" />, [
    getItem('react', '12'),
    getItem('Node.js', '10'),
  ]),
  getItem('Office', 'sub4', <FolderOpenIcon className="text-black w-5 h-5" />),
  getItem('Legal', 'sub5', <FolderOpenIcon className="text-black w-5 h-5" />),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const SubMenu = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: '100%',
        border: 0,
      }}
      items={items}
    />
  );
};
export default SubMenu;
