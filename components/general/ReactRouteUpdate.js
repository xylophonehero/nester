import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const ReactRouteUpdate = () =>
{
  const router = useRouter()
  const history = useHistory()
  useEffect(() =>
  {
    console.log({router})
    history.replace(router.asPath)
  }, [router, history])

  return null
}

export default ReactRouteUpdate
