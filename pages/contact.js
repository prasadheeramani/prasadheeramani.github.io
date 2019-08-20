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

class contact extends Component {
  render() {
    return (
      <Page currentPage="/contact">
        <Card color={theme.colors.primary_light}>
          <Container>
            <h1>Contact me!</h1>

            <p>Email: prasadheeramani@gmail.com</p>
            <p>Email: heeramani.15342@iitkgp.ac.in</p>
            <p>
              <Link href="https://drive.google.com/file/d/1MJ3FWIQ_zodTMbhernb-usD7zfbNipuN/view?usp=sharing">
                Resume
              </Link>
            </p>
            <p>
              <Link href="https://wa.me/+918436929996?text=Thanks%20for%20messaging%20me.%20I%20try%20to%20as%20be%20as%20responsive%20as%20possible%20and%20will%20try%20to%20get%20soon.">
                Whatsapp
              </Link>
            </p>
            <p>
              <Link href="https://www.linkedin.com/in/prasadheeramani">
                LinkedIn
              </Link>
            </p>
            <p>
              <Link href="https://github.com/prasadheeramani">Github</Link>
            </p>
            <p>
              <Link href="https://twitter.com/prasadheeramani">Twitter</Link>
            </p>
            <p>
              <Link href="https://www.facebook.com/heeramani.prasad">
                Facebook
              </Link>
            </p>
            <p>
              <Link href="https://m.me/prasadheeramani">Messenger</Link>
            </p>

            <p>Phone: +91 8436929996</p>
          </Container>
        </Card>
      </Page>
    );
  }
}

export default contact;
