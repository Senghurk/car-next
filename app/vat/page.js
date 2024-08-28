import Image from "next/image";

export default function Home() {
    return (
        <div>
            <h1>VAT Calcuator</h1>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Price:</label></td>
                            <td><input type="text" name="price" /></td>
                        </tr>
                        <tr>
                            <td><label>VAT:</label></td>
                            <td><input type="number" name="vat" value="0.07" readOnly/></td>
                        </tr>
                        <tr>
                            <td colspan="2"><input type="submit" value="Calculate" /></td>
                        </tr>
                        <tr>
                            <td><label>Result:</label></td>
                            <td><input type="text" name="result" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
