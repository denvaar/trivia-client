import React from 'react'
import styled from 'styled-components'

import SystemLabel from 'components/SystemLabel'


const CenteredText = styled.div`
  text-align: center;
  padding: 1rem;
`
const ProfileContainer = styled.div`
  text-align: center;
  background: white;
  border-radius: 6px;
`
const ProfileName = styled.h2`
  color: #36399a;
`
const ProfileImage = styled.img`
  background: #ddd;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`
const ProfilePannel = styled.div`
  padding: 1rem;
  flex: 1;

  &:first-child {
    border-right: 1px solid #ddd;
  }
`
const ProfileFooter = styled.div`
  color: #9f9ab8;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProfileFooterPannel = styled.div`
  flex: 1;
`

const GameInfo = () => (
  <CenteredText>
    <SystemLabel>{'next game'}</SystemLabel>
    <div>{'7pm MDT'}</div>
    <div>{'$25,000 prize'}</div>
  </CenteredText>
)

const ProfileInfo = () => (
  <ProfileContainer>
    <div style={{padding: '1rem'}}>
      <ProfileImage />
      <ProfileName>{'Denvaar'}</ProfileName>
    </div>
    <div style={{display: 'flex',borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>
      <ProfilePannel>
        <SystemLabel>{'balance'}</SystemLabel>
        <ProfileName>{'$0'}</ProfileName>
      </ProfilePannel>
      <ProfilePannel>
        <SystemLabel>{'weekly rank'}</SystemLabel>
        <ProfileName>{'--'}</ProfileName>
      </ProfilePannel>
    </div>
    <ProfileFooter>
      <ProfileFooterPannel>
        <SystemLabel style={{textAlign: 'right'}}>{'extra lives'}</SystemLabel>
      </ProfileFooterPannel>
      <ProfileFooterPannel>
        <div className="fa-2x">
          <span className="fa-layers fa-fw">
            <i className="fas fa-heart"></i>
            <span className="fa-layers-text fa-inverse" style={{fontSize: '14px'}}>0</span>
          </span>
        </div>
      </ProfileFooterPannel>
      <ProfileFooterPannel>
        <button>{'Get More'}</button>
      </ProfileFooterPannel>
    </ProfileFooter>
  </ProfileContainer>
)

class GameLobby extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <GameInfo />
        <ProfileInfo />
      </div>
    )
  }
}

export default GameLobby
