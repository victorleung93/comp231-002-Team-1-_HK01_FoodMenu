import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Menu',
    path: '/menu',
    icon: <MdIcons.MdMenuBook />,
    cName: 'nav-text'
  },
  {
    title: 'Manage Item',
    path: '/itemform',
    icon: <MdIcons.MdMenuBook />,
    cName: 'nav-text'
  },
  {
    title: 'Order',
    path: '/order',
    icon: <IoIcons.IoMdRestaurant />,
    cName: 'nav-text'
  },
  {
    title: 'Order',
    path: '/order',
    icon: <IoIcons.IoMdRestaurant />,
    cName: 'nav-text'
  }
];