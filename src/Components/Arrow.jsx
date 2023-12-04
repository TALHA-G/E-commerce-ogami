import React from 'react'
import Link from 'next/link'

const arrow = () => {
  return (
    <>
    {/* Side arrow */}
    <div class="arrow"><Link href={'#'}><i class="fa-solid fa-arrow-up"></i></Link></div>
    </>
  )
}

export default arrow