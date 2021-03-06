import { css, jsx } from "@emotion/react";

export interface ContainerProps {
  children?: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div
      css={css`
        width: 95%;
        margin: 0 auto;

        @media (min-width: 640px) {
          max-width: 640px;
        }
        @media (min-width: 768px) {
          max-width: 768px;
        }
        @media (min-width: 1024px) {
          max-width: 1024px;
        }
        @media (min-width: 1280px) {
          max-width: 1280px;
        }
        @media (min-width: 1536px) {
          max-width: 1536px;
        }
      `}
    >
      {children}
    </div>
  );
}

export default Container;
