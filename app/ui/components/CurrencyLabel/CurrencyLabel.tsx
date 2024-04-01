import { ExchangeRate } from "../../api/request";
import styles from "./CurrencyLabel.module.css";
import Image from 'next/image'
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

interface DynamicTextProps {
  fontWeight?: string;
}

const DynamicText = styled.span<DynamicTextProps>`
  font-weight: ${props => props.fontWeight};
`;


export default function CurrencyLabel({
  quoteCurrency,
  fontWeight = "normal",
  exchangeRate
}: {
  exchangeRate: ExchangeRate;
  quoteCurrency?: string;
  fontWeight?: string;
}) {
  if (!exchangeRate.currencyIcon) return <CircularProgress size="1.75rem" />

  const { currency, currencyIcon } = exchangeRate

  return (
    <div className={styles.container}>
      <Image
        src={currencyIcon}
        alt={currency}
        width={38}
        height={38}
        className={styles.image}
      />
      <DynamicText fontWeight={fontWeight}>{currency}{quoteCurrency && ` / ${quoteCurrency}`}</DynamicText>
    </div>
  )
}