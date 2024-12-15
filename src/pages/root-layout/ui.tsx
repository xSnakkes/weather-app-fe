import React from "react";
import { Outlet, useLocation, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.scss";
import { MainPage } from "pages/main";
import { HistoryPage } from "pages/history";

export const RootLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ x: location.pathname === "/history" ? 300 : -300 }}
          animate={{ x: 0 }}
          exit={{ x: location.pathname === "/history" ? 300 : -300 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.content}
          style={{ position: "absolute", width: "100%" }}
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
