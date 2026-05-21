import { useEffect, useRef, useState } from 'react';

import SvgIcChevronDownGray700 from '@assets/svg/IcChevronDownGray700';
import {
  type DropdownOption,
  type SortValue,
} from '@pages/recruit/constants/dropdown';

import * as styles from './Dropdown.css';

interface DropdownProps {
  options: DropdownOption[];
  value: SortValue;
  onChange: (value: SortValue) => void;
}

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);
  const displayText = selectedOption?.label;

  const handleOptionClick = (option: SortValue) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {displayText}
        <SvgIcChevronDownGray700 width={'1.6rem'} height={'1.6rem'} />
      </button>

      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={styles.optionItem}
                data-selected={value === option.value}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
