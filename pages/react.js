import Link from 'next/link';
import {useRouter} from "next/router"
import ReactRouteUpdate from '@/components/general/ReactRouteUpdate';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link as ReactLink } from 'react-router-dom';
import ReactButton from "@/components/general/ReactButton"

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
                <p><ReactLink to="/test">To test page React Link</ReactLink></p>
                <p><Link href="/test">To test page Next Link</Link></p>
                <p><ReactLink to="/">To home page React Link (broken as home does not exist)</ReactLink></p>
                <p><Link href="/">To home page Next Link</Link></p>
                <p><ReactButton /></p>
                <p><button onClick={() => router.push("/test")}>To test page Next Router</button></p>
                <p><button onClick={() => router.push("/")}>To home page Next Router</button></p>
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