/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import './Filters.css'
import { connect } from 'react-redux'
import { filterData } from '../../Actions/actions';

const Filters = ({ filterData }) => {
    const [Filteryear, setFilteryear] = useState('');
    const [LaunchValue, setLaunchValue] = useState('');
    const [LandValue, setLandValue] = useState('');
    let FinalUrl = '';

    const callFilter = useEffect(() => {
        filterData(Filteryear, LaunchValue, LandValue);
        updateUrl(Filteryear, LaunchValue, LandValue);
    }, [Filteryear, LaunchValue, LandValue])


    //for update url
    const updateUrl = (Filteryear, LaunchValue, LandValue) => {
        FinalUrl += LaunchValue.length !== 0 ? `&launch_success=${LaunchValue}` : '';
        FinalUrl += LandValue.length !== 0 ? `&land_success=${LaunchValue}` : '';
        FinalUrl += Filteryear.length !== 0 ? `&launch_year=${Filteryear}` : '';
        window.history.pushState({}, '', FinalUrl);
    }

    //Filter click handler
    const filterYearHandler = (e) => {
        e.target.parentElement.className === 'Filter__Options successfulLaunch' ? setLaunchValue(e.target.childNodes[0].data) : null;
        e.target.parentElement.className === 'Filter__Options successfulLand' ? setLandValue(e.target.childNodes[0].data) : null;
        e.target.parentElement.className === 'Filter__Options' ? setFilteryear(e.target.childNodes[0].data) : null;
        callFilter;
    }

    return (
        <div className="Filter__Container">
            <h2>Filters</h2>
            <div className="Filter__Section">
                <div className="Filter__Section__Heading">Launch Year</div>
                <div className="Filter__Options" onClick={filterYearHandler}>
                    <div className={`Filter_Button ${Filteryear === '2006' ? 'selected' : ''}`}>2006</div>
                    <div className={`Filter_Button ${Filteryear === '2007' ? 'selected' : ''}`}>2007</div>
                    <div className={`Filter_Button ${Filteryear === '2008' ? 'selected' : ''}`}>2008</div>
                    <div className={`Filter_Button ${Filteryear === '2009' ? 'selected' : ''}`}>2009</div>
                    <div className={`Filter_Button ${Filteryear === '2010' ? 'selected' : ''}`}>2010</div>
                    <div className={`Filter_Button ${Filteryear === '2011' ? 'selected' : ''}`}>2011</div>
                    <div className={`Filter_Button ${Filteryear === '2012' ? 'selected' : ''}`}>2012</div>
                    <div className={`Filter_Button ${Filteryear === '2013' ? 'selected' : ''}`}>2013</div>
                    <div className={`Filter_Button ${Filteryear === '2014' ? 'selected' : ''}`}>2014</div>
                    <div className={`Filter_Button ${Filteryear === '2015' ? 'selected' : ''}`}>2015</div>
                    <div className={`Filter_Button ${Filteryear === '2016' ? 'selected' : ''}`}>2016</div>
                    <div className={`Filter_Button ${Filteryear === '2017' ? 'selected' : ''}`}>2017</div>
                    <div className={`Filter_Button ${Filteryear === '2018' ? 'selected' : ''}`}>2018</div>
                    <div className={`Filter_Button ${Filteryear === '2019' ? 'selected' : ''}`}>2019</div>
                    <div className={`Filter_Button ${Filteryear === '2020' ? 'selected' : ''}`}>2020</div>
                </div>
            </div>
            <div className="Filter__Section">
                <div className="Filter__Section__Heading">Successful Launch</div>
                <div className="Filter__Options successfulLaunch" onClick={filterYearHandler}>
                    <div className={`Filter_Button ${LaunchValue === 'true' ? 'selected' : ''}`}>true</div>
                    <div className={`Filter_Button ${LaunchValue === 'false' ? 'selected' : ''}`}>false</div>
                </div>
            </div>
            <div className="Filter__Section">
                <div className="Filter__Section__Heading">Successful Landing</div>
                <div className="Filter__Options successfulLand" onClick={filterYearHandler}>
                    <div className={`Filter_Button ${LandValue === 'true' ? 'selected' : ''}`}>true</div>
                    <div className={`Filter_Button ${LandValue === 'false' ? 'selected' : ''}`}>false</div>
                </div>
            </div>
        </div>
    )
}



export default connect(null, { filterData })(Filters)
