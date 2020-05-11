import React from 'react';

import withAuth from '../hoc/next/withAuth';
import Layout from '../containers/LayoutContainer';

import { userSelector } from '../redux/auth/selectors';
import { Store } from '../redux/store';
import { User } from '../types';
import withConnect from '../hoc/next/withConnect';
import { Typography } from '@material-ui/core';

interface Props {
  user: User;
}

class Me extends React.Component<Props> {
  static mapStateToProps(state: Store) {
    const user = userSelector(state);

    return { user };
  }

  render() {
    const { user } = this.props;

    return (
      <Layout title={{ text: 'Me', href: '' }}>
        <Typography variant="h1">News Feed</Typography>

        {user.email}
      </Layout>
    );
  }
}

export default withAuth(withConnect(Me));
