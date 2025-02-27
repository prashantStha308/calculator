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
        this.expression.push( String(digit) );
    }

    clearExpression(){
        this.expression = [];
    }

    /***  Operations ***/
    backspace(){
        console.log(this.expression.pop());
        console.log( "Expression" , this.expression );
        this.updateLocalStorage( this.expression );
    }

    evaluate(){
        const joinedExp = this.expression.join("");
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