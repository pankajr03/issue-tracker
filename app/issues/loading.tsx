import { Table } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import IssueActions from './IssueActions'

const LoadingIssuesPage = () => {
  const issues = [1,2,3,4]
  return (
    <div className='p-6 max-w-4xl'>
        <IssueActions />
    
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Created Date</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map(issue => (
          <Table.Row key={issue}>
            <Table.RowHeaderCell>
              <Skeleton />
              <div className='block md:hidden'>
              <Skeleton />
                
              </div>
              <div className='block md:hidden'><Skeleton /></div>
            </Table.RowHeaderCell>
            <Table.Cell className='hidden md:table-cell'>
                <Skeleton />
              
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'><Skeleton /></Table.Cell>
          </Table.Row>
        ))}
        

        
      </Table.Body>
    </Table.Root>
    </div>
  )
}

export default LoadingIssuesPage