import React from "react";

export function Head({ title }) {
  return (
    <title>{title ? `${title} - ` : ""}Amplify 日本ユーザーグループ</title>
  );
}

export default function Title() {
  return null;
}
