import { NativeModules } from 'react-native';

type AndroidVisionBuilderType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AndroidVisionBuilder } = NativeModules;

export default AndroidVisionBuilder as AndroidVisionBuilderType;
