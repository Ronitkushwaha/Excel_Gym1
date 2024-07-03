import React from "react";
export default function Classes() {
    return (
        <>
            <main class="adminmain">
                <div className="search">
                    <input type="text" placeholder="Enter to search" name="dbsearch" />
                    <button>search</button>
                </div>
                <div class="tableslist">
                    <table>
                        <tr>
                            <th>Class-name</th>
                            <th>Trainer-name</th>
                            <th>Schedule</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>boxing</td>
                            <td>rishu</td>
                            <td>7am-9am</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>yoga</td>
                            <td>anb</td>
                            <td>12am-2pm</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>boxing</td>
                            <td>rishu</td>
                            <td>7am-9am</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>boxing</td>
                            <td>rishu</td>
                            <td>7am-9am</td>
                            <td>20000</td>
                        </tr>
                    </table>
                </div>
            </main>
        </>
    )
}