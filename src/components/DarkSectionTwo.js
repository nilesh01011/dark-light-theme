import React from 'react'

function DarkSectionTwo() {
    return (
        <>
            <div className={`flex justify-between items-center px-8 py-12`}>
                <div className='w-[52%]'>
                    <img src='https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/test-z101/test-z101--features-and-specs-main-1280x1040.jpg?rev=e2193a3cb44e4751b221ada8169cffc5&extension=webp' alt='thar-images' />
                </div>
                <div className='w-[42%]'>
                    <>
                        <h2 className='text-3xl font-bold mb-[30px] text-[#6c6b6d]'>
                            The Big Daddy of All SUVs
                        </h2>
                        <strong className='text-white text-[22px] mb-2 font-semibold'>Commanding outside. Intelligent inside.</strong>
                        <p className='text-white leading-[30px] text-lg mt-1 font-thin'>
                            The All-New Scorpio-N makes every drive an experience with its unmissable design, thrilling performance, advanced technology, intuitive features, superior comfort & safety. It truly is the Big Daddy of SUVs.
                        </p>
                    </>
                </div>
            </div>
        </>
    )
}

export default DarkSectionTwo