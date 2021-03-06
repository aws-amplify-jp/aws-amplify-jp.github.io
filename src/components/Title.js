import React from "react";
import { Helmet } from "react-helmet";

export default function Title({ title }) {
  return (
    <Helmet>
      <title>{title ? `${title} - ` : ""}Amplify 日本ユーザーグループ</title>
    </Helmet>
  );
}
