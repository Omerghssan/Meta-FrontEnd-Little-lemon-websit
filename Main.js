import React, { useReducer} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
const Main = () => {
    const seedRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var S = seed % m; I
        return function(){
        return S = S * a % m /m;
        }
        const fetchAPI = function (date) {
            let result = [];
            let random = seedRandom(date.getDate());
            for (let i = 17; i <=23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
                }
                if(random() > 0.5){
                result.push(i + ':30');
                }
            }
            return result;
        }
        const initialState = {availableTimes: fetchAPI(new Date())};
        const [state, dispatch] = useReducer (updateTimes, initialState);
        function updateTimes (state, date) {
            return {availableTimes: fetchAPI(new Date())}
        }
        const navigate = useNavigate();
            function submitForm (formData) {
            if(submitAPI (formData)) {
            navigate("/confirmed"); I
            }
        }
        return (
            <main>
                <Routes>
                    <Route path='/' element={<Header/>}/>
                    <Route path='/booking' element={<Booking available Times={state} dispatch={dispatch} submit Form=
                    {submitForm}/>}/>
                    <Route path='/' element={<Header/>}/>
                </Routes>
            </main>
        );
    };
}
export default Main;