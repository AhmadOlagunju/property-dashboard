import { TitleProps, useRouterContext } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import React from "react";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src="/refine-collapsed.svg" alt="Refine" width="28px" />
        ) : (
          <img src="/refine.svg" alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
