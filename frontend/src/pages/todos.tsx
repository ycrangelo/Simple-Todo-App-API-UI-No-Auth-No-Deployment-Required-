import React from 'react'
import { useState } from 'react'
import { CardComponent } from '../components/Card'
import { ModalComponent } from '../components/modal'
function Todos() {

  return (
    <>
    <div className='mb-5 flex justify-end'>
     {/* //imports components */}
        <ModalComponent />
    </div>
    {/* //imports components */}
      <CardComponent />
    </>
  )
};

export default Todos
