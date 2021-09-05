import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getVaccineList } from '../store/reducers/vaccineSagaReducer';

import Spinner from "../presentation/Spinner";

const VaccineList = () => {

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.vaccine.loading);
    const vaccineList = useSelector((state) => state.vaccine.registrants);

    useEffect(() => {
        dispatch(getVaccineList());
    }, [dispatch]);


    let display = (<Spinner />);

    if (!loading) {

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
    }

    return (<>
        <h3>Vaccine List </h3>
        {display}
    </>);
}



export default VaccineList;