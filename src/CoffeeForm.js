import React from 'react';

function CoffeeForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input value = {props.coffee}
                    onChange = {props.onChangeCoffee}
                    placeholder = "Coffee"/>
                <input type='email' value = {props.emailAddress}
                    onChange = {props.onChangeEmail}
                    placeholder = "Email Address"/>
                <input value = {props.flavor}
                    onChange = {props.onChangeFlavor}
                    placeholder = "Flavor"/>
                <input value = {props.size}
                    onChange = {props.onChangeSize}
                    placeholder = "Size"/>
                <input type='number' min='0' max='100' value = {props.strength}
                    onChange = {props.onChangeStrength}
                    placeholder = "Strength"/>
                <button type='submit'>Submit Order</button>
            </form>
            <button onClick={props.onLoadOrders}>Load Orders</button>
            <button type="reset" onClick={props.onReset}>Reset Form</button>
        </div>
    );

}

export default CoffeeForm;