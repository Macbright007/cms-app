import styled from "styled-components";

export const Container = styled.div`
  // border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
`;
export const LeftSide = styled.div`
  //   border: 2px solid blue;
  background: var(--clr-primary);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.form`
  //   border: 2px solid black;
  width: 70%;
  height: 90vh;
  padding: 3rem;
  background: var(--clr-primary1);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .form__head > h1 {
    font-family: var(--ft-family);
    font-style: var(--ft-style);
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    color: #000;
  }

  .form__head p {
    font-family: var(--ft-family);
    font-style: var(--ft-style);
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000;
  }

  .form__body {
    margin-top: 3rem;
  }

  input[type="password"] {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    margin-bottom: 2rem;
  }
  input[type="email"] {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    margin-bottom: 2rem;
  }
  input:focus {
    outline: none;
  }

  .form__btn button {
    background: #096fcd;
    border: none;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    color: #fff;
    width: 100%;
    padding: 15px;
    font-family: var(--ft-family);
    font-style: var(--ft-style);
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-top: 1rem;
  }

  .form__btn button:hover {
    cursor: pointer;
    background: #6495ed;
  }

  .form__btn p {
    text-align: center;
    font-family: var(--ft-family);
    font-style: var(--ft-style);
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    margin-top: 25px;
  }
  .form__btn a {
    color: #096fcd;
    text-decoration: none;
  }

  .form__btn a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .line-4{
    position: relative;
    border: 1px solid #fff;
  }

  .line-4 hr {
    height: 1px;
    border: 0;
    background: #000;
    margin: 3rem 0;
    // border: 1px solid #000000;
  }

  .line-4 span{
    position: absolute;
    right: 220px;
    top: 15px;
    background: #fff;
    padding: 20px;
    border-radius: 100%;
  }

  .btn{
    background: transparent;
    border: 1px solid #000000;
    border-radius: 10px;
    color: #000;
    width: 100%;
    padding: 12px;
    font-family: var(--ft-family);
    font-style: var(--ft-style);
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
  }

  .btn:hover{
    border: 1px solid black;
    border-width: 1px 1px 5px 1px;
  }
`;

export const RightSide = styled.div`
//   border: 2px solid black;
//   background: var( --clr-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageCont = styled.div`
//   border: 2px solid blue;
  height: 70vh;

  img{
    height: 100%;
  }
`