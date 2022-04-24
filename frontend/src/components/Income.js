import { useState } from 'react';
import { useEffect } from 'react';

    function Income() {

        const [date, setDate] = useState('');
        const [type, setType] = useState('');
        const [amount, setAmount] = useState('');
        const [incomes, setIncomes] = useState([]);

        function handleSubmit(e) {
            e.preventDefault();
            console.log('Data:' + date);
            console.log('Pavadinimas:' + type);
            console.log('Suma:' + amount);

            let income = { date, type, amount };
            setIncomes([...incomes, income]);
            if (incomes.length > 0) {
                console.log('Visos pajamos:' + JSON.stringify(incomes));
            }
        }

       useEffect(() => { console.log('pajamos:' + JSON.stringify(incomes)) }, [incomes])


        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="date">Data:</label>
                        <input type="text" id="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                    </div>
                    <div>
                        <label htmlFor="type">Pavadinimas</label>
                        <input type="text" id="type" rows="1" cols="50" value={type} onChange={(e) => { setType(e.target.value) }} />

                    </div>
                    <div>
                        <label htmlFor="amount">Suma</label>
                        <input type="text" id="amount" rows="1" cols="50" value={amount} onChange={(e) => { setAmount(e.target.value) }} />

                    </div>
                    <input type="submit" value="Patvirtinti"></input>

                </form>
                <div>
                    <p>{date}</p>
                    <p>{type}</p>
                    <p>{amount}</p>
                   

                </div>
            </>
        );

    }


export default Income;

// Siūlymas pajamų kintamiesiems (po rodyklės nurodytas tipas ir pavadinimas):
// suma -> BigDecimal amount
// komentaras -> String comment
// data -> LocalDate date
// id -> Long id
// pavadinimas -> type