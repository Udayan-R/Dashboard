import { styled } from "styled-components";

const TheCard = styled.div`
  display: flex;
  gap: 2rem;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #1b1d21;
  padding: 0.8rem;
  width: 20rem;
  border-radius: 0.8rem;
  cursor: pointer;
`;
const Image = styled.img`
  width: 4rem;
  height: 4rem;
`;

const P = styled.p`
  font-size: 1.4rem;
  color: #fff;
`;

const Span = styled.span`
  font-size: 1.2rem;
  color: #737070;
`;

const fileCards = [
  {
    img: "src/images/icons8-project-48.png",
    title: "Project Brief.docx",
    span: "Download",
  },
  {
    img: "src/images/icons8-google-drive-48.png",
    title: "Project Assets",
    span: "docs.google.com",
  },
  {
    img: "src/images/icons8-figma-48.png",
    title: "Native Project",
    span: "Figma.com",
  },
  {
    img: "src/images/icons8-pdf-40.png",
    title: "Project Structure",
    span: "Download",
  },
];

const FileCard = () => {
  return (
    <>
      <TheCard>
        {fileCards.map((card) => (
          <>
            <Card>
              <Image src={card.img} alt="" />
              <div>
                <P>{card.title}</P>
                <Span>{card.span}</Span>
              </div>
            </Card>
          </>
        ))}
      </TheCard>
    </>
  );
};

export default FileCard;
