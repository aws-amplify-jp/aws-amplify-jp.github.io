import React from "react";
import { Helmet } from "react-helmet";
import { description } from "../../package.json";

export default function Description() {
  return (
    <Helmet>
      <meta name="description" content={description} />
    </Helmet>
  );
}
