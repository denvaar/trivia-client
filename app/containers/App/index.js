import React from 'react'
const { Socket } = require('phoenix-channels')

import Wrapper from 'components/Wrapper'
import QuestionHeader from 'components/QuestionHeader'

import GameLobby from 'containers/GameLobby'
import QuestionScreen from 'containers/QuestionScreen'


class App extends React.Component {
  constructor(props) {
    super(props)

    /*  Game States
     *
     *  - stopped (user sees profile page)
     *  - beginning (user sees a countdown until the game is live)
     *  - live (user sees live video stream)
     *  - asking (user sees question for 10 seconds)
     *  - telling (user sees the correct/incorrect responses for the question)
     *  - ending (user sees which players have won)
     *
     * */

    this.state = {
      gameStatus: 'closed',
      socketStatus: false,
      currentQuestion: 'Which fast-food restaurant opened their doors first?',
      choices: ['Pizza Hut', 'Taco Bell', 'McDonalds']
    }
  }

  componentDidMount() {
    let socket = new Socket('ws://0.0.0.0:4000/socket')
    socket.connect()

    let channel = socket.channel('game_show:lobby', {fart: true})
    channel.join()
      .receive('ok', resp => {
        this.setState({ socketStatus: true})
      })
      .receive('error', resp => {
        console.log('error')
      })

    channel.on('beginGame', msg => {
      this.setState({
        gameStatus: 'running'
      })
    })

    channel.on('shout', msg => {
      this.setState({
        currentQuestion: msg.question,
        choices: msg.choices
      })
    })
  }

  render() {
    const { gameStatus, currentQuestion, choices } = this.state

    return (
      <Wrapper>
        {gameStatus == 'closed' && <GameLobby />}
        {gameStatus == 'running' &&
          <QuestionScreen
            question={currentQuestion}
            choices={choices}
          />}
      </Wrapper>
    )
  }
}
export default App
