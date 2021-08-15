import React,{Component,createContext} from "react";

export const LanguageContext = createContext();

class LanguageProvider extends Component{
    state = {
        language: "spanish"
    }

    changeLanguage = (e)=>{
        this.setState({language:e.target.value})
        console.log(e)
    }

    render(){
        return(
        <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
            {this.props.children}
        </LanguageContext.Provider>
        )
    }
}

export default LanguageProvider