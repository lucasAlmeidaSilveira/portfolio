import { Switch, Route } from 'react-router-dom';

import { Portfolio } from '../pages/Portfolio';
import { Login } from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={ Login } />
      <Route path='/portfolio:name' component={ Portfolio } />
    </Switch>
  );
}
