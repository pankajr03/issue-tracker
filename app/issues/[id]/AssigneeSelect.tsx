'use client'
import { User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from '@/app/components/Skeleton'

const AssigneeSelect = () => {
  const {data: users, error, isLoading} = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res => res.data),
    staleTime: 60 * 1000,
    retry: 2
  })

  if (isLoading) return <Skeleton width={"15rem"} />
  
  
  return (
    <Select.Root>
        <Select.Trigger placeholder='Assign...' />
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                {users?.map((user)=> <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item> )}
                
            </Select.Group>
            
        </Select.Content>
        </Select.Root>
  )
}

export default AssigneeSelect