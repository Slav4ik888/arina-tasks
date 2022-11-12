import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
// MUI Stuff
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';
// Components
import DialogConfirm from '..';
import { ConfirmType } from 'app/types';
// Functions
import { theme as themeFile } from 'app/providers/theme';


const
  theme          = createTheme(themeFile as ThemeOptions),
  arrComfirmType = Object.values(ConfirmType);


describe(`<Dialog-confirm />`, () => {

  beforeEach(() => jest.clearAllMocks());

  const
  { getByText, queryByText } = screen,
    onOk     = jest.fn(),
    onCancel = jest.fn();

  it(`Open is false`, () => {
    render(
      <ThemeProvider theme={theme}>
        <DialogConfirm
          typeOk   = {ConfirmType.CONFIRM}
          open     = {false}
          title    = 'Подтвердите операцию'
          onOk     = {onOk}
          onCancel = {onCancel}
        />
      </ThemeProvider>
    );

    expect(queryByText('Подтвердите операцию')).not.toBeInTheDocument();
  });


  it(`Open is true`, () => {
    render(
      <ThemeProvider theme={theme}>
        <DialogConfirm
          typeOk   = {ConfirmType.CONFIRM}
          open     = {true}
          title    = 'Подтвердите операцию'
          onOk     = {onOk}
          onCancel = {onCancel}
        />
      </ThemeProvider>
    );

    expect(getByText('Подтвердите операцию')).toBeInTheDocument();
  });

  arrComfirmType.forEach(typeOk => it(`typeOk ${typeOk}`, () => {
    render(
      <ThemeProvider theme={theme}>
        <DialogConfirm
          typeOk   = {typeOk}
          open     = {true}
          title    = 'Подтвердите операцию'
          onOk     = {onOk}
          onCancel = {onCancel}
        />
      </ThemeProvider>
    );

    const
      cancelLabel = typeOk === ConfirmType.SAVE_EXIT ? `Выйти без сохранения` : `Отменить`;

    
    fireEvent.click(getByText(typeOk));
    expect(onOk).toHaveBeenCalledTimes(1);


    if (typeOk !== ConfirmType.NO_QUESTIONS) {
      fireEvent.click(getByText(cancelLabel));
      expect(onCancel).toHaveBeenCalledTimes(1);
    }
    else {
      expect(queryByText('Отменить')).not.toBeInTheDocument();
    }
  }));
});

// npm test dialog-confirm.e2e.test.tsx
