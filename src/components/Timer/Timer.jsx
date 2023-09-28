import Circle from './Circle/Circle';
import {
  FormattedTitle,
  PlayIcon,
  TimerBtn,
  TimerSub,
  TimerText,
  TimerTitle,
  TimerWrapper,
} from './Timer.styles';
import symbolDefs from '../../../src/images/sprite.svg';

const Timer = ({ data }) => {
  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <Circle />
      <FormattedTitle>{data.time} minutes</FormattedTitle>
      <TimerBtn>
        <PlayIcon>
          <use href={symbolDefs + '#icon-play'}> </use>
        </PlayIcon>
      </TimerBtn>
      <TimerText>
        Burned calories:
        <TimerSub>{data.burnedCalories}</TimerSub>
      </TimerText>
    </TimerWrapper>
  );
};

export default Timer;
