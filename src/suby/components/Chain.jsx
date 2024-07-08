import React, { useState, useEffect } from 'react';
import { API_URL } from '../Api';

const Chain = () => {
    const [vendorData, setVendorData] = useState([]);
    const [scrollPos, setScrollPos] = useState(0);

    const vendorFirmHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newData = await response.json();

            setVendorData(newData);
            console.log("This is API data", newData);
        } catch (error) {
            alert("Failed to fetch data");
            console.error("Failed to fetch data", error);
        }
    };

    useEffect(() => {
        vendorFirmHandler();
    }, []);

    const handleScroll = (direction) => {
        const gallery = document.getElementById("chainGallery");
        const scrollAmount = 1000;

        if (direction === 'left') {
            gallery.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else if (direction === 'right') {
            gallery.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <React.Fragment>
                <section className='chainheading'>
                <h3>Top Restaurant Chains in Hyderabad</h3> 
                <div className="btnSection">
                    <button onClick={() => handleScroll("left")}>left</button>
                    <button onClick={() => handleScroll("right")}>right</button>
                </div>
                </section>
                <section className='chainSection' id="chainGallery" onScroll={(e) => setScrollPos(e.target.scrollLeft)}>
                    {vendorData.vendors && vendorData.vendors.map((vendor) => {
                        return (
                            <div className="vendorBox" key={vendor.id}>
                                {vendor.firm.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <div>
                                                {item.firmName}
                                            </div>
                                            <div className="firmImage">
                                                <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </section>
            </React.Fragment>
        </>
    )
}

export default Chain;
