import React from 'react'
import Navbar from '@/app/(components)/Navbar'
import Sidebar from './(components)/Sidebar'




const DashboardWrapper = ({children}: { children : React.ReactNode}) => {
  return (
    <div className={' light flex w-full min-h-screen'}>
        <Sidebar />
        <main
            className={'flex flex-col w-full h-full py-7 px-9 bg-red-950 md:pl-24'}>
            <Navbar />
            {children}
        </main>
    </div>
  )
}

export default DashboardWrapper