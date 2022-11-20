import { FC, memo, useCallback, useState } from 'react';
// MUI Stuff
import { Card } from '@mui/material';
// Components
import { TasksFormAddition, TasksFormSubtraction, TasksFormOneUnknown } from './one-actions';
import { TasksFormTwoSimpleActions, TasksFormTwoUnknown } from './two-actions';
import { Button, ButtonTheme } from 'shared/ui';
// Functions
import { createAllTasks, getTasksSettings } from './utils';
import * as LS from 'shared/lib/local-storage';
// Types
import { TaskFormError, Tasks, TaskType, TasksSettings, TaskSettingsElement, ExPanel } from '../../../model';
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { TasksFormHeading } from './heading';




const useStyles = ((theme: Theme) => ({
  container: {
    display         : 'flex',
    flexWrap        : 'wrap',
    justifyContent  : 'center',
    width           : '600px',
    height          : 'max-content',
    color           : theme.palette.primary.contrastText,
    backgroundColor : theme.palette.primary.main,
    my              : 4,
    py              : 2,
    px              : 4
  }
}));


type Props = {
  onSetTasks : (tasks: Tasks) => void
}


/** Форма для выбора условий и создания примеров */
export const TasksForm: FC<Props> = memo(({ onSetTasks }) => {
  const
    sx = useStyles(useTheme() as Theme),
    [exPanel, setExPanel] = useState(() => LS.getExPanel()),
    [error, setError] = useState<TaskFormError>(),
    [settings, setSettings] = useState<TasksSettings>(() => getTasksSettings(exPanel));
    

  const handlerChangeSettings = useCallback((type: TaskType, value: TaskSettingsElement) => {
    setSettings(s => ({
      ...s,
      ...{ [type]: { ...value } }
    }))
  }, []);


  // ЗАПУСК
  const handlerCreate = () => {
    const
      tasks: Tasks = createAllTasks(settings),
      newExPanel: ExPanel = { ...settings, lastTasks: tasks };
    
    LS.setExPanel(newExPanel);
    setExPanel(newExPanel);
    onSetTasks(tasks);
  }
    
  // Очистка ошибки
  const handleClearError = () => setError({ message: undefined, taskType: undefined, anchorEl: null });


  return (
    <Card sx={sx.container}>
      <TasksFormHeading title='ПРИМЕРЫ В 1 ДЕЙСТВИЕ' />
      <TasksFormAddition
        error            = {error}
        settings         = {settings}
        setError         = {setError}
        onChangeSettings = {handlerChangeSettings}
        onClearError     = {handleClearError}
      />
      <TasksFormSubtraction
        error            = {error}
        settings         = {settings}
        setError         = {setError}
        onChangeSettings = {handlerChangeSettings}
        onClearError     = {handleClearError}
      />
      <TasksFormOneUnknown
        error            = {error}
        settings         = {settings}
        setError         = {setError}
        onChangeSettings = {handlerChangeSettings}
        onClearError     = {handleClearError}
      />

      <TasksFormHeading title='ПРИМЕРЫ В 2 ДЕЙСТВИЯ' />
      <TasksFormTwoSimpleActions
        error            = {error}
        settings         = {settings}
        setError         = {setError}
        onChangeSettings = {handlerChangeSettings}
        onClearError     = {handleClearError}
      />

      <TasksFormTwoUnknown
        error            = {error}
        settings         = {settings}
        setError         = {setError}
        onChangeSettings = {handlerChangeSettings}
        onClearError     = {handleClearError}
      />
                
      <Button
        text    = 'Создать'
        theme   = {ButtonTheme.SECONDARY}
        onClick = {handlerCreate}
      />
    </Card>
  );
});
