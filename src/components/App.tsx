import * as React from "react";
import { css } from "@emotion/core";

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => (
  <h1
    css={css`
      color: red;
    `}
  >
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);
