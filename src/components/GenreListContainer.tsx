import { ReactNode } from 'react';
import { List } from '@chakra-ui/react';

interface Props{
    children: ReactNode;
    py?: string;
}

const GenreListContainer = ({children, py}:Props) => {
  return (
    <List paddingRight='5' w='200px' py={py}>
      {children}
    </List>
  );
}

export default GenreListContainer