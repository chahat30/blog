import React from 'react'
import Header from './components/header/Header'

export default function AdminLayout() {
  return (
    <div className='flex flex-col h-screen lg:flex-row'>
      <Header/>
    </div>
  )
}
