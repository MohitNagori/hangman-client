
import * as React from 'react';
import { connect } from 'react-redux';
import Keyboard from '../../components/keyboard/Keyboard';
import Word from '../../components/word/Word';
import GameHeader from '../../components/game-header/GameHeader';
import Hangman from '../../components/hangman/Hangman';

// Props interface
interface Props {}

// Component
const Game: React.FunctionComponent<Props> = props => (
  <>
    <GameHeader />
    <Hangman />
    <Word />
    <Keyboard />
  </>
);
  
// Reduc connector to create high order component with store integration
const GameContainer = connect(null, null)(Game);

export default GameContainer;