import Link from 'next/link';
import {useRouter} from "next/router"
import ReactRouteUpdate from '@/components/general/ReactRouteUpdate';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link as ReactLink } from 'react-router-dom';
import ReactButton from "@/components/general/ReactButton"
import { Layout } from '@/components/layout';

export default function App()
{
  const router = useRouter()

  return (
    <div suppressHydrationWarning>
        {typeof window === 'undefined' ? null :
          <Router>
            <Layout>
              <div>
                <Switch>
                  <Route path="/about">
                    <h2>About</h2>
                    <p><ReactLink to="/test">To test page - React Link</ReactLink></p>
                    <p><Link href="/">To home page - Next Link</Link></p>
                    <p><ReactButton page="test" /></p>
                    <p><button onClick={() => router.push("/")}>To home page - Next Router</button></p>
                  </Route>
                  <Route path="/test">
                    <h2>Test</h2>
                    <p><ReactLink to="/about">To about page - React Link</ReactLink></p>
                    <p><Link href="/">To home page - Next Link</Link></p>
                    <p><ReactButton page="about" /></p>
                    <p><button onClick={() => router.push("/")}>To home page - Next Router</button></p>
                  </Route>
                </Switch>
              </div>
            </Layout>
          </Router>
        }
      </div>
  );
}