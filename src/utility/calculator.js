class calculator{

    constructor(){
        this.expression = [];
        this.history = JSON.parse(localStorage.getItem("calculatorHistory") ) || [];

        while( this.history.length > 7 ){
            console.log("hmm");
            this.history.shift();
        }
    }

    appendDigit( digit ){
        console.log(digit);
        this.expression.push( String(digit) );
    }

    clearExpression(){
        this.expression = [];
    }

    evaluate(){
        console.log(this.expression);

        this.updateLocalStorage( this.expression );
        const res = eval( this.expression.join("") );

        this.expression = [];

        return res;
    }

    getHistory(){
        return this.history;
    }

    updateLocalStorage(item){
        this.history.push(item);
        localStorage.setItem( "calculatorHistory" , JSON.stringify(this.history) );
    }

}

const calc = new calculator;

export default calc;