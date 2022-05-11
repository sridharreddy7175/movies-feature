import React from 'react'

function Movieslist(props) {

  // console.log("props", props)
  function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  }


  return (
    <section>
      <ul
        className='styled w-100 pl-0'
        data-testid='moviesList'
      >
        {
          props?.datas?.length > 0 ?

            props.datas.sort((a, b) => a.timeM > b.timeM ? 1 : -1).map((d, index) => {

              return (
                <li
                  className='flex slide-up-fade-in justify-content-between'
                  style={{ borderBottom: '2px solid var(--primary-color)' }}
                  key={index}
                >
                  <div className='layout-column w-40'>
                    {/* use this header for movie name */}
                    {d.name}
                    <h3 className='my-3'>{d.rating}</h3>
                    {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}

                    <p className='my-0'></p>
                  </div>
                  <div className='layout-row my-auto mr-20'>
                    {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                    <p className='justify-content-end'>{time_convert(parseInt(d.duration))} Hrs</p>
                  </div>
                </li>
              )

            })

            : <div data-testid='noResult'>
              <h3 className='text-center'>No Results Found</h3>
            </div>
        }


      </ul>
    </section>
  )
}

export default Movieslist;
