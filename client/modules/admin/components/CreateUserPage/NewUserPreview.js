import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import s from './styles';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { createGetGravatarLink } from '@core/utils/gravatar';

const getAvatarLink = createGetGravatarLink({ d: 'mp' });

const NewUserPreview = ({
  avatar,
  fullName,
  userPreview: { email },
  classes,
}) => (
  <Card elevation={10} className={classes.card}>
    <CardHeader
      avatar={
        <Avatar src={avatar} aria-label="Recipe" className={classes.avatar} />
      }
      title={fullName}
      subheader={email}
    />
    <CardContent />
  </Card>
);

const mapStateToProps = ({ admin: { users } }) => ({
  userPreview: users.newUserPreview,
});

export default compose(
  withStyles(s),
  connect(mapStateToProps),
  withProps(({ userPreview: { email, firstName, lastName } }) => ({
    avatar: getAvatarLink(email),
    fullName: [firstName, lastName].join(' '),
  })),
)(NewUserPreview);
