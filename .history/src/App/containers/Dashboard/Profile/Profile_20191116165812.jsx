import React from 'react';

export interface ProfileProps {}
 
export interface ProfileState {}
 
class Profile extends React.Component<ProfileProps, ProfileState> {
  state = { }
  render() { 
    return ( <div>
    <Header />
    <Background>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Профиль
            </Typography>
            <Typography
              align="center"
              gutterBottom
              className={classes.subtitle}
            >
              Способ оплаты
            </Typography>
            <PaymentForm/>
          </Paper>
        </Grid>
      </Grid>
    </Background>
    </div> );
  }
}
 
export default Profile;