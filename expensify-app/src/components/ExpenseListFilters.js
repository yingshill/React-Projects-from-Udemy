import React from "react"
import { connect } from "react-redux" 
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters"

const ExpenseListFilters = (props) => (                
    <div>
        <input type="text" value={props.filters.text} onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value))
        }}/>

        <select 
        value={props.filters.sortBy} 
        onChange={(e)=>{
           if (e.target.value === "date") {
            props.dispatch(sortByDate())
           } else if (e.target.value === "amount") {
            props.dispatch(sortByAmount())
           }
        }}       
        >
            <option value="amount">Amount</option>
            <option value="date">Date</option>
        </select>
    
    </div>
)

const mapStatetoProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStatetoProps)(ExpenseListFilters);

//props are state's props like expenses and filters
//e is the event 