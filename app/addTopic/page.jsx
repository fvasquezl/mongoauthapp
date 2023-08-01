import React from 'react'

const page = () => {
    return (
        <form className='flex flex-col gap-3'>
            <input
                className='border border-slate-500 px-8 py-2'
                type="text"
                placeholder='Topic title' />

            <input
                className='border border-slate-500 px-8 py-2'
                type="text"
                placeholder='Topic description' />

            <button
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Add Topic
            </button>
        </form>
    )
}

export default page
