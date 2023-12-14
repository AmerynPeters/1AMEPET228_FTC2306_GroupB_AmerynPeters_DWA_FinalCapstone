import React from 'react';
import { Carousel } from 'antd';
import { useEffect, useState } from "react";



const contentStyle = {
className="d-block w-100",                        
alt="slide 1",
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function CarouselChanger(props) {
    const [items, setitems] = useState([]);


//export default function CarouselView(props) {
 

    useEffect(() => {
        let list = props.all.map((item, id) => {
            return (
                <Carousel autoplay>
                    <Image
key={item.id}
                    />
                   
                        <h3><style>{item.title}</style></h3>
                        <p
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxHeight: "4.5em",
                            }}
                        >
                            {item.description}
                        </p>
                    
                </Carousel>
            );
        });

        setitems(list);
    }, [props.all]);

    return (
        <>
            <h5>You might like...</h5>
            <CCarousel controls indicators dark={false}>
                {items}
            </CCarousel>
        </>
    );
}
