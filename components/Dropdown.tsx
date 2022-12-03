import React from 'react'

const droptDownStyle = {
  position: 'absolute',
  margin: '0px',
  transform: 'translate3d(0, 60px, 1px)'
} as React.CSSProperties;

export default function Dropdown() {
  return (
    <div id="dropdown" className="z-40 bg-th-secondary-soft divide-y divide-gray-100 rounded shadow w-44" style={droptDownStyle}>
        <ul className="py-1 text-sm text-th-primary-medium" aria-labelledby="dropdown-button">
        <li>
            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-th-primary-medium hover:text-th-background-secondary">Mockups</button>
        </li>
        <li>
            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-th-primary-medium hover:text-th-background-secondary">Templates</button>
        </li>
        <li>
            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-th-primary-medium hover:text-th-background-secondary">Design</button>
        </li>
        </ul>
    </div>
  )
}