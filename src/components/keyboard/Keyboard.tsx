import * as React from 'react';
import { connect } from 'react-redux';
import { genCharArray } from '../../utils/helper';
import { letterPressedAction, timerRestart } from '../../redux/actions';
import { State } from '../../redux/reducers';
import { gameState } from '../../redux/reducers/game';
import './Keyboard.scss';

// Props interface
interface Props {
  onLetterPressed: (letter: string) => void;
  game: gameState;
}

// Bind state to Props
const mapStateToProps = (state: State) => ({
  game: state.game
})

// Actions bind to props
const mapDispatchToProps = (dispatch: any) => ({
  onLetterPressed: (letter: string) => {
    dispatch(letterPressedAction(letter))
    dispatch(timerRestart());
  },
});

// Component
const Keyboard: React.FunctionComponent<Props> = props => {
  const [letters, setLetters] = React.useState(genCharArray("A", "Z"));

  const onLetterPressed = (letter: string) => {
    if (props.game.attempt && props.game.timer) {
      props.onLetterPressed(letter)
    }
  }

  return (
    <>
      <div className="app-keyboard">
        {
          letters.map(letter => (<span key={letter} onClick={() => onLetterPressed(letter)} 
            className={props.game.interaction.includes(letter) ? 'disabled': ''}>{letter}</span>))
        }
      </div>
    </>
  )
};
  
// Redux connector to create high order component with store integration
const KeyboardContainer = connect(mapStateToProps, mapDispatchToProps)(Keyboard);

export default KeyboardContainer;