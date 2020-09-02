import React from 'react';
import { authPageWrapper } from '../components/authPageWrapper';
import { withAuth } from '../HOCs';
import { AuthActions, AuthState } from '../Api';
import { Loader } from '@frontegg/react-core';


const stateMapper = ({ routes }: AuthState) => ({ routes });
const actionsMapper = ({ logout }: AuthActions) => ({ logout });

type Props = ReturnType<typeof stateMapper> & ReturnType<typeof actionsMapper>

class LogoutComponent extends React.Component<Props> {
  componentDidMount() {
    const { logout, routes: { loginUrl } } = this.props;
    setTimeout(() => {
      logout(() => window.location.href = loginUrl);
    }, 2000);
  }

  render() {
    return <div className='fe-login-component'>
      <Loader center/>
    </div>;
  }
}

export const Logout = withAuth(LogoutComponent, stateMapper, actionsMapper);

export const LogoutPage = authPageWrapper(Logout);