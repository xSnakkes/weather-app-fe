import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import arrowIcon from "shared/assets/icons/arrow.svg";
import { Title } from "shared/ui";
import { useHistoryStore } from "entity/history";
import { HistoryList } from "widgets/history-list";

export const HistoryPage: React.FC = () => {
  const nav = useNavigate();
  const { history } = useHistoryStore();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => nav(-1)}>
          <img src={arrowIcon} alt="Back" />
        </button>
        <Title variant="h3" className={styles.title}>
          Weather history
        </Title>
      </div>
      <HistoryList items={history} />
    </div>
  );
};
