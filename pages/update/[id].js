import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import AddEmp from '@/components/AddEmp';
export default function Up() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <>
        <AddEmp data={id} />
    </>
  )
}

