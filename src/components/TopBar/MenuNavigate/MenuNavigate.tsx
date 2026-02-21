import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'config/routes';

import s from './MenuNavigate.module.scss';

export type MenuNavigateProps = {
  className?: string;
};

const MenuNavigate: React.FC<MenuNavigateProps> = ({ className }) => {
  return (
    <nav className={cn(s.nav, className)}>
      <ul className={s.menu}>
        <NavLink
          to={routes.main.mask}
          className={({ isActive }) => cn(s.item, isActive && s.active)}
        >
          <li>Products</li>
        </NavLink>
        <NavLink
          to={routes.categories.mask}
          className={({ isActive }) => cn(s.item, isActive && s.active)}
        >
          <li>Categories</li>
        </NavLink>
        <NavLink
          to={routes.about.mask}
          className={({ isActive }) => cn(s.item, isActive && s.active)}
        >
          <li>About us</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default MenuNavigate;
