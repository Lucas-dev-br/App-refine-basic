import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Button } from "@mui/material";

import { logo, logomin } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logomin} alt="Yariga" width="28px" />
        ) : (
          <img src={logo} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
