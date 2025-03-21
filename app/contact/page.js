import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
        <Script>
            {`alert("Welcome to Contact Page");`}
        </Script>
      I am Contact
    </div>
  )
}

export default page
