import React from "react";
import pkg from "../../package.json";

export function Head() {
  return (
    <>
      <meta name="description" content={pkg.description} />
    </>
  );
}

export default function Description() {
  return null;
}
