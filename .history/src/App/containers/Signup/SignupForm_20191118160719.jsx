import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router-dom";
import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { handleLoginSubmit } from '../login/actions'
import {Link as RouterLink} from 'react-router-dom'

const styles = theme => ({
  header: {
    marginBottom: 30
  },
  subheader: {
    marginBottom: 10
  },
  input: {
    marginBottom: 30
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: "44px 60px",
      minWidth: "500px"
    }
  },
  loginBackground: {
    backgroundImage: `url(${"assets/login-background.jpg"})`,
    backgroundSize: "cover"
  }
});

const renderField = ({
  input,
  label,
  meta: { touched, invalid, error },
  helperText,
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={(touched && error) || helperText}
    {...input}
    {...custom}
  />
);

const validate = values => {
  return {};
};

export const SignupForm = compose(
  withRouter,
  connect(state => ({ loggedIn: state.loggedIn })),
  reduxForm({
    form: "loginForm",
    validate,
    onSubmit: (values, dispatch) => dispatch(handleLoginSubmit())
  }),
  withStyles(styles)
)(({ classes, handleSubmit }) => {
  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              className={classes.header}
              component="h1"
              variant="h4"
              align="left"
            >
              Регистрация
            </Typography>
            <Typography
              className={classes.subheader}
              component="p"
              align="left"
            >
              Уже зарегистрированы? <Link component={RouterLink} to="/login">Войти</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Field
              className={classes.input}
              required
              name="email"
              type="email"
              component={renderField}
              label="Адрес электронной почты"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              className={classes.input}
              required
              name="name"
              type="text"
              component={renderField}
              label="Имя"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              className={classes.input}
              required
              name="surname"
              type="text"
              component={renderField}
              label="Фамилия"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              className={classes.input}
              component={renderField}
              required
              name="password"
              type="password"
              label="Пароль"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} align="right">
            <Button variant="contained" color="primary" type="submit">
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
});
