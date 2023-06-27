interface TextAreaProps {
  label: string
  placeholder?: string
}
export function TextArea({ label, placeholder }: TextAreaProps) {
  return (
    <div className="relative w-full">
      <textarea
        placeholder={placeholder}
        className={`peer
        w-full resize-none rounded-md border-2 bg-white p-4 pt-6 font-light outline-none transition  disabled:cursor-not-allowed disabled:opacity-70 
        `}
      />
      <label
        className={`text-md absolute -top-3 left-1 z-10 origin-[0] -translate-y-3 transform
        font-bold
        duration-150
        peer-placeholder-shown:translate-y-3
        peer-placeholder-shown:scale-75
        peer-focus:-translate-y-3
        peer-focus:scale-100
        
       `}
        htmlFor=""
      >
        {label}
      </label>
    </div>
  )
}
