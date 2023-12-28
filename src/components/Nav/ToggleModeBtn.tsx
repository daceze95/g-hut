import { ColorMode, Switch } from '@chakra-ui/react';
export interface ToggleModeProps {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}
const ToggleModeBtn = ({ colorMode, toggleColorMode }: ToggleModeProps) => {
  return (
    <Switch
      onChange={(event) =>
        event.target.checked ? toggleColorMode() : toggleColorMode()
      }
      title={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
    />
  );
};

export default ToggleModeBtn;
