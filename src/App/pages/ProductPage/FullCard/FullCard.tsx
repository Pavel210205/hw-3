import React from 'react';
import cn from 'classnames';

import Text from 'components/Text';

import s from './FullCard.module.scss';
import Button from 'components/Button';
import Slider from 'components/Slider';

export type FullCardProps = {};

const FullCard: React.FC<FullCardProps> = () => {
  return (
    <div className={s.fullCard}>
      <div className={s.slider}>
        <Slider>
          <div className={''}>1 slide</div>
        </Slider>
      </div>

      <div className={s.fullCard__container}>
        <Text view="title" color="primary" weight="bold" className={s.title}>
          White Aesthetic Chair
        </Text>
        <Text view="p-20" color="secondary" className={s.subtitle}>
          Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back
          for all-day comfort and support
        </Text>
        <Text view="title" color="primary" weight="bold" className={s.price}>
          $99.98
        </Text>
        <div className={s.buttons}>
          <Button className={s.button}>В корзину</Button>
          <Button className={cn(s.button, s.button__secondary)}>Подробнее</Button>
        </div>
      </div>
    </div>
  );
};
export default FullCard;
