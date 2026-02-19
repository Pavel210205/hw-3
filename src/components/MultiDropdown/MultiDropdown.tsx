import React, { useState, useCallback, useRef, useEffect } from 'react';
import s from './MultiDropdown.module.scss';
import Input from '../Input';
import ArrowDownIcon from '../icons/ArrowDownIcon';

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  className?: string;
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  getTitle: (value: Option[]) => string;
  placeholder?: string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
  className,
  options,
  value,
  onChange,
  disabled,
  getTitle,
  placeholder,
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const ref = React.useRef<HTMLInputElement>(null);

  const [filter, setFilter] = React.useState('');

  const [isOpened, setIsOpened] = React.useState(false);

  const open = () => {
    setIsOpened(true);
  };

  React.useEffect(() => {
    const handlerClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as HTMLElement)) {
        setIsOpened(false);
      }
    };

    window.addEventListener('click', handlerClick);

    return () => {
      window.removeEventListener('click', handlerClick);
    };
  }, []);

  React.useEffect(() => {
    if (isOpened) {
      setFilter('');
    }
  }, [isOpened]);

  const title = React.useMemo(() => getTitle(value), [getTitle, value]);

  const isEmpty = value.length === 0;

  const filteredOptions = React.useMemo(() => {
    const str = filter.toLocaleLowerCase();

    return options.filter(
      (o) => o.value.toLocaleLowerCase().indexOf(str) === 0
    );
  }, [filter, options]);
  const selectedKeysSet = React.useMemo<Set<Option['key']>>(
    () => new Set(value.map(({ key }) => key)),
    [value]
  );

  const onSelect = React.useCallback(
    (option: Option) => {
      // Если компонент отключён (disabled), сразу завершаем выполнение функции
      if (disabled) {
        return;
      }

      // Проверяем, уже ли выбрана данная опция (есть ли её ключ в наборе selectedKeysSet)
      if (selectedKeysSet.has(option.key)) {
        // Если опция уже выбрана — удаляем её из списка выбранных опций (value)
        onChange([...value].filter(({ key }) => key !== option.key));
      } else {
        // Если опция ещё не выбрана — добавляем её в список выбранных опций
        onChange([...value, option]);
      }

      // Устанавливаем фокус на элемент, связанный с ref (если ref.current существует)
      ref.current?.focus();
    },
    // Зависимости для useCallback: функция будет пересоздана только при изменении этих значений
    [disabled, onChange, value, selectedKeysSet]
  );

  const opened = isOpened && !disabled;

  return (
    <div
      ref={wrapperRef}
      className={`${s.multiDropdown} ${opened ? s.open : ''} ${
        className ? className : ''
      }`}
    >
      <Input
        ref={ref}
        className={`${s.input} ${opened ? s.open : ''} ${
          disabled ? s.disabled : ''
        }`}
        value={opened ? filter : isEmpty ? '' : title}
        onChange={setFilter}
        onClick={open}
        afterSlot={<ArrowDownIcon color="secondary" />}
        disabled={disabled}
        placeholder={title}
      />
      {opened && (
        <ul className={s.link}>
          {filteredOptions.map((option) => (
            <li
              className={`${s.list} ${
                value.some((o) => o.key === option.key) ? s.active : ''
              }`}
              key={option.key}
              onClick={() => onSelect(option)}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiDropdown;
