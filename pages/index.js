import React, { Component } from "react";
import styled from "styled-components";

import Link from "next/link";

import Page from "../components/layout/Page";
import { Card } from "../components/Card";
import BusinessIcon from "../components/svg/BusinessIcon";
import SchoolIcon from "../components/svg/SchoolIcon";
import ArrowIcon from "../components/svg/ArrowIcon";
import { theme } from "./../components/Theme";

const CardLayoutMain = styled.div`
  display: flex;
  flex-flow: row wrap-reverse;
  align-items: flex-start;
  color: white;
  justify-content: center;
  text-align: center;
  margin: 25px 0;

  @media (min-width: 850px) {
    flex-flow: row nowrap;
    justify-content: inherit;
    text-align: left;
  }

  h1 {
    padding-bottom: 16px;
    margin-bottom: 45px;
    border-bottom: 2px solid white;
  }

  div {
    padding: 20px;
    margin: 10px 0;
    @media (min-width: 850px) {
      padding: 10px;
      margin: 0;
    }
  }

  img {
    margin: 50px 0 0;
    border: 2px solid white;
    width: 65%;

    @media (min-width: 850px) {
      margin: 40px;
      width: 32%;
    }
  }
`;

const ItalicText = styled.p`
  font-style: italic;
`;

const CardLayoutQuickFacts = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 850px) {
      flex-wrap: nowrap;
    }

    > div {
      margin: 20px;
      flex: 1 0 0;
      h3 {
        width: 60%;
        margin: 4px 20px;
      }
    }

    > div:first-child {
      padding-right: 0;
      padding-bottom: 30px;

      border-bottom: 1px solid gray;
      @media (min-width: 850px) {
        padding-right: 40px;
        border-bottom: 0;
        border-right: 1px solid gray;
      }
    }
  }

  h2 {
    margin-top: 45px;
    text-align: center;
  }

  p {
    /* margin-left: 20px; */
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    align-items: center;
    display: flex;
    padding: 20px;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
    color: ${props => props.theme.colors.primary_dark};
    font-size: 22px;
    cursor: pointer;
  }

  p {
    font-weight: bold;
  }
`;

class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page currentPage="/">
        <Card backgroundImage>
          <CardLayoutMain>
            <div>
              <h1>
                <span>Heeramani</span> Prasad
              </h1>
              <ItalicText>Hi! I am glad you found your way here.</ItalicText>
              <p>
                I am a curious and fast learning computer science student with
                experience in Web development and Machine Learning.
              </p>
              <p>
                Hello, my name is Heeramani Prasad and I am UNDERGRADUATE
                STUDENT in Computer Science and Engineering Deaprtment at IIT
                Kharagpur
              </p>
              <p>
                Apart from that I like travelling, clicking photos and shopping.
              </p>
            </div>
            <img src="/static/img/profile_img.jpg" alt="profile image" />
          </CardLayoutMain>
        </Card>

        <Card color={theme.colors.primary_light}>
          <CardLayoutQuickFacts>
            <h2>Quick Facts</h2>
            <div>
              <div>
                <CategoryHeader>
                  <SchoolIcon width={30} height={30} />

                  <h3>Academic Experience</h3>
                </CategoryHeader>
                <ItalicText>
                  Indian Institute of Techology, Kharagpur
                </ItalicText>
                <ItalicText>Wazirganj College, Gaya [BSEB], 2015</ItalicText>

                <p>
                  Bachelor’s & Master’s of Technology in Computer Science &
                  Engineering I am full stack software developer and currently
                  exploring Machine learning and Deep learning.
                </p>
                <p>
                  Currently I am a teachers assistant in "Programming and Data
                  Structure".
                </p>
              </div>
              <div>
                <CategoryHeader>
                  <BusinessIcon width={30} height={30} />

                  <h3>Industry Experience</h3>
                </CategoryHeader>
                <ItalicText>Intern Analyst, Barclays, Pune</ItalicText>
                <p>2 months intern experience.</p>
                <ItalicText>
                  Technology Platform Optimization, Global Belly, New York
                </ItalicText>
                <p>3 months intern experience.</p>
              </div>
            </div>
            <LinkContainer>
              <Link href="/cv">
                <a>
                  <p>More Info</p>
                  <ArrowIcon color={theme.colors.primary_dark} />
                </a>
              </Link>
            </LinkContainer>
          </CardLayoutQuickFacts>
        </Card>
      </Page>
    );
  }
}

export default index;
