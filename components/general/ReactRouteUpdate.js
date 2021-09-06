import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

// No longer used but here for reference

const ReactRouteUpdate = () =>
{
  const [inReact, setInReact] = useState(false)
  const { asPath } = useRouter()
  const history = useHistory()

  useEffect(() =>
  { 
    if (inReact) {
      window.location.reload()
    }
    else setInReact(true)
  }, [asPath, history])

  return null
}

export default ReactRouteUpdate
