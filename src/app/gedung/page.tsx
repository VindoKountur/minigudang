import Image from 'next/image'
import axios from 'axios'

import TableGedung from '../../components/Tablegedung'

import { TGedung } from '../../lib/types'
import { LINKAPI } from '../../lib/const'


const getData = async () => {
  const res : { data : TGedung[] } = await axios.get(LINKAPI)
  res.data.sort((a, b) => a.id - b.id);
  return res.data;
}

export default async function Home() {
  const data : TGedung[] = await getData()
  return (
    <main className="p-4 overflow-auto w-full bg-slate-200">
      <h1 className='text-lg font-bold'>Daftar Gedung</h1>
      <TableGedung dataGedung={data} />
    </main>
  )
}
