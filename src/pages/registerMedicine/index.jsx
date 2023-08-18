import { useForm } from "react-hook-form";

function RegisterMedicine () {

    const { register, handleSubmit } = useForm();

    const onSubmit = (e) => {
        let medicines = [];
        let medicinesList = localStorage.getItem('newMedicine')
        let usedLocalStorage = medicinesList ? JSON.parse(medicinesList) : [];
        const updatedValue = localStorage.setItem('newMedicine', JSON.stringify(e));
        medicines.push(updatedValue)
        localStorage.setItem('newMedicine', JSON.stringify(e))

    }

    return (
        <>
            <h2>➕ New Medicine</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="medicine">Medicine Name</label>
                <input
                    type="text"
                    name="medicine"
                    {...register("medicine", {
                        required: "Please fill out this field"})}
                        
                    />
                <label htmlFor="lab">Pharmaceutical Lab</label>
                <input
                    type="text"
                    name="lab" 
                    {...register("lab", {
                        required: "Please fill out this field"})}                
                />
                <label htmlFor="dosage">Dosage</label>
                <input
                    type="text"
                    name="dosage"
                    {...register("dosage", {
                        required: "Please fill out this field"})} 
                />
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    name="description"
                    {...register("description", {
                        required: "Please fill out this field"})} 
                />
                <label htmlFor="price">Price per Unit</label>
                <input
                    type="text"
                    name="price"
                    {...register("price", {
                        required: "Please fill out this field"})} 
                />
                <label htmlFor="type" className="form_label">Type:</label>
                <select name="type" 
                    {...register("type", {
                        required: "Select one option"
                    })}>
                    <option value="1">General</option>
                    <option value="2">Controlled</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export { RegisterMedicine }