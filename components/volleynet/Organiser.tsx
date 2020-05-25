import React from 'react';

import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';

import { Tournament } from '../../types';

const styles = () => createStyles({});

interface Props extends WithStyles<typeof styles> {
  tournament: Tournament;
}

function Organiser({ tournament }: Props) {
  return <div>{tournament.organiser}</div>;
}

export default withStyles(styles)(Organiser);
