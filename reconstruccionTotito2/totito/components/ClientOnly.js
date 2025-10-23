import { useState, useEffect } from 'react'

const ClientOnly = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
    // console.log('log useEffect after render')
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <div {...delegated}>
      {children}
    </div>
  )
}

export default ClientOnly
