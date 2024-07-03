import React from "react";
export default function Members() {
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
                            <th>Name</th>
                            <th>Specialites</th>
                            <th>Phone number</th>
                            <th>Bio</th>
                            <th>Edit</th>
                        </tr>
                    </table>
                </div>
            </main>
        </>
    )
}