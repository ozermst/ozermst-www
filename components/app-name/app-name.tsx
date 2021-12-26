import { css } from "@emotion/react";
import { APP_NAME } from "../../lib/constants";

function AppName() {
  return (
    <h1
      css={css`
        font-size: 1.875rem;
        font-weight: var(--font-weight-bold);
        letter-spacing: -0.05em;
        line-height: 2.25rem;
        flex-grow: 1;
        text-align: center;

        @media (min-width: 640px) {
          flex-grow: unset;
        }
      `}
    >
      {APP_NAME}
    </h1>
  );
}

export default AppName;
