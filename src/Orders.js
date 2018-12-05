import React from 'react';

const Orders = (props) => {
    return(

        <table>
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Email</th> 
                <th>Coffee</th>
                <th>Flavor</th>
                <th>Size</th>
                <th>Strength</th>
            </tr>
        </thead>
            {props.orders.map((item)=> {
               return (
                <tbody>
                <tr>
                    <td> {item._id} </td>
                    <td> {item.coffee} </td>
                    <td> {item.emailAddress} </td>
                    <td> {item.flavor} </td>
                    <td> {item.size} </td>
                    <td>{item.strength} </td> 
                </tr>
                </tbody>
               );
            })}
        </table>
    );
};

export default Orders;



  