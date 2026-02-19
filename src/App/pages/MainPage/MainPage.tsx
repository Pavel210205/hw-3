import React from 'react';

import FilterPanel from './FilterPanel';
import HeaderElement from './HeaderElement';
import Text from 'components/Text';
import Card from 'components/Card';
import Button from 'components/Button';

import s from './MainPage.module.scss';

const MainPage: React.FC = () => {
  const arr = new Array(100).fill(1);
  return (
    <>
      <HeaderElement />
      <FilterPanel />
      <main className={s.mainPage}>
        <div className={s.title}>
          <Text tag="h2" color="primary" view="subtitle" weight="bold">
            Total products
          </Text>
          <Text view="p-20" color="accent" weight="bold">
            123
          </Text>
        </div>
        <div className={s.cards}>
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
    </>
  );
};

export default MainPage;
