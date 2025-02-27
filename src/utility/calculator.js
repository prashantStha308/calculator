class calculator{

    constructor(){
        this.expression = [];
        this.history = JSON.parse(localStorage.getItem("calculatorHistory") ) || [];
        
        // make the cursor hold the place of last element at default
        this.cursor = this.expression.length - 1;

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
    getCursor(){
        return this.cursor;
    }

    /*** Setters ***/
    setCursor( index ){
        this.cursor = index;
    }

    appendDigit( digit ){
        if( digit === "00" && this.expression.length === 0 ){
            this.expression.push(0);
        }else{
            this.expression.push( String(digit) )
        }
        // later stages, we can add elements to the index stored by the cursor variable
        // like: this.expression.splice( cursor , 0 , digit )
    }

    clearExpression(){
        this.expression = [];
    }

    /***  Operations ***/
    backspace(){
        // remove the latest expression
        this.expression.pop();
        // in later stage, we can remove the element from the point where cursor is placed.
        // like , this.expression.splice( cursor , 1 );
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