import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// import { ModeToggle } from '@/components/ui/button'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ModeToggle'

export default function Nav() {
  return (
  

   
   <nav className=' w-full justify-around flex gap-2 mt-4 '>
        
             
             
        
<Image src="/logo3.jpg" alt="Prisma logo" width={100} height={100} />
       
       
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/services'>Services</Link>
          <Link href='/contact'>Contact</Link>
        
        
        <Button   variant={"secondary"} size="icon" className='w-800 h-200'>Click me</Button>
        <ModeToggle />
    </nav>
   
    
    
  )
}
