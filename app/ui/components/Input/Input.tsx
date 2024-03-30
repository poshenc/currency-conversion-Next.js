import React, { ChangeEvent, FunctionComponent, InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange(value: string): void
}

const Input: FunctionComponent<Props> = ({ onValueChange, ...props }) => {

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value)
  }

  return (
    <input className={styles.input} {...props} onChange={onChangeHandler} />
  )
}

export default Input