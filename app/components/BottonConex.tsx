import React from 'react'
import { Button } from '@/components/ui/button'


export default function BottonConex() {
  return (
    <div className="flex flex-col space-y-4">
        <Button onClick={()=>('github')}  variant="secondary">Sign with GitHub</Button>

        <Button onClick={()=>('google')}  variant="secondary">Sign with Google</Button>

        <Button onClick={()=>{'facebook'}} variant="secondary">Sign with Facebook</Button>

        console.log(&apos;github&apos;)
    </div>
     
  
  )
}
