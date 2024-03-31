import React, { ChangeEvent, FunctionComponent, InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange(value: string): void;
  Icon?: React.ElementType;
  textAlign?: 'left' | 'right';
}

const Input: FunctionComponent<Props> = ({ onValueChange, Icon, textAlign = 'left', ...props }) => {

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value)
  }

  return (
    <div className={styles.container}>
      <input id='input-box' className={styles.input} style={{ textAlign }} {...props} onChange={onChangeHandler} />
      {Icon && <label htmlFor='input-box'><Icon className={styles.icon} /></label>}
    </div>
  )
}

export default Input