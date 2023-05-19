import React from 'react'
import { allFilters } from './constants'

function NavItems({ itemName }) {
    return (
        <div>
            <span>{itemName}</span>
        </div>
    )
}

export default function NavigationComponent() {
    return (
        <div>
            <div>

                {
                    allFilters.map((each) => {
                        return <NavItems itemName={each} />
                    })
                }
            </div>
            <div>

            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
