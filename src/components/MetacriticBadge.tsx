import { Badge } from "@chakra-ui/react"
interface Props{
    metacritic: number;
}
const MetacriticBadge = ({metacritic}: Props) => {
  return (
    <Badge
      textAlign='center'
      border='1px'
      borderColor='green.300'
      color='green.300'
      bg='transparent'
      w='fit-content'
      px='2'>
      {metacritic}
    </Badge>
  );
}

export default MetacriticBadge