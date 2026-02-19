import cn from 'classnames';
import React from 'react';
import s from './MenuNavigate.module.scss';
import { NavLink } from 'react-router-dom';

export type MenuNavigateProps = {
  className?: string;
};

const MenuNavigate: React.FC<MenuNavigateProps> = ({ className }) => {
  return (
    <nav className={cn(s.nav, className)}>
      <ul className={s.menu}>
        <NavLink to="/" className={({ isActive }) => cn(s.item, isActive && s.active)}>
          <li>Products</li>
        </NavLink>
        <NavLink to="/categories" className={({ isActive }) => cn(s.item, isActive && s.active)}>
          <li>Categories</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => cn(s.item, isActive && s.active)}>
          <li>About us</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default MenuNavigate;
