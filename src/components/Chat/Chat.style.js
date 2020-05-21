import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  form: {
    marginRight: theme.spacing(2),
  },
  sendButton: {
    height: 36,
    alignSelf: 'flex-end',
    color: theme.palette.primary.main,
  },

  message: {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'left',
    maxWidth: '90%',
    wordBreak: 'break-word',
    overflow: 'hidden',
    borderRadius: 4,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  miniTime: {
    color: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '0.2rem',
    fontSize: '0.6rem',
  },
  
  userContainer: {
    textAlign: 'right',
  },
  user: {
    backgroundColor: theme.palette.primary.dark,
  },
  botContainer: {
    textAlign: 'left',
  },
  bot: {
    backgroundColor: theme.palette.primary.light,
  },
  dateContainer: {
    textAlign: 'center',
  },
  date: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
  },
}));
