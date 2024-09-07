import React, { useState, ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";

import { Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useRouter();
  const isNonMobile = useMediaQuery("(min-width: 600px)");


 

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Box flexGrow={1}>
        <Header
   
        />

        {children}

        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
