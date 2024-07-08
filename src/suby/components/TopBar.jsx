import React from 'react'

const TopBar = () => {
    return (
        <section className="topBarSection">
            <div className="compnayTitle">
                <h2>pav</h2>
            </div>
            <div className="searchBar">
                <input type="text" placeholder='search..' />
            </div>
            <div className="userAuth">
                login/signup
            </div>
        </section>
    )
}

export default TopBar
