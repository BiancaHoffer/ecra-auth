import styled from "styled-components";

export const Container = styled.main`
  background-color: #0276B5;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const ContainerAuth = styled.div`
  position: absolute;
  background-color: transparent;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentAuth = styled.div`
  background-color: #ffff;
  width: 100%;
  max-width: 600px;
  margin: 0 20px 0px 20px;
  padding: 80px 60px;
  border-radius: 4px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 3px 18px 2px rgba(0,0,0,0.25);

  @media(max-width: 720px) {
    padding: 40px 20px;
  }

  h1 {
    color: #3BA2FE; 
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 18px;
  }

  p {
    font-size: 0.9rem;
    text-align: justify;
    color: #A3A8AB;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .separator {
    margin: 32px 0px 32px;
    height: 1px;
    width: 100%;
    background-color: #f2f2f2f2;
  }

  .help {
    align-self: center;
    color: #A3A8AB;
    
    &:hover {
      text-decoration: underline;
    }

    a {
      color: #3BA2FE
    }
  }
`