import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'config/routes';

import LogoComponent from 'components/LogoComponent';
import MenuNavigate from './MenuNavigate';
import UserIcon from 'components/icons/UserIcon';
import BagIcon from 'components/icons/BagIcon';

import s from './TopBar.module.scss';

export type TopBarProps = {
  className?: string;
};

const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <menu className={cn(s.topbar, className)}>
      <LogoComponent href={routes.main.mask} />
      <MenuNavigate />
      <div className={s.icons}>
        <Link to={routes.cart.mask} className={s.icon}>
          <BagIcon />
        </Link>
        <Link to={routes.user.mask} className={s.icon}>
          <UserIcon />
        </Link>
      </div>
    </menu>
  );
};

export default TopBar;
