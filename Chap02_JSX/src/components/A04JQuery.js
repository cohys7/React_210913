
import $ from 'jquery'
import React from 'react'

function A04JQuery() {

    $(document).ready(function() {
        $('button').click(function(evt){
            let result = $('#cost').val();
            $('#result').html(result);
        });
    });

    return (
        <div>
            <input type="text" className="form-control" id="cost" />
            <button className="btn btn-danger">Click</button>

            <div id="result">

            </div>
        </div>
    )
}

export default A04JQuery
