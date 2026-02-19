import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './TopBar.module.scss';

import LogoComponent from 'components/LogoComponent';
import MenuNavigate from './MenuNavigate';
import UserIcon from 'components/icons/UserIcon';
import BagIcon from 'components/icons/BagIcon';

export type TopBarProps = {
  className?: string;
};

const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <menu className={cn(s.topbar, className)}>
      <LogoComponent href={'/'} />
      <MenuNavigate />
      <div className={s.icons}>
        <Link to={'/cart'} className={s.icon}>
          <BagIcon />
        </Link>
        <Link to={'/user'} className={s.icon}>
          <UserIcon />
        </Link>
      </div>
    </menu>
  );
};

export default TopBar;
