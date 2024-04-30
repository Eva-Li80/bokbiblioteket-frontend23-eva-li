import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>biblioteket</h1>
      <Link href="/biblioteket/detailsbook">Details</Link>
    </div>
  )
}
