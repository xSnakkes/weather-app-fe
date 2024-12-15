import React from "react";
import { Outlet, useLocation, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.scss";
import { MainPage } from "pages/main";
import { HistoryPage } from "pages/history";
import { usePageWidth } from "shared/hooks/usePageWidth";

const getAnimationX = (location: string, width: number): number => {
  const isMobile = width < 768;
  const isHistory = location === "/history";

  if (isMobile) {
    return isHistory ? 300 : -300;
  }

  return isHistory ? width : -width;
};

export const RootLayout: React.FC = () => {
  const location = useLocation();
  const width = usePageWidth();

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ x: getAnimationX(location.pathname, width) }}
          animate={{ x: 0 }}
          exit={{ x: getAnimationX(location.pathname, width) }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <Routes location={location} key={location.key}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<Navigate to={"/main"} />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
