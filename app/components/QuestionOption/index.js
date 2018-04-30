import React from 'react'
import styled from 'styled-components'


export default styled.div`
  cursor: pointer;
  text-align: left;
  border: 2px solid ${props => props.selected ? '#6c6ed1' : '#ececed' }
  border-radius: 20px;
  padding: 10px 20px;
  margin 5px 5px;
  color: ${props => props.selected ? '#fff' : 'inherit'};
  background: ${props => props.selected ? '#6c6ed1' : '#fff'};
`
