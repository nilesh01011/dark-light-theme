import React from 'react'

function SectionTimeless({ theme, cars }) {
    let images;

    if (cars === 'thar') {
        images = "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/key-highlights-features/thar/image_01.png?rev=e7f35386fd714d09839be1809be196ac&extension=webp"
    } else {
        images = "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/hello-test-z101/scorpio_840x560.png?rev=0e100cf22a9648b487ec37c2461a7c70&extension=webp"
    }
    return (
        <>
            <div className={`bg-${theme} flex ${cars === 'thar' ? 'justify-center' : 'justify-between'} items-center px-8 py-12`}>
                <div className={cars === 'thar' ? 'w-[35%] pl-[5%]' : 'w-[42%]'}>
                    {cars === 'thar' ?
                        <>
                            <h2 className='text-2xl font-bold mb-[30px]'>
                                Timeless Silhouette. Redefined.
                            </h2>
                            <p className='text-[#313131] leading-[30px] text-lg'>
                                A modern take on an iconic design, the All-New Thar, with its wide stance and iconic lines, stands out wherever it goes.
                            </p>
                        </>
                        :
                        <>
                            <h2 className='text-3xl font-bold mb-[30px] text-[#6c6b6d]'>
                                The Big Daddy of All SUVs
                            </h2>
                            <strong className='text-white text-[22px] mb-2 font-semibold'>Commanding outside. Intelligent inside.</strong>
                            <p className='text-white leading-[30px] text-lg mt-1 font-thin'>
                                The All-New Scorpio-N makes every drive an experience with its unmissable design, thrilling performance, advanced technology, intuitive features, superior comfort & safety. It truly is the Big Daddy of SUVs.
                            </p>
                        </>
                    }
                </div>
                <div className='w-[52%]'>
                    <img src={images} alt='thar-images' />
                </div>
            </div>
        </>
    )
}

export default SectionTimeless