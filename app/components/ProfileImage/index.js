import React from 'react'
import styled from 'styled-components'


export default styled.img`
  background: #ddd;
  width: ${props => props.size || '60px'};
  height: ${props => props.size || '60px'};
  border-radius: 50%;
`
