import styled from "styled-components";
import FileCard from "../../utils/FileCard";

const OverviewSec = styled.div`
  height: 100%;
  padding: 4rem 4rem;
`;

const Contents = styled.div`
  width: 80rem;
`;
const H3 = styled.h3`
  font-size: 2.4rem;
  color: #fff;
  font-weight: 500;
  margin-bottom: 2.8rem;
`;
const H4 = styled.h4`
  font-size: 1.8rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 2rem;
`;
const Span = styled.span`
  font-size: 1.6rem;
  color: #fff;
`;

const P = styled.div`
  font-size: 1.4rem;
  margin-top: 1.4rem;
  color: #737070;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const FileItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Overview = () => {
  return (
    <>
      <OverviewSec>
        <Contents>
          <H3>Project Info</H3>
          <div>
            <Span>Native Project - Finance Saas Web Design</Span>
            <P>
              Native project, is an innovative Finance Saas landing page that
              offers powerfui tools and insights for managing your finances
              efficiently and effectively. Experience seamless integration and
              take control of your financial journey.
            </P>
          </div>
        </Contents>
        <div>
          <H4>Files & Links</H4>
          <FileItems>
            <FileCard />
          </FileItems>
        </div>
      </OverviewSec>
    </>
  );
};

export default Overview;
