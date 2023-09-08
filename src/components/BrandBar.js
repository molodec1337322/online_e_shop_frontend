import React, {useContext} from 'react';
import {Context} from "../index";
import {Card} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <div className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    className="p-3"
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;