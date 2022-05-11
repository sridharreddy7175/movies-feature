import React, { useState } from 'react'

function Movieform(props) {


  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={e => e.preventDefault()}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={props.name}
              onChange={props.ChangeName}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input
              type='number'
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={props.rating}
              onChange={props.ChangeRating}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input
              type='text'
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              onChange={props.ChangeDuration}
              value={props.duration}

            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={() => props.add()}
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Movieform
