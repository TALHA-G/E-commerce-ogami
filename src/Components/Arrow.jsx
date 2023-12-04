import React from 'react'
import Link from 'next/link'

const arrow = () => {
  return (
    <>
    {/* Side arrow */}
      <Link href={'#'}><div class="arrow"><i class="fa-solid fa-arrow-up"></i></div></Link>
    </>
  )
}

export default arrow