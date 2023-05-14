import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'

import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import HeaderAdmin from '../components/HeaderAdmin';

export default function Authenticated({ children }: { children: React.ReactNode }) {

  return (
    <React.Fragment>
      <Sidebar />
      <main className="ml-[var(--sidebar-width)] md:flex-1 bg-gray-50  text-black ">
        <div className="relative">

          <ConfirmDialog />
          <section className="py-8 px-4 min-h-screen">
            {children}
          </section>
        </div>
      </main>
    </React.Fragment>
  )
}
