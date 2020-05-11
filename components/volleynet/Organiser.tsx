import React from 'react';

import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles';

import { Tournament } from '../../types';

const styles = (theme: Theme) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  tournament: Tournament;
}

function Organiser({ tournament }: Props) {
  return <div>{tournament.organiser}</div>;
}

export default withStyles(styles)(Organiser);
