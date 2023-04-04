import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategory } from '../store/actions/actionCreator'

export default function Layout() {
    const toggleMenu = (id) => {
        // e.dropUl.style.display = 'block'
        const element = document.getElementById(id)
        const display = element.style.display
        if (display == 'none') {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    }
    const dispatch = useDispatch()
    const categories = useSelector(state => {
        return state.categoryReducer.categories
    })

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])

    return (
        <div>
            <header className="flex h-[65px] px-[56px] justify-between items-center sticky top-0 z-50 bg-white">
                <div className="flex w-[152px] gap-2">
                    <div>
                        <img src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/Sites-ID-Site/-/default/dwf08f0443/images/lacoste.svg" width={104} ></img>
                    </div>
                    <div>
                        <img src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/Sites-ID-Site/-/default/dwa95bf943/images/crocodile.svg" width={38}></img>
                    </div>
                </div>
                <div className="flex gap-7" >
                    <span className="flex">
                        <span className="self-start cursor-pointer" onClick={() => toggleMenu('manUl')}>
                            Men
                            <ul id="manUl" className="absolute bg-slate-50 p-3 rounded-2xl" style={{ display: 'none' }}>
                                {
                                    categories.map(category => {
                                        return (
                                            <li>
                                                {category.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </span>
                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                    </span>
                    <span className="flex">
                        <span className="self-start">
                            Women
                        </span>
                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                    </span>
                    <span className="flex">
                        <span className="self-start">
                            Kid
                        </span>
                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                    </span>
                    <span className="flex">
                        <span className="self-start">
                            Polo
                        </span>
                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                    </span>
                    <span className="flex">
                        <span className="self-start">
                            Collection
                        </span>
                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                    </span>
                    <span className="flex">
                        <span className="self-start">
                            We are Lacoste
                        </span>
                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                    </span>
                    <div>
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </div>
                </div>
                <div className="flex gap-5">
                    <p className="font-bold">EN</p>
                    <span class="material-symbols-outlined">
                        location_on
                    </span>
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                    <span class="material-symbols-outlined">
                        local_mall
                    </span>
                </div>
            </header>
            <Outlet />
            <footer className="h-full">
                <div className="h-[116px] flex justify-around mt-8 border-t-2 border-gray-100">
                    <div className="flex flex-col justify-center items-center" c>
                        <span class="material-symbols-outlined">
                            cycle
                        </span>
                        <span>
                            FREE RETURN
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span class="material-symbols-outlined">
                            credit_card
                        </span>
                        <span>
                            SAFE & SECURE PAYMENT
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span class="material-symbols-outlined">
                            local_shipping
                        </span>
                        <span>
                            FREE DELIVERY (T&C APPLIES)
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span class="material-symbols-outlined">
                            headset_mic
                        </span>
                        <span>
                            CUSTOMER SERVICE
                        </span>
                    </div>
                </div>
                <div className="h-[458px] bg-gray-100 flex justify-around items-center">
                    <div>
                        <div>
                            <strong>
                                Sign up for new stories,
                            </strong>
                            <br />
                            news and personal offers
                        </div>
                    </div>
                    <div>
                        <ul>
                            <span>ABOUT LACOSTE</span>
                            <li>The Lacoste Group</li>
                            <li>Careers</li>
                            <li>Brand protection</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <span>Categories</span>
                            <li>Men's collection</li>
                            <li>Women's collection</li>
                            <li>Women Leather Good</li>
                            <li>Kids collection</li>
                            <li>Polo shop</li>
                            <li>Shoe shop</li>
                            <li>Lacoste Live</li>
                            <li>Lacoste Sport</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <span>HELP & CONTACTS</span>
                            <li>BY EMAIL</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}