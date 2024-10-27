"use client";
import Image from "next/image";
import { ModeToggle } from "./components/ModeToggle";
import {Typewriter, Cursor } from 'react-simple-typewriter';
import BottonConex from './components/BottonConex';


export default function Home() {
  return (
    <>
      <section className=" w-full h-screen flex items-center justify-center flex-col gap-2">
      <ModeToggle />
      <h1 className="">Prisma SaaS page</h1>
      <Image src="/logo3.jpg" alt="Prisma logo" width={200} height={200} />
      <h1 className="text-4xl md-text-6px  font-black mb-2 text-center uppercase flex">
      <Typewriter words={['Hello', 'Carmen', 'Prisma', 'SaaS']} typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}       loop={0} cursor cursorStyle='-'/>
      <span><Cursor /></span>
      </h1>
      <h2 className="text-3xl md-text-px  font-black mb-2 text-center uppercase flex">
        Autre titre
      </h2>

      <BottonConex />
     
      </section>
      

    </>
  )
}

    //i shadcdn for bottom border
    //and  i i them  shadcdn for Next js  npm install next them with dark them
    //and  created the file theme-provider in the component 
    // and copy the code from next theme-provider and pasted it in the file 
    // and imported it in the file theme-provider in the Layout file
    //In Layout I take children in 
    //and I return the ThemeProvider with the children in it
    //and I import the themeProvider in the file layout
    //I install Next Auth with npm install next-auth
    //for using prisma it whit npm install npm install prisma --save-dev and npx prisma init --datasource-provider sqlite I replace sqlite by MySQL
    //and I change the schema.prisma file and I run npx prisma migrate dev --name init --preview-feature
    //and I run npx prisma studio and I run npx prisma generate
    // I installing Next Auth  adapter with npm install @prisma/client @next-auth/prisma-adapter
    //  I fund the scheme adapter file  and i paste it in schemaprisma and i pasted it in the file adapter.ts
    //prisma migrate dev --name init 
    //prisma generate
    //Icreated the file db.ts in the lib folder and I pasted the code in it from prisma doc help article->
    //Best practices for installing Prisma and pated the code db.ts in lib ->db.ts
    //created the file AuthOptions.ts in the lib folder and I pasted the code in it and I imported it in the file layout

    //Now I have to create a new file in the pages/api/auth folder called [...nextauth].ts. This file will handle the authentication logic for our application.
    //I import the Prisma adapter and the Prisma client in the file
    // Authentification and prisma client and created route.ts in the file auth
    //prisma->ORM->more->helpe->helparticle-Beste pratiques for instaling prisma->file db.tscopy and go to lib
    //and I create a file db.ts  in creeted the file db.ts copy and past and I paste the code in it
    //and created an other file in lib "sessionWarpper.ts" and I pasted the code in it
    //and I import the file in the layout file  put provider in this component
    //I created a file in the lib folder called AuthOptions.ts and I pasted the code in it and imported in route.ts
//I created folder in app name api and in this folder I created a file name auth and in
// this file I created a file name [...nextauth].ts an in  I created the file route.ts and I pasted the code in it