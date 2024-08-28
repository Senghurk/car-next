"use client"
import React from "react";
import { useForm } from "react-hook-form";

export default function Home() {
    const { register, handleSubmit } = useForm();
    const [vat, setVat] = React.useState(0);
    const handleForm = (data) => {
        console.debug(data)
        const v = Math.round(data.price * data.rate * 100) / 100
        setVat(v)
    }
    return (
        <div>
            <h1>VAT Calcuator</h1>
            <form onSubmit={handleSubmit(handleForm)}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Price:</label></td>
                            <td><input type="number" name="price" 
                            {...register("price",{valueAsNumber:true})}/></td>
                        </tr>
                        <tr>
                            <td><label>VAT Rate:</label></td>
                            <td><input type="number" name="rate" value="0.07" readOnly
                            {...register("rate",{valueAsNumber:true})}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="submit" value="Calculate"
                             /></td>
                        </tr>
                        <tr>
                            <td><label>VAT:</label></td>
                            <td><input type="text" name="vat" value={vat}/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
