import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const ArrowIcon = ({ color, style }: Props) => (
  <Svg style={style} width="12" height="8" viewBox="0 0 12 8" fill="none">
    <Path d="M10 0L5.707 4.293L1.414 0L0 1.414L5.707 7.121L11.414 1.414L10 0Z" fill={color} />
  </Svg>
);

export default ArrowIcon;
