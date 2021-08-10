import ReactRouteUpdate from '@/components/general/ReactRouteUpdate';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App()
{
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null :
        <Router>
          <ReactRouteUpdate />
          <div>
            <Switch>
              <Route path="/about">
                <h2>About</h2>
              </Route>
              <Route path="/test">
                <h2>Test</h2>
              </Route>
            </Switch>
          </div>
        </Router>
      }
    </div>
  );
}