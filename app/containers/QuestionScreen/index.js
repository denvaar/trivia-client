import React from 'react'
import PropTypes from 'prop-types'

import ProfileImage from 'components/ProfileImage'
import ContentPannel from 'components/ContentPannel'
import QuestionOption from 'components/QuestionOption'
import QuestionHeader from 'components/QuestionHeader'
import QuestionTitle from 'components/QuestionTitle'
import Choices from 'components/Choices'
import SystemLabel from 'components/SystemLabel'


class QuestionScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedChoice: null
    }
  }

  render() {
    const { selectedChoice } = this.state

    return (
      <ContentPannel>
        <QuestionHeader>
          <SystemLabel>
            <i className="fas fa-user" data-fa-transform="shrink-4"></i>
            {'500K'}
          </SystemLabel>
          <ProfileImage size='45px' />
          <div/>
        </QuestionHeader>
        <QuestionTitle>{this.props.question}</QuestionTitle>
        <Choices>
          {this.props.choices.map(choice => (
            <QuestionOption
              key={choice}
              onClick={() => this.setState({ selectedChoice: choice })}
              selected={choice === selectedChoice}
            >
              {choice}
            </QuestionOption>
          ))}
        </Choices>

      </ContentPannel>
    )
  }
}

QuestionScreen.propTypes = {
  question: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired
}

export default QuestionScreen
