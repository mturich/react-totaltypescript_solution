import React from 'react'

interface Props {
   className: string
}

export const Button = (props: Props) => {
   return <button title='1' className={props.className}></button>
}

const Parent = () => {
   return (
      <>
         {/* @ts-expect-error */}
         <Button></Button>

         <Button className='my-class'></Button>
      </>
   )
}
