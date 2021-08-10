import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const ReactRouteUpdate = () =>
{
  const { asPath } = useRouter()
  const history = useHistory()
  useEffect(() =>
  {
    history.push(asPath)
  }, [asPath, history])

  return null
}

export default ReactRouteUpdate
