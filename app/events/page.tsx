import React from 'react'
import LeftSideBar from '../../components/layouts/LeftSideBar'
import ContentHome from '@/components/ContentHome'

const Events = () => {
  return (
    <div className="flex min-h-screen relative ">
      <LeftSideBar />
      <main className="flex-1 p-5 ">
        <ContentHome />
      </main>
    </div>
  )
}

export default Events