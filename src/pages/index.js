// import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { roleSelector } from '@/redux/slices/authSlice'
import { useRouter } from "next/router";

import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react'

import { ADMIN, USER } from '../constants/index.js'
import DynamicLoader from '../components/hoc/DynamicLoader.js'
import dynamic from 'next/dynamic'
import { useContext } from "react";
import { AuthContext } from "@/pages/_app";

// DESIGN IDEA 
// https://www.winalist.com/

const AdminHome = dynamic(() => import('./admin.js'), {
  loading: DynamicLoader
})
const UserHome = dynamic(() => import('../components/user.js'), {
  loading: DynamicLoader
})
export default function Home() {
  const router = useRouter()
  const role = useSelector(roleSelector)
  // const role = "USER"
  // const { setRole } = useContext(AuthContext);
  console.log('the role', role)
  
  useEffect(() => {
    if (role === "ADMIN") {
    } else {
    }
  }, [role]);

  if (role === "ADMIN") return <AdminHome />;
  return <UserHome />;
}
