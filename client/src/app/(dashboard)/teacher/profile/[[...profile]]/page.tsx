import type { Metadata } from "next";
import React from 'react'
import Header from '@/components/Header'
import { UserProfile } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export const metadata: Metadata = {
  title: "Teacher Profile",
};

const TeacherProfilePage = () => {
  return (
    <>
      <Header title="Profile" subtitle="Veiw your profile" />
      <UserProfile
        path="/teacher/profile"
        routing="path"
        appearance={{
            baseTheme:dark,
            elements:{
                scrollBox:"bg-customgreys-darkGrey",
                navbar:{
                    "& > div:nth-child(1)":{
                        background:"none",
                    }
                }
            }
        }}
      />
    </>
  )
}

export default TeacherProfilePage