import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import Content from "./Content";
import { contentData } from "../../data/writtenPostData";

const CategoryList = () => {
  const location = useLocation();
  const category = location.state?.category || "defaultCategory";

  const storedData = JSON.parse(sessionStorage.getItem("writeData")) || [];

  const filteredData = storedData
    .filter((data) => data.category === category)
    .reverse();

  return (
    <div>
      <BoardName>{getBoardName(category)}</BoardName>
      <Container>
        <ContentContainer>
          {filteredData.map((data) => (
            <Link to={`/comu/${data.id}`} key={data.id} state={{ data }}>
              <ContentStyle key={data.id}>
                <Content
                  title={data.title}
                  name={data.name}
                  content={data.content}
                  userImg={data.userImg}
                  zeroGrade={data.zeroGrade}
                  heart={data.heart}
                  commentCount={data.commentCount}
                  scrap={data.scrap}
                />
              </ContentStyle>
            </Link>
          ))}
        </ContentContainer>
      </Container>
    </div>
  );
};

const getBoardName = (category) => {
  switch (category) {
    case "tipShare":
      return "꿀팁 공유 게시판";
    case "spaceShare":
      return "가게 공유 게시판";
    case "expShare":
      return "실천 인증 게시판";
    default:
      return "";
  }
};

const FontStyles = styled.div`
  @font-face {
    font-family: "font";
    src: url("../font/Hey\ October.ttf") format("truetype");
  }
  @font-face {
    font-family: "Kfont";
    src: url("../font/SB\ Aggro\ M.ttf") format("truetype");
  }
`;

const BoardName = styled.div`
  position: absolute;
  top: 20px;
  width: 375px;
  height: 40px;
  text-align: center;
  background-color: #ef9f38;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: kfont;
  font-size: 22px;
  font-style: normal;
  line-height: normal;
  padding: 10px;
`;

const Container = styled.div`
  margin: 16px;
  width: 333px;
  background: #158d6c;
  margin: auto;
`;

const ContentContainer = styled.div`
  margin-top: 35px;
`;

const ContentStyle = styled.div`
  margin-top: 10px;
`;

export default CategoryList;
