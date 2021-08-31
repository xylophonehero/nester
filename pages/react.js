import Link from 'next/link';
import {useRouter} from "next/router"
import ReactRouteUpdate from '@/components/general/ReactRouteUpdate';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App()
{
  const router = useRouter()
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null :
        <Router>
          <ReactRouteUpdate />
          <div>
            <Switch>
              <Route path="/about">
                <h2>About</h2>
                <Link href="/">home</Link>
                <button onClick={() => router.push("/")}>Home</button>
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