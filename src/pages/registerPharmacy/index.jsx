function RegisterPharmacy () {
    return (
        <>
            <h2>➕ New Pharmacy</h2>
            <form>
                <label htmlFor="company">Company Name</label>
                <input id="company" type="text" name="company" required={true}/>
                <label htmlFor="cnpj">CNPJ</label>
                <input id="cnpj" type="text" name="company" required={true}/>
                <label htmlFor="trading-name">Trading Name</label>
                <input id="trading-name" type="text" name="company" required={true}/>
                <label htmlFor="email">Email</label>
                <input id="companyEmail" type="email" name="email" required={true}/>
                <label htmlFor="phone">Phone Number:</label>
                <input id="phone" type="tel" name="phone" required={true}/>
                <label htmlFor="mobile">Mobile Number:</label>
                <input id="mobile" type="tel" name="mobile" required={true}/>
                <fieldset>Address
                    <label htmlFor="zipcode">Zipcode:</label>
                    <input id="zipcode" type="text" name="zipcode" required={true}/>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" required={true}/>
                    <label htmlFor="numberSt">Number:</label>
                    <input id="numberSt" type="number" name="numberSt" required={true}/>
                    <label htmlFor="neighborhood">Neighborhood:</label>
                    <input id="neighborhood" type="text" name="neighborhood" required={true}/>
                    <label htmlFor="city">City:</label>
                    <input id="city" type="text" name="city" required={true}/>
                    <label htmlFor="state">State:</label>
                    <input id="state" type="text" name="state" required={true}/>
                    <label htmlFor="complement">Complement:</label>
                    <input id="complement" type="text" name="complement" required={false}/>
                    <label htmlFor="latitude">Latitude:</label>
                    <input id="latitude" type="number" name="latitude" required={true}/>
                    <label htmlFor="longitude">Longitude:</label>
                    <input id="longitude" type="number" name="longitude" required={true}/>
                </fieldset>
                    <button type="submit">Register</button>
            </form>
        </>
    )
}

export { RegisterPharmacy }