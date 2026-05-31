import type { Metadata } from "next";
import SignUpComponent from '@/components/SignUp'
import React from 'react'

export const metadata: Metadata = {
  title: "Sign Up",
};

const page = () => {
  return (
    <div>
        <SignUpComponent />
    </div>
  )
}

export default page