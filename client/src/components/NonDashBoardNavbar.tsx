"use client"

import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import { Bell, BookOpen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NonDashBoardNavbar = () => {

    const {user}=useUser()
    const userRole=user?.publicMetadata?.userType as "student" | "teacher"

  return (
    <nav className="nondashboard-navbar">
        <div className="nondashboard-navbar__container">
            <div className="nondashboard-navbar__search">
                <Link href="/" className="nondashboard-navbar__brand">Rajat</Link>
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <Link href="/search" scroll={false} className="nondashboard-navbar__search-input">
                            <span className="hidden sm:inline">Search courses</span>
                            <span className="sm:hidden">Search</span>
                        </Link>
                        <BookOpen className="nondashboard-navbar__search-icon" size={18}/>
                    </div>
                </div>
            </div>
            <div className="nondashboard-navbar__actions">
                <button className="nondashboard-navbar__notification-button">
                    <span className="nondashboard-navbar__notification-indicator"></span>
                    <Bell className="nondashboard-navbar__notification-icon" />
                </button>
                <SignedIn>
                    <UserButton
                      appearance={{
                        //baseTheme: dark,
                        elements:{
                            userButtonOuterIdentifier:"text-customgreys-dirtyGrey",
                            userButtonBox:"scale-90 sm:scale-100"
                        }
                      }}
                      showName={true}
                      userProfileMode='navigation'
                      userProfileUrl={
                        userRole==="teacher" ? "/teacher/profile" : "/user/profile"
                      }
                    />
                </SignedIn>
                <SignedOut >
                    <Link href="signin" scroll={false} className="nondashboard-navbar__auth-button--login" > Log in </Link>
                    <Link href="signup" scroll={false} className="nondashboard-navbar__auth-button--signup" > Sign Up </Link>
                </SignedOut>
            </div>
        </div>
    </nav>
  )
}

export default NonDashBoardNavbar