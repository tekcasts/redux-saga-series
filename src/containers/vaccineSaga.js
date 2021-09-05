import React from 'react';
import { useSelector } from "react-redux";

import Spinner from "../presentation/Spinner";

const VaccineList = () => {


    const vaccineList = useSelector((state) => state.vaccine.registrants);


    let display = (<Spinner />);


    display = <table className="table">
        <thead>
            <tr>
                <td>Member</td>
                <td>Date</td>
                <td>Vaccine</td>

            </tr>
        </thead>

        <tbody>
            {vaccineList.map((member, i) => {
                return (
                    <tr key={i}>
                        <td>{member.name}</td>
                        <td> {member.date}</td>
                        <td>{member.vaccine}</td>
                    </tr>
                );
            })}
        </tbody>

    </table>


    return (<>
        <h3>Vaccine List </h3>
        {display}
    </>);
}



export default VaccineList;