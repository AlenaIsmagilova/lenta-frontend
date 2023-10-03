import * as React from 'react';
import {styled} from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import {Box} from "@mui/material";
import basketIcon from '../../app/images/basket.svg'

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({theme}) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    {key: 0, label: 'Выпечка'},
    {key: 1, label: 'Кулинария'},
    {key: 2, label: 'Салаты'},
    {key: 4, label: 'Напитки'},
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClick = () => console.log('Применить шаблон');

  const deleteIcon =
    (<Box component={"img"} src={basketIcon} width={12} height={12}/>);
  return (
    <Box
      display={'flex'}
      gap={5}
      flexWrap={'wrap'}
      p={0.5}
      my={6}
      sx={{
        listStyle: 'none',
      }}
      component={"ul"}
    >
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              component={"div"}
              sx={{
                height: "32px",
                color: 'black',
                fontSize: "15px"
              }}
              variant="outlined"
              color="primary"
              label={data.label}
              deleteIcon={deleteIcon}
              onClick={handleClick}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}
