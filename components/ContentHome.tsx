import React from 'react'
import { EllipsisVertical, Search } from 'lucide-react'

const ContentHome = () => {
  return (
    <div className='flex flex-col p-4 gap-4'>
      <h2 className='text-xl text-gray-500 '>
        Bem vindo de volta <span className='font-semibold text-black'>Kaique Steck</span>
      </h2>
      <h1 className='font-bold text-2xl text-[#cc6237]'>Todos eventos</h1>
      <div className='border-2 rounded-lg border-[#dfe1e4] bg-white p-8 mt-4'>
        <div className="flex items-center justify-end">
          <div className="flex items-center justify-end">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Buscar evento..."
              className="pl-9 pr-4 py-2 border border-gray-300 bg-gray-100 rounded-4xl w-64 focus:outline-none focus:ring-2 focus:ring-[#cc6237]"
            />
          </div>

          {/* Botão */}
          <button className="ml-4 bg-[#cc6237] text-white px-4 py-2 cursor-pointer rounded-4xl hover:bg-[#b5562e]">
            + Inserir Novo
          </button>
        </div>
        </div>
        {/* Tabela */}
        <div className='overflow-x-auto'>
          <table className='min-w-full  mt-4'>
            <thead className='text-[#d8bca9] font-poppins font-medium'>
              <tr>
                <th className='text-left py-3 px-4'>Nome do evento</th>
                <th className='text-left py-3 px-4'>Total de equipe</th>
                <th className='text-left py-3 px-4'>Status</th>
                <th className='text-left py-3 px-4'>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-gray-200 hover:bg-gray-50 text-[#9ca9be] text-sm'>
                <td className='py-3 px-4 '>Clube do Laço Coração Panteneiro </td>
                <td className='py-3 px-4'>10</td>
                <td className="py-3 px-4">
                  <span className="flex items-center gap-2  text-sm px-2 py-1 rounded-full w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#4def00]"></span>
                    Ativo
                  </span>
                </td>
                <td className='py-3 px-4'>09 a 11 de Junho</td>
                <td className='py-3 px-4 text-center'>
                  <EllipsisVertical className='inline-block text-[#cc6237] cursor-pointer' />
                </td>
              </tr>
              <tr className='border-t border-gray-200 hover:bg-gray-50 text-[#9ca9be] text-sm'>
                <td className='py-3 px-4'>Clube do Laço Coração Panteneiro </td>
                <td className='py-3 px-4'>10</td>
                <td className="py-3 px-4">
                  <span className="flex items-center gap-2 text-sm px-2 py-1 rounded-full w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#4def00]"></span>
                    Ativo
                  </span>
                </td>
                 <td className='py-3 px-4'>09 a 11 de Junho</td>
                <td className='py-3 px-4 text-center'>
                  <EllipsisVertical className='inline-block text-[#cc6237] cursor-pointer' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Paginação */}
        <div className='flex justify-end mt-8'>
          <div className='flex gap-2'>
            <p className='px-3 py-1 text-black font-medium'>Anterior</p>
            <button className='px-4 py-2 rounded-4xl border cursor-pointer text-white border-[#cc6237] bg-[#cc6237] hover:bg-[#b5562e]"'>1</button>
            <button className='px-3 py-1 text-black font-medium'>2</button>
            <button className='px-3 py-1 text-black font-medium'>3</button>
            <button className='px-4 py-2 rounded-4xl border cursor-pointer text-white border-[#cc6237] bg-[#cc6237] hover:bg-[#b5562e]"'>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentHome
