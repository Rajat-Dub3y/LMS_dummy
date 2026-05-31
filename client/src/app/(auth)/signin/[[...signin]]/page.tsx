import type { Metadata } from "next";
import SignInComponent from '@/components/SignIn'
import React from 'react'

export const metadata: Metadata = {
  title: "Sign In",
};

const page = () => {
  return (
    <div>
        <SignInComponent />
    </div>
  )
}

export default page