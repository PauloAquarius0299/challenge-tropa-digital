import React from 'react'
import { EllipsisVertical, Search } from 'lucide-react'

const ContentHome = () => {
  return (
    <div className='flex flex-col p-2 gap-3'>
      <h2 className='text-lg text-gray-500'>
        Bem vindo de volta <span className='font-semibold text-black'>Kaique Steck</span>
      </h2>
      <h1 className='font-bold text-xl text-[#cc6237]'>Todos eventos</h1>
      
      <div className='border rounded-lg border-[#dfe1e4] bg-white p-4 mt-2'>
        {/* Search and Button - stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-end">
          <div className="relative w-full sm:w-auto">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Buscar evento..."
              className="pl-8 pr-3 py-1.5 border border-gray-300 bg-gray-100 rounded-full w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-[#cc6237] text-sm"
            />
          </div>

          <button className="w-full sm:w-auto bg-[#cc6237] text-white px-3 py-1.5 cursor-pointer rounded-full hover:bg-[#b5562e] text-sm sm:ml-2">
            + Inserir Novo
          </button>
        </div>

        {/* Table - scrollable on mobile */}
        <div className='overflow-x-auto mt-3'>
          <table className='min-w-full'>
            <thead className='text-[#d8bca9] font-medium'>
              <tr>
                <th className='text-left py-2 px-2 text-sm'>Nome do Evento</th>
                <th className='text-left py-2 px-2 text-sm'>Total de Equipes</th>
                <th className='text-left py-2 px-2 text-sm'>Status</th>
                <th className='text-left py-2 px-2 text-sm'>Data</th>
                <th className='text-left py-2 px-2 text-sm'></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((item) => (
                <tr key={item} className='border-t border-gray-200 hover:bg-gray-50 text-[#9ca9be] text-xs'>
                  <td className='py-2 px-2 truncate max-w-[120px]'>Clube do Laço Coração Panteneiro</td>
                  <td className='py-2 px-2'>10</td>
                  <td className="py-2 px-2">
                    <span className="flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-full w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4def00]"></span>
                      Ativo
                    </span>
                  </td>
                  <td className='py-2 px-2 whitespace-nowrap'>09 a 11 Junho</td>
                  <td className='py-2 px-2 text-center'>
                    <EllipsisVertical size={16} className='inline-block text-[#cc6237] cursor-pointer' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center sm:justify-end mt-4'>
          <div className='flex gap-1 items-center'>
            <button className='px-2 py-1 text-black font-medium text-sm'>Anterior</button>
            <button className='px-2.5 py-1 rounded-full border cursor-pointer text-white border-[#cc6237] bg-[#cc6237] hover:bg-[#b5562e] text-sm'>1</button>
            <button className='px-2 py-1 text-black font-medium text-sm'>2</button>
            <button className='px-2 py-1 text-black font-medium text-sm'>3</button>
            <button className='px-2.5 py-1 rounded-full border cursor-pointer text-white border-[#cc6237] bg-[#cc6237] hover:bg-[#b5562e] text-sm'>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentHome