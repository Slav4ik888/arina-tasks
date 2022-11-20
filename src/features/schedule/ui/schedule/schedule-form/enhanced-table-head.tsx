// MUI Stuff
// Functions
import { useTheme } from '@emotion/react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { Theme } from 'app/providers/theme';
import { headCells } from '../../../utils';



const useStyles = (theme: Theme) => ({
  cell: {
    '.MuiTableCell-head': {
      backgroundColor: theme.palette.background.default,
      borderRight: `1px solid #eeeeee`,
      '&:last-of-type': {
        border: 0
      },
      height: `40px`
      // color: theme.palette.common.white,
    },
    '.MuiTableCell-body': {
      fontSize: 14
    }
  }
});


function EnhancedTableHead() {
  const sx = useStyles(useTheme() as Theme);
  // const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        {/* <StyledCell align={'center'} padding="checkbox" >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'Выбрать всё' }}
          />
        </StyledCell> */}

        {
          headCells.map((headCell, i) => (
            <TableCell
              key     = {headCell.id}
              align   = {headCell.numeric ? 'right' : 'center'}
              padding = {headCell.disablePadding ? 'none' : 'normal'}
              style   = {{ minWidth: headCell.width, maxWidth: headCell.width }}
              // sortDirection={orderBy === headCell.id ? order : false}
              sx      = {sx.cell}
            >
                {headCell.label}
            </TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}


export default EnhancedTableHead;
