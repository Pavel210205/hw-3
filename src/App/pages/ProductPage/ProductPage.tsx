import React from 'react';

import Text from 'components/Text';
import FullCard from './FullCard';
import Card from 'components/Card';
import Button from 'components/Button';
import ButtonBack from 'components/ButtonBack';

import s from './ProductPage.module.scss';

export default function ProductPage() {
  const arr = [1, 2, 3];
  return (
    <main className={s.main}>
      <ButtonBack />
      <FullCard />
      <Text view="subtitle" color="primary" weight="bold" className={s.title__related}>
        Related Items
      </Text>
      <div className={s.relatedItems}>
        {arr.map((_, index) => (
          <Card
            key={index}
            id={index}
            image={'../../assets/test.png'}
            title={'Заголовок карточки в несколько строк Заголовок карточки в несколько строк'}
            subtitle={
              'Описание карточки Описание карточки Описание карточкиОписание карточкиОписание карточки Описание карточки'
            }
            captionSlot={
              <Text view="p-14" weight="medium" color="secondary">
                Caption
              </Text>
            }
            contentSlot={
              <Text view="p-18" color="primary" weight="bold">
                Content
              </Text>
            }
            actionSlot={<Button>Action</Button>}
          />
        ))}
      </div>
    </main>
  );
}
