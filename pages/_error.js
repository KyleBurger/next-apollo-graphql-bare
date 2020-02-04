import React from "react";
import styled from "styled-components";
import withLayout from "../components/Layout";

const Error404 = () => {
  return <ErrorContainer>Your custom error page...</ErrorContainer>;
};

export default withLayout(Error404);

const ErrorContainer = styled.section``;
