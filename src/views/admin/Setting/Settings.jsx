import React from 'react'
import Setting from '../../../components/Setting/Setting'

export default function Settings() {
    return (
        <div className='sm:container grid lg:px-6 sm:px-4 px-2 mx-auto'>
            <h1 className="my-6 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Settings
            </h1>
            <Setting />
        </div>
    )
}
