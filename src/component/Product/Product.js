import React, { useEffect } from 'react'
import './Product.css'
import { connect } from 'react-redux';
import { getProducts } from '../../Actions/actions';


const Product = ({ getProducts, data }) => {
    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (

        <div className="Product__Section">
            {data.length !== 0 ? (data.map((item, index) => {
                const { flight_number, mission_name, launch_success, launch_year, links, rocket } = item;

                return (
                    <div className="Each__Product__Wrapper" key={index}>
                        <div className="Product__Img"><img src={links.mission_patch} alt="" /></div>
                        <div className="Product__Details">
                            <div className="MisssionName__FighterNumber">{mission_name} # {flight_number}</div>
                            <div className="Mission__Ids Product__Tabular_Txt">
                                <div>Mission Ids:</div>
                                <div>{'' + links.mission_id + ''}</div>
                            </div>

                            <div className="Mission__Ids Product__Tabular_Txt">
                                <div>Launch Year:</div>
                                <div>{launch_year}</div>
                            </div>
                            <div className="Mission__Ids Product__Tabular_Txt">
                                <div>Successful Launch:</div>
                                <div>{'' + launch_success + ''}</div>
                            </div>
                            <div className="Mission__Ids Product__Tabular_Txt">
                                <div>Successful <br></br>Landing:</div>
                                <div>{'' + rocket.first_stage.cores[0].land_success + ''}</div>
                            </div>
                        </div>
                    </div>)
            })) : (<div className="Product_Notfound" > <p><strong>Data not avaliable for selected options</strong></p> </div>)}
        </div >)
}

// get data state
const mapStateToProps = (state) => ({ data: state.data.data });


export default connect(mapStateToProps, { getProducts })(Product)
