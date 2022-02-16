import React from 'react';
import styled from '@emotion/styled';

const HeadingS = styled.h1(
  {
    color: 'purple'
  }
)

function Heading() {
    return (
        <HeadingS>
          Voila!
        </HeadingS>
    )
}

export default Heading;
