import './App.css';

function addRow(arr) {
    let arrlen = arr.length;
    let table = document.querySelector("#transactionHistory");
    let row = table.insertRow(1);
    for (let i = 0; i < arrlen; i++) {
        let cell = row.insertCell(i);
        cell.innerHTML = arr[i];
    }
}

addRow(["2.", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]);

export default function App() {
    return (
        <div className="App">
            <table id="transactionHistory" className="border-separate border border-slate-500 ...">
                <tr className="text-2xl font-bold">
                    <th>Sl.no</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Mode</th>
                    <th>NOTE</th>
                    <th>Date</th>
                </tr>
                <tr className="text-1xl">
                    <td>1.</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                </tr>
            </table>
        </div>
    );
  }