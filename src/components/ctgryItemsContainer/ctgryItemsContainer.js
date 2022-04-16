import { css } from "@emotion/react";

function CtgryItemsContainer({ theme, ...props }) {
  const ctgryItemsContainerStyles = css({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    width: "100%",
  });

  return <div css={ctgryItemsContainerStyles} {...props} />;
}

export default CtgryItemsContainer;
