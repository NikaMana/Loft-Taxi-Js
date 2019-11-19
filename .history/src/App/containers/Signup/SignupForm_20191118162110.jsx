import React from "react";
import { compose } from "redux";
import {Link as RouterLink} from 'react-router-dom'

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
