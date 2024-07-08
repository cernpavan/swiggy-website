import React, { useState, useEffect } from 'react';
import { API_URL } from '../Api';
import { Link } from 'react-router-dom';

const FirmCollection = () => {
    const [firmData, setFirmData] = useState([]);

    const firmDataHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const data = await response.json();
            setFirmData(data.vendors);
        } catch (e) {
            alert("Failed to fetch data");
            console.error("Failed to fetch data", e);
        }
    };

    useEffect(() => {
        firmDataHandler();
    }, []);

    return (
        <>
            <div className="headers">
                <h3>Restaurants with online food delivery in Ongole</h3>
            </div>
            <div className="firmSection">
                {firmData.map((vendor) => (
                    <div key={vendor.id}>
                        {vendor.firm.map((item) => (
                            <Link key={item._id} to={`/products/${item._id}`}>
                                <div className="firmGroup">
                                    <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                                    <div className="firmDetails">
                                        <div className="itemFirmName">{item.firmName}</div>
                                        <div>{item.region.join(', ')}</div>
                                        <div>{item.area}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FirmCollection;
