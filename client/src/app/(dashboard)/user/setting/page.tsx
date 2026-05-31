import type { Metadata } from "next";
import SharedNotificationSettings from '@/components/SharedNotificationSettings'
import React from 'react'

export const metadata: Metadata = {
  title: "User Settings",
};

const UserSettings = () => {
  return (
    <div className='w-3/5'>
        <SharedNotificationSettings title="User Settings" subtitle='Mange your notification settings' />
    </div>
  )
}

export default UserSettings