import React from 'react'

import { TGedung } from '../lib/types'

const Dashboard = ({ dataGedung }: { dataGedung: TGedung[] }) => {
  const max = Math.max(...dataGedung.map((v) => v.allowed_capacity))
  const min = Math.min(...dataGedung.map((v) => v.allowed_capacity))
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <div className='bg-white rounded-xl p-3'>
        <p className='text-slate-500'>Jumlah Gedung :</p>
        <p className='font-bold text-2xl text-center'>{dataGedung.length}</p>
      </div>
      <div className='bg-white rounded-xl p-3'>
        <p className='text-slate-500'>Kapasitas Terbesar :</p>
        <p className='font-bold text-2xl text-center'>{max}</p>
      </div>
      <div className='bg-white rounded-xl p-3'>
        <p className='text-slate-500'>Kapasitas Terkecil :</p>
        <p className='font-bold text-2xl text-center'>{min}</p>
      </div>
    </div>
  )
}

export default Dashboard