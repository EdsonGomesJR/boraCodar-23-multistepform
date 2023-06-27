import { ChevronRight } from 'lucide-react'
export function Heading() {
  return (
    <div className="flex  items-center justify-between self-stretch">
      {/* STEP 1 */}
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center  justify-center gap-1 rounded-[50px] bg-[#633bbc] px-4 py-4 font-bold text-white">
          1
        </div>
        <p className="font-bold2111w">Contato</p>
      </div>
      <ChevronRight />
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center gap-1 rounded-[50px] bg-[#633bbc]  px-4 py-4 text-white">
          2
        </div>
        <p className="">Empresa</p>
      </div>
      <ChevronRight />
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center gap-1 rounded-[50px] bg-[#633bbc]  px-4 py-4 text-white">
          3
        </div>
        <p>Projeto</p>
      </div>
    </div>
  )
}
