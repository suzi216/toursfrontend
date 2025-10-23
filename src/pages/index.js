// import { useRouter } from 'next/router'
// import { useSelector } from 'react-redux'

import {  SUPER_ADMIN, USER} from '../constants/index.js'
import DynamicLoader from '../components/hoc/DynamicLoader.js'
import dynamic from 'next/dynamic'

const AdminHome = dynamic(() => import('../components/admin-home'), {
    loading: DynamicLoader
  })
  const UserHome = dynamic(() => import('../components/user-home'), {
    loading: DynamicLoader
  })
export default function Home() {
    // const router = useRouter()
    // const role = useSelector(roleSelector)
    const role="SUPER_ADMIN"

    if(role==="SUPER_ADMIN"){
        return <AdminHome />
    }
    if(role==="USER"){
        return <UserHome />
    }
    

    return <h1 className='text-blue-500'>Hello</h1>;
  }
  