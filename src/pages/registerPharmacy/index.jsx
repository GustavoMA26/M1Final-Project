import { useForm } from "react-hook-form";

function RegisterPharmacy () {

    const { register, setValue, setFocus, handleSubmit } = useForm();

    const onSubmit = (e) => {
        let pharmaciesList = localStorage.getItem('newPharmacy')
        let usedLocalStorage = pharmaciesList ? JSON.parse(pharmaciesList) : [];
        usedLocalStorage.push(e)
        localStorage.setItem('newPharmacy', JSON.stringify(usedLocalStorage));
        alert(`Pharmacy ${company.value} registered with success`)
        }
        

    const checkZipcode = (e) => {
        const zipcode = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
        .then(response => response.json())
        .then(data => {
        setValue('street', data.logradouro)
        setValue('neighborhood', data.bairro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
        setFocus('addressNumber')
        })
    }
    return (
        <>
            <h2>➕ New Pharmacy</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="company">Company Name</label>
                <input
                    id="company"
                    type="text"
                    name="company"
                    {...register("company", {
                        required: "Please fill out this field"})}
                        
                    />
                <label htmlFor="cnpj">CNPJ</label>
                <input
                    id="cnpj"
                    type="text"
                    name="company" 
                    {...register("cnpj", {
                        required: "Please fill out this field"})}                
                />
                <label htmlFor="tradingName">Trading Name</label>
                <input
                    id="tradingName"
                    type="text"
                    name="tradingName"
                    {...register("tradingName", {
                        required: "Please fill out this field"})} 
                />
                <label htmlFor="email">Email</label>
                <input
                    id="companyEmail"
                    type="email"
                    name="email"
                    {...register("email", {
                        required: "Please fill out this field"})} 
                />
                <label htmlFor="phone">Phone Number:</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    {...register("phone", {
                        required: "Please fill out this field"})} 
                />
                <label htmlFor="mobile">Mobile Number</label>
                <input
                    id="mobile"
                    type="tel"
                    name="mobile"
                    {...register("mobile", {
                        required: "Please fill out this field"})} 
                />
                <fieldset>Address
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                        id="zipcode"
                        type="text"
                        name="zipcode"
                        required
                        {...register("zipcode", {
                            required: "Please fill out this field"})}
                        onBlur={checkZipcode}
                    />
                    <label htmlFor="street">Street</label>
                    <input
                        id="street"
                        type="text"
                        name="street"
                        {...register("street", {
                            required: "Please fill out this field"})}
                    />
                    <label htmlFor="addressNumber">Number</label>
                    <input
                        id="addressNumber"
                        type="number"
                        name="addressNumber"
                        {...register("addressNumber", {
                            required: "Please fill out this field"})}
                    />
                    <label htmlFor="neighborhood">Neighborhood</label>
                    <input
                        id="neighborhood"
                        type="text"
                        name="neighborhood"
                        {...register("neighborhood", {
                            required: "Please fill out this field"})}
                    />
                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        type="text"
                        name="city"
                        {...register("city", {
                            required: "Please fill out this field"})}
                    />
                    <label htmlFor="state">State</label>
                    <input
                        id="state"
                        type="text"
                        name="state"
                        {...register("state", {
                            required: "Please fill out this field"})}
                    />
                    <label htmlFor="complement">Complement</label>
                    <input
                        id="complement"
                        type="text"
                        name="complement"
                        {...register("complement", {
                            required: false})}
                    />
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        id="latitude"
                        type="number"
                        name="latitude"
                        {...register("latitude", {
                            required: "Please fill out this field"})}
                    />
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        id="longitude"
                        type="number"
                        name="longitude"
                        {...register("longitude", {
                            required: "Please fill out this field"})}
                    />
                </fieldset>
                    <button type="submit">Register</button>
            </form>
        </>
    )
}

export { RegisterPharmacy }