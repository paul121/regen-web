import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Grid, { GridDirection } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserAvatar from './UserAvatar';
import { getFontSize } from '../../theme/sizing';

export interface User {
  name: string;
  place?: string;
  imgSrc?: string;
  description?: string;
  link?: string;
}

interface UserInfoProps {
  user: User;
  size?: string;
  direction?: GridDirection;
  border?: boolean;
  icon?: any;
}

interface StyleProps {
  description?: string;
  direction?: GridDirection;
  size: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  text: props => ({
    marginLeft: theme.spacing(2.4),
    textAlign: props.direction === 'column' ? 'center' : 'left',
  }),
  name: props => ({
    [theme.breakpoints.up('sm')]: {
      fontSize: getFontSize(props.size).sm,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: getFontSize(props.size).xs,
    },
    fontFamily: props.size === 'xl' ? theme.typography.h1.fontFamily : theme.typography.fontFamily,
    fontWeight: props.size === 'xl' ? 900 : 'bold',
  }),
  link: {
    '&:link, &:visited, &:hover, &:active': {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText,
    },
  },
  description: {
    [theme.breakpoints.up('sm')]: {
      fontSize: getFontSize('medium').sm,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: getFontSize('medium').xs,
    },
    color: theme.palette.info.dark,
  },
  place: props => ({
    color: theme.palette.info.dark,
    [theme.breakpoints.up('sm')]: {
      fontSize: getFontSize('small').sm,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: getFontSize('small').xs,
    },
    paddingBottom: theme.spacing(2),
  }),
}));

export default function UserInfo({
  user,
  size = 'big',
  direction,
  border = true,
  icon,
}: UserInfoProps): JSX.Element {
  const classes = useStyles({ description: user.description, direction, size });
  const name = <Typography className={classes.name}>{user.name}</Typography>;

  return (
    <Grid container direction={direction} wrap="nowrap">
      <Grid item>
        <UserAvatar
          alt={user.name}
          src={user.imgSrc}
          href={user.link}
          size={size}
          border={border}
          icon={icon}
        />
      </Grid>
      <Grid item className={classes.text}>
        {user.link ? (
          <a className={classes.link} href={user.link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        ) : (
          name
        )}
        {user.place && <Typography className={classes.place}>{user.place}</Typography>}
        {user.description && <Typography className={classes.description}>{user.description}</Typography>}
      </Grid>
    </Grid>
  );
}
