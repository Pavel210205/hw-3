import React from 'react';

import MultiDropdown from 'components/MultiDropdown';
import Button from 'components/Button';
import Input from 'components/Input';

import type { Option } from 'components/MultiDropdown';

import s from './FilterPanel.module.scss';

export type FilterPanelProps = {};
const FilterPanel: React.FC<FilterPanelProps> = () => {
  const [seachValue, setSearchValue] = React.useState('');
  const [categoriesValue, setCategoriesValue] = React.useState<Option[]>([]);

  const handleMultiDropdownChange = (newValue: Option[]) => {
    const filtered = newValue.filter((option) => option.value !== 'forbidden');
    setCategoriesValue(filtered);
  };
  return (
    <form className={s.form}>
      <div className={s.search}>
        <Input
          value={seachValue}
          onChange={(value) => setSearchValue(value)}
          placeholder="Search product"
        />
        <Button loading={false}>Find now</Button>
      </div>
      <div className={s.filter}>
        <MultiDropdown
          getTitle={() => 'Filter'}
          options={OPTIONS}
          value={categoriesValue}
          onChange={(newValue) => handleMultiDropdownChange(newValue)}
        />
      </div>
    </form>
  );
};

export default FilterPanel;
const OPTIONS = [
  { value: 'Москва', key: 'msk' },
  { value: 'Санкт-Петербург', key: 'spb' },
  { value: 'Екатеринбург', key: 'ekb' },
];
