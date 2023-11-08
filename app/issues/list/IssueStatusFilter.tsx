'use client'
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import React from 'react'

const IssueStatusFilter = () => {
  const statuses: {label: string, value?: Status}[] = [
    {label: 'All'},
    {label: 'Open', value: 'OPEN'},
    {label: 'In Progress', value: 'IN_PROGRESS'},
    {label: 'Closed', value: 'CLOSED'},
    
  ]
  return (
    <Select.Root>
        <Select.Trigger placeholder='Filter by Status...' />
        <Select.Content>
            <Select.Group>
                {statuses?.map((status)=> <Select.Item key={status.label} value={status.label}>{status.value}</Select.Item> )}
                
            </Select.Group>
            
        </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter