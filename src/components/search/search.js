import './search.css'

export default function Search() {
    return <div className='common'>
    <div className='background'>
        <input type="text" className='input' placeholder='Destination'/>
        <input type="text" className='input' placeholder='Check-in'/>
        <input type="text" className='input' placeholder='Check-out'/>
        <input type="text" className='input' placeholder='Adults'/>
        <input type="text" className='input' placeholder='Children'/>
        <button className='search_button'>SEARCH</button>
    </div>
    </div>
}