import BackButton from '@/shared/components/buttons/BackButton.component'
import React from 'react'
import Shopping from './components/Shopping.component'
import Configuration from './components/Configuration.component'
import Logout from './components/Logout.component'
import ProtectedRoute from '@/shared/helpers/ProtectedRoute'

export default function Account() {
    return (
        <ProtectedRoute title="Debes ingresar o crear una cuenta para ver 'Mi cuenta'">
            <div className='flex flex-col h-screen'>
                <BackButton tab='Cuenta'/>
                <div className='flex flex-col flex-1 overflow-y-auto bg-white'>
                    <Shopping />
                    <Configuration />
                    <Logout />
                </div>
            </div>
        </ProtectedRoute>
    )
}
