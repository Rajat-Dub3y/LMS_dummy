import type { Metadata } from "next";
import SharedNotificationSettings from '@/components/SharedNotificationSettings'
import React from 'react'

export const metadata: Metadata = {
  title: "Teacher Settings",
};

const TeacherSettings = () => {
  return (
    <div className='w-3/5'>
        <SharedNotificationSettings title="Teacher Settings" subtitle='Mange your notification settings' />
    </div>
  )
}

export default TeacherSettings