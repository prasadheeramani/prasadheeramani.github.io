import React, { Component } from "react";
import styled from "styled-components";
import Page from "../components/layout/Page";
import { Card } from "../components/Card";
import { theme } from "../components/Theme";
import Link from "next/link";
const Container = styled.div`
  text-align: center;
  min-height: 300px;
  h1,
  p {
    margin: 45px;
  }
`;

class blog extends Component {
  render() {
    return (
      <Page currentPage="/blog">
        <Card color={theme.colors.primary_light}>
          <Container>
            <h1>My Blog</h1>
            <h3>Why I choose Next.js ?</h3>
            <p>
              This is my first blog, not much expected. Development with next.js
              is easy. We can also integrate guess.js with it providing
              machine-learning driven user experience on web. It supports
              server-side rendering.
            </p>
          </Container>
        </Card>
      </Page>
    );
  }
}

export default blog;
