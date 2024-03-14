import { Mods, classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, RefObject, memo, useEffect, useRef } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.Input, mods, [className])}>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
