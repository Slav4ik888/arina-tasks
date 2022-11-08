import React from 'react';
// import pt from 'prop-types';
// MUI Stuff
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Checkbox from '@material-ui/core/Checkbox';
// Functions
import { headCells } from '../../../features/schedule/utils';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.default,
    borderRight: `1px solid #eeeeee`,
    '&:last-of-type': {
      border: 0,
    },
    height: `40px`,
    // color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


function EnhancedTableHead(props) {
  // const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        {/* <StyledTableCell align={'center'} padding="checkbox" >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'Выбрать всё' }}
          />
        </StyledTableCell> */}

        {
          headCells.map((headCell, i) => (
            <StyledTableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'center'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              style={{ minWidth: headCell.width, maxWidth: headCell.width }}
              // sortDirection={orderBy === headCell.id ? order : false}
            >
                {headCell.label}
            </StyledTableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  // numSelected: pt.number.isRequired,
  // onSelectAllClick: pt.func.isRequired,
  // rowCount: pt.number.isRequired,
};

export default EnhancedTableHead;
