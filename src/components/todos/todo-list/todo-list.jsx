import React, { useState } from 'react';
import pt from 'prop-types';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import IconButton from '@material-ui/core/IconButton';
// Icons
import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
// Component


const useStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    // flexWrap: 'wrap', // Убрал, чтобы при длинном тексте появлялось многоточие
    width: `100%`,
    // minWidth: 220,
    color: theme.textSecondary,
  },
  select: {
    // display: 'flex',
    fontSize: theme.fontSize.todo,
    fontColor: theme.palette.fontColor.todo,
    fontWeight: theme.fontWeight.todo,
  },
  lastItem: {
    color: theme.palette.primary.dark,
    fontStyle: `italic`,
  },
  addIcon: {
    marginRight: theme.spacing(1),
  },
  editIcon: {
    marginLeft: theme.spacing(1),
  },
}));

// Список todo с возможностью добавить новый
const TodoList = ({ items, valueField, onSelected, onChangeItem, placeholder, label, itemTextAdd, disabled }) => {

  const classes = useStyles();
  const plText = placeholder || `Не выбрано`;

  const [valueSelected, setValueSelected] = useState(plText);
  
  const handleChange = (e) => {
    const id = e.target.value;

    if (id === `newItemAdd`) { // Если добавили новый
      return onChangeItem();
    }

    const item = items.find(item => item[valueField] === id);
    
    if (item) {
      setValueSelected(item[valueField]);
      onSelected(item);

    } else { // Не выбрали
      setValueSelected(plText);
      onSelected(plText);
    }
  };

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      disabled={disabled}
    >
      <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        value={valueSelected}
        onChange={handleChange}
        input={<Input />}
        className={classes.select}
      >
        <MenuItem value={plText} onClick={handleChange}><em>{plText}</em></MenuItem>
        {
          items && items.map((item, i) => <MenuItem key={item[valueField] + i} value={item[valueField]}>
              {item[valueField]}
            </MenuItem>)
        }
        {
          onChangeItem && <MenuItem value={`newItemAdd`} onClick={onChangeItem} className={classes.lastItem}>
            <AddIcon className={classes.addIcon} />
            {itemTextAdd ? itemTextAdd : `добавить / изменить`}
          </MenuItem>
        }

      </Select>
    </FormControl>
  )
};

TodoList.propTypes = {
  items: pt.array.isRequired,
  valueField: pt.string.isRequired,
  placeholder: pt.string,
  onSelected: pt.func.isRequired,
  onChangeItem: pt.func.isRequired,
  itemTextAdd: pt.string,
  label: pt.string.isRequired,
  disabled: pt.bool,
};

export default TodoList;

