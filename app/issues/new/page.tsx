'use client'
import { TextField, TextArea, Button } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div className='max-w-xl space-y-4 p-6'>
        <TextField.Root>
        <TextField.Input placeholder="Enter title" />
        </TextField.Root>
        
        <SimpleMDE placeholder="Enter comment…" />

        <Button>Add Issue</Button>

    </div>
  )
    
}

export default NewIssue