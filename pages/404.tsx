import Container from "layouts/Container";
import React from "react";

type Props = {};

function NotFound({}: Props) {
  return (
    <Container meta={{ title: "Page Not Found" }}>
      <h1 className="text-xl font-bold">😁 Page Not Found</h1>
    </Container>
  );
}

export default NotFound;
