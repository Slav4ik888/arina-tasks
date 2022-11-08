export const theme = {
  palette: {
    primary: {
      ultralight: `#efebe9`,
      light: `#f8ffd7`, 
      main: `#c5e1a5`,
      dark: `#94af76`,
      contrastText: `#000000`,
    },
    secondary: {
      ultralight: `#fff6f3`,
      light: `#ffffb3`,
      main: `#ffe082`,
      dark: `#caae53`,
      ultradark: `#4b2c20`,
      contrastText: `#ffffff`,
    },
    fontColor: {
      todo: ``,
      document: ``,
      section: ``,
      ruleTitle: `#aa2e25`,
      rule: `#666666`,
      noAnswer: `##37474f`,
      rightAnswer: `#64dd17`,
      wrongAnswer: `#ff3d00`,
    },
    background: {
      default: `#e4e9ea`, // Для body #ebecf0  
      main: `#ffffff`,
      light: `#ececec`,
      bodyfield: `#e0e0e0`, 
      paperChip: `#b3b9bf`,
      chip: `#ffffb0`,
      dialog: `#c1e5e2`,
      dialogBody: `#d2d8d7`,
      hover: `#cfd8dc`,
      iconHover: `#62727b`, // 9e9e9e
      section: `#c9cfd2`, //fafafa
      sectionHover: `#c0c6ca`, //f7f7f7 
      sectionIcon: `#b3b9bf`,
      sectionIconHover: `#62727b`,
      moduleAdd: `#e0e0e0`,
      moduleAddInput: `#F5F5F5`,
    },
  },
  fontSize: {
    todo: `18px`,
    todoList: `15px`,
    document: `28px`,
    section: `24px`,
    ruleTitle: `18px`,
    rule: `14px`,
  },
  fontWeight: {
    todo: ``,
    document: ``,
    section: ``,
    ruleTitle: `bold`,
    rule: ``,
  },
  border: {
    light: `#ececec`,
    answer: `#b3b9bf`,
  },
  typography: {
    useNextVariants: true
  },
  textPrimary: {
    color: `#1e3331`,
  },
  textSecondary: {
    color: `#808080`
  },
  form: {
    textAlign: `center`,
  },
  pageTitle: {
    margin: `10px auto 10px auto`,
  },
  image: {
    margin: `20px auto 20px auto`,
  },
  textField: {
    margin: `10px auto 10px auto`,
  },
  button: {
    marginTop: 30,
    position: `relative`,
  },
  customError: {
    color: `red`,
    fontSize: `0.8rem`,
    marginTop: `10px`,
  },
  progress: {
    position: `absolute`,
    color: `#147070`,
  },
};

export declare type Theme = typeof theme;
