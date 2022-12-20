import React from "react";
import { Container, FormContainer, ImageCont, LeftSide, RightSide } from "./authStyles";
import { FcGoogle } from "react-icons/fc";
import signU from "../../images/signU.svg"


const SignUp = () => {
  return (
    <Container>
      <LeftSide>
        <FormContainer>
          <div className="form__head">
            <h1>Sign up</h1>
            <p>Please input your details to continue</p>
          </div>

          <div className="form__body">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>

          <div className="form__btn">
            <button>Create your account</button>
            <p>
              Already have an account?<a href="#">Log in here</a>
            </p>
          </div>

          <div class="line-4">
            <hr />
            <span>or</span>
          </div>

          <button className="btn">
            <FcGoogle
              style={{
                fontSize: 30,
                marginRight: "15px",
                marginBottom: "-10px",
              }}
            />
            Sign up with Google
          </button>
        </FormContainer>
      </LeftSide>

      <RightSide>
        <ImageCont>
            <img src={signU} alt="logo" />
        </ImageCont>
      </RightSide>
    </Container>
  );
};

export default SignUp;
