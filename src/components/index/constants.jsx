import { FaRegUser, FaQuestionCircle } from 'react-icons/fa'
import React from "react";

export const allFilters = ["Supermarket", "Health & Beauty", "Home & Offices", "Homes ", "House", "Appliances", "Phone & Tablets"]
export const allFilters2 = [{ navName: "Supermarket", navIcon: < FaQuestionCircle />, allCategories: ["district", "craft", "misplace", "flush", "campaign", "theoryc", "couple", "mathematics", "accompany", "labor"], handleClick: () => { console.log("SuperMarket") } }, { navName: "Health & Beauty", navIcon: <FaRegUser />, handleClick: () => console.log("Health & Beauty"), allCategories: ["district", "craft", "misplace", "flush", "campaign", "theoryc", "couple", "mathematics"] }]