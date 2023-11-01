"use client";

import { ThemeContext } from "@/core/contexts/ThemeContext";
import React, { useContext, useEffect, useState } from "react";
import { childrenProps } from "../lib/types";

const ThemeProvider = ({ children }:childrenProps) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
