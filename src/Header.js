import "./App.css";
import styled from "styled-components";

function Header() {
  const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `;

  const HeaderTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 20px 100px 20px;
  `;

  const Logo = styled.img`
    width: 40px;
    height: 40px;
  `;

  const HeaderDescription = styled.div``;

  const HeaderBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin: 40px;
  `;

  const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const HeaderImageHero = styled.div`
    .paint-image {
      border-radius: 30px;
      width: 550px;
      height: 550px;
    }
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
  `;
  const Boxes = styled.div`
    margin: 20px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const PinkBox = styled.div`
    background-color: #f19295;
    border-radius: 20px;
    width: 40%;
    height: 200px;
  `;

  const YellowBox = styled.div`
    background-color: #ffdd95;
    border-radius: 20px;
    width: 55%;
    height: 200px;
  `;

  return (
    <Header>
      <HeaderDescription>
        <HeaderTop>
          <Logo src="./stone-spa-flower.svg" alt="Artists" />
          <button type="button" className="button-dark">
            Get in Touch
          </button>
        </HeaderTop>
        <h1>Unleash Your Creativity at the Arts Conference for Artists</h1>
        <HeaderBottom>
          <button type="button" className="button-dark">
            Check our Portfolio
          </button>
          <button type="button" className="button-light">
            Show our showreel
          </button>
        </HeaderBottom>
        <Description>
          <p>
            We understand the value of unity, idea exchange, and mutual
            inspiration among artists. This gathering is crafted just for you,
            offering a platform to engage with peers, discover new artistic
            methods, and acquire precious knowledge about the industry.
          </p>
        </Description>
      </HeaderDescription>
      <Container>
        <HeaderImageHero>
          <img className="paint-image" src="./paint.jpeg" alt="Artists" />
        </HeaderImageHero>

        <Boxes>
          <PinkBox></PinkBox>
          <YellowBox></YellowBox>
        </Boxes>
      </Container>
    </Header>
  );
}

export default Header;
