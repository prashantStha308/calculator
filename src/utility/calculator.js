class calculator{

    constructor(){
        this.expression = [];
        this.history = JSON.parse(localStorage.getItem("calculatorHistory") ) || [];

        while( this.history.length > 7 ){
            this.history.shift();
        }
    }
    /***  Getters ***/
    getExpression(){
        return this.expression;
    }
    getHistory(){
        return this.history;
    }
    /*** Setters ***/
    appendDigit( digit ){
        if( digit === "00" && this.expression.length === 0 ){
            this.expression.push(0);
        }else{
            this.expression.push( String(digit) )
        }
    }

    clearExpression(){
        this.expression = [];
    }

    /***  Operations ***/
    backspace(){
        console.log(this.expression.pop());
        this.updateLocalStorage( this.expression ); //remove this in next sitting
    }

    evaluate(){
        if( this.expression.length === 0 ) return 0;

        let joinedExp = this.expression.join("");
        // remove the leading zero if present
        joinedExp = joinedExp.replace(/\b0+(\d+)/g,"$1");

        this.updateLocalStorage( this.expression );
        let res;
        if( joinedExp.includes("/0") ){
            this.clearExpression();
            return "∞";
        }
        res = eval( joinedExp );
        this.expression = [res];
        return res;

    }

    /*** Memory ***/
    updateLocalStorage(item){
        this.history.push(item.join(""));
        localStorage.setItem( "calculatorHistory" , JSON.stringify(this.history) );
    }

}

const calc = new calculator;

export default calc;