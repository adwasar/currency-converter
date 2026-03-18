import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const CheckIcon = ({ color, style }: Props) => (
  <Svg style={style} width="15" height="11" viewBox="0 0 15 11" fill="none">
    <Path
      d="M1.30005 5.53333L5.26672 9.5L13.2 1"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CheckIcon;
