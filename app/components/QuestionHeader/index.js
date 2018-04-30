import React from 'react'
import styled from 'styled-components'


export default styled.div`
  text-align: center;
  padding: 20px;
  display: flex;

  & > div {
    flex: 1;
  }
  & > div, &:first-child {
    text-align: left;
  }
`
