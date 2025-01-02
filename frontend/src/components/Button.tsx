interface ButtonProps {
    tag: string
    className: string
}

export const Button = ({ tag, className }: ButtonProps) => {
    return(
        <div className={`text-white flex items-center justify-center cursor-pointer hover:bg-blue-900 hover:duration-200 rounded-[12px] ${className} border-[1px] border-[#C4BBF4] bg-blue-800 w-[80px] md:h-[30px] border-[0.1px solid #333]`}>
            <button type="submit" className="md:text-[0.6rem] p-[8px] bg-transparent text-[0.8rem]">{tag}</button>
        </div>
    )
}