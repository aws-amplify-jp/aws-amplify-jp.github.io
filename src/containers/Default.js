import React from "react"
import {
  Container,
} from "@material-ui/core"
import Title from "../components/Title"
import Style from "../components/Style"
import Header from "../components/Header"

export default function Default({
  title,
  children
}) {
  return (
    <>
      <Title title={title}/>
      <Style>
        <Header />
        <Container>
          {children}
        </Container>
      </Style>
    </>
  )
}
