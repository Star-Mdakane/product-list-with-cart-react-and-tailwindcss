const ActiveButton = ({ onAdd, onDelete, uniqueItem }) => {

    return (
        <button id='active' type="button" className='w-40 h-11 p-3 rounded-full absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-1/2 flex items-center justify-between bg-[#C73B0F] cursor-pointer'>
            <button type='button' onClick={onDelete} aria-label='Decrease value' className='w-5 h-5 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white group'>
                <svg className='group-hover:stroke-[#C73B0F]' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z" /></svg>
            </button>
            <input type="text" aria-live='polite' placeholder='0' value={uniqueItem} className='w-5 text-[14px] bg-[#C73B0F] text-white font-semibold text-center' />
            <button type='button' onClick={onAdd} aria-label='Increase value' className='w-5 h-5 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white group' >
                <svg className='group-hover:stroke-[#C73B0F]' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg>
            </button>
        </button>
    )
}

export default ActiveButton