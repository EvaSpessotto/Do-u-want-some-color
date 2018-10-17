/* global loadCSS */
import React, { Fragment } from 'react';
import '../styles/SwitchButton.scss';




class SwitchButton extends React.Component {

    constructor ( props ) {
        super( props );
		
		this.state = {
            isChecked: false,
		}
    }
	
	componentWillMount = () => {
        this.setState( { isChecked: this.props.isChecked } );
        
	}

    
    handleChange = () => {
		this.setState( { 
            isChecked: !this.state.isChecked 
        } );
        loadCSS(this.state.isChecked ? `/style/style.css` : `/style/style2.css`);
    }

    render () {
        return( 
            <Fragment>
                
                <div className="switch-container" >
                
                    <label >
                        <input 
                            ref="switch" 
                            checked={ this.state.isChecked } 
                            onChange={ this.handleChange } 
                            className="switch" 
                            type="checkbox" 
                        />
                        <div>
                            <span><g className="icon icon-toolbar grid-view"></g></span>
                            <span><g className="icon icon-toolbar ticket-view"></g></span>
                            <div></div>
                        </div>
                    </label>
                </div>
           </Fragment>
        );
    }



}


export default SwitchButton;