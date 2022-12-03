import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    const [isAtive, setIsActive] = useState(false);

    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-black h-[80px] relative">
                <div className="container px-4 mx-auto flex items-center justify-between">
                    <Link to='/' className="w-max relative flex items-center gap-2">
                        <img src="./logo192.png" className="h-8" alt="logo-images" /> <h1 className="text-white">Logo</h1>
                    </Link>
                    <div
                        className=
                        "lg:flex flex-grow items-center"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li onClick={() => setIsActive(!isAtive)} className="cursor-pointer handleOpenLists px-3 py-2 flex items-center text-md font-bold text-white hover:opacity-75">
                                <span className="ml-2">Vehicles</span>
                            </li>
                            <li className="cursor-pointer px-3 py-2 flex items-center text-md handleOpenLists font-bold text-white hover:opacity-75">
                                <span className="ml-2">Buy</span>
                            </li>
                            <li className="cursor-pointer px-3 py-2 flex items-center text-md handleOpenLists font-bold text-white hover:opacity-75">
                                <span className="ml-2">Service</span>
                            </li>
                            <li className="cursor-pointer px-3 py-2 flex items-center text-md handleOpenLists font-bold text-white hover:opacity-75">
                                <span className="ml-2">Experience</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={!isAtive ? 'hidden' : 'block'}>
                    <div className="absolute top-[80px] flex left-[20%] h-max bg-[#3C3C3C] z-50 w-[80%] shadow-lg">
                        <div className="w-[25%] h-full border-black border-l-0 border-t-0 border-b-0 border-r-1">
                            <ul>
                                <li className="cursor-pointer bg-[#CE0E2D] py-[18px] px-[30px] font-bold text-white text-normal border border-black border-l-0 border-t-0 border-r-0 border-b-1">SUVs</li>
                                <li className="cursor-pointer py-[18px] px-[30px] font-bold text-white text-normal border border-black border-l-0 border-t-0 border-b-1">eSUVs</li>
                                <li className="cursor-pointer py-[18px] px-[30px] font-bold text-white text-normal border border-black border-l-0 border-t-0 border-b-1">Pik-Ups</li>
                                <li className="cursor-pointer py-[18px] px-[30px] font-bold text-white text-normal border border-black border-l-0 border-t-0 border-b-1">Small Commercial</li>
                                <li className="cursor-pointer py-[18px] px-[30px] font-bold text-white text-normal border border-black border-l-0 border-t-0 border-b-1">Electric</li>
                                <li className="cursor-pointer py-[18px] px-[30px] font-bold text-white text-normal border border-black border-l-0 border-t-0 border-b-1">Trucks</li>
                                <li className="cursor-pointer py-[18px] px-[30px] font-bold text-white text-normal border border-black border-l-0 border-t-0 border-b-1">Buses</li>
                            </ul>
                        </div>
                        <div className="w-[75%] h-full py-[20px]">
                            <ul id="dropDownMenu" className="flex flex-wrap">
                                <Link to='/dark' className="list flex items-center flex-col gap-[5px] px-[10px] mb-[30px] text-white">
                                    <img className="h-[91px]" src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/scorpio-n/291x158.png?rev=b0b8dc01ed664f84a651310483ebb1c0&extension=webp" alt="img" />
                                    <label>Scorpio-N</label>
                                </Link>
                                <Link className="list flex items-center flex-col gap-[5px] px-[10px] mb-[30px] text-white">
                                    <img className="h-[91px]" src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/xuv700/235x127.png?rev=7919632fc91b4a7995f08e280305ff96&extension=webp" alt="img" />
                                    <label>XUV700</label>
                                </Link>
                                <Link to='/' className="list flex items-center flex-col gap-[5px] px-[10px] mb-[30px] text-white">
                                    <img className="h-[91px]" src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/thar/235x127_new-image.png?rev=aeaa70c00bab406bb929a6ebbfebf528&extension=webp" alt="img" />
                                    <label>Thar</label>
                                </Link>
                                <Link className="list flex items-center flex-col gap-[5px] px-[10px] mb-[30px] text-white">
                                    <img className="h-[91px]" src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/xuv300-optimizedimages/xuv300-navigation/235x127.png?rev=1c3ea6ac8fd1422692a6eebe9d5a5d30&extension=webp" alt="img" />
                                    <label>SUV-300</label>
                                </Link>
                                <Link className="list flex items-center flex-col gap-[5px] px-[10px] mb-[30px] text-white">
                                    <img className="h-[91px]" src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/marazzo/marazzo-235x127.png?rev=4ca635101eb5477aadbd3de6cb4cfaa7&extension=webp" alt="img" />
                                    <label>Scorpio-N</label>
                                </Link>
                                <Link className="list flex items-center flex-col gap-[5px] px-[10px] mb-[30px] text-white">
                                    <img className="h-[91px]" src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/bolero-neo/bolero-neo_amc_navigation-front_desktop_235x127px.png?rev=16faa0fffc164f7e82c3ec8c45203010&extension=webp" alt="img" />
                                    <label>Marazzo</label>
                                </Link>
                                <Link className="list flex items-center flex-col gap-[5px] px-[10px] mb-[30px] text-white">
                                    <img className="h-[91px]" src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/bolero/bolero_235x127feb.png?rev=cd3d143fd39b42959a1f577ff37edfa6&extension=webp" alt="img" />
                                    <label>Bolero Neo</label>
                                </Link>
                                <Link className="list flex items-center flex-col gap-[5px] px-[10px] mb-[30px] text-white">
                                    <img className="h-[91px]" src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/scorpio/classic/235x127-1.png?rev=8c877d9a37e14f4296478fc95a6f69af&extension=webp" alt="img" />
                                    <label>Bolero</label>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}