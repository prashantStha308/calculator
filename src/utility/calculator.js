class calculator{

    constructor(){

        this.expression = [];
        this.history = JSON.parse(localStorage.getItem("calculatorHistory") ) || [];
        
        // make the cursor hold the place of last element at default
        this.cursor = this.expression.length - 1;

        while( this.history.length > 15 ){
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

    /***  Operations ***/
    setCursor( index ){
        this.cursor = index;
    }

    appendDigit( digit ){
        console.log(digit);

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

    backspace(){

        console.log("Popped Element: ",this.expression.pop());
        // in later stage, we can remove the element from the point where cursor is placed.
        // like , this.expression.splice( cursor , 1 );
    }

    /*** Advanced Calculator Options ***/
    logBase( x , base ){
        return Math.log(x)/Math.log(base);
    }

    processExpression(){
        let joinedExp = this.expression.join("");
        // remove the leading zero if present
        joinedExp = joinedExp.replace(/\b0+(\d+)/g,"$1");
        // remove the element before and after '^' along with '^' and replace it with Math.pow(x,y);
        joinedExp = joinedExp.replace( /(\d+)\^(\d+)/ , ( match , d1 , d2 )=> {
            return Math.pow( Number(d1) , Number(d2) );
        } );
        // calculate ln if exists
        joinedExp = joinedExp.replace( /ln\((\d+)\)/ , ( match , d1) =>(
            this.logBase( d1 , Math.E )
        ) );
        // calculate lg if available
        joinedExp = joinedExp.replace( /lg\((\d+)\)/, ( match , d1 ) => ( Math.log10( Number(d1) ) ) );

        joinedExp = joinedExp.replace( /([a-z]+)\(([\d.]+)\)/g , ( match , ratio , d1 ) =>{
            return `Math.${ratio}( ${d1} * Math.PI/180 )`;
        } );


        return joinedExp;
    }

    evaluate(){
        if( this.expression.length === 0 ) return 0;

        const processedExp = this.processExpression();

        this.updateLocalStorage( this.expression );
        let res;
        // return infinity if any divisor is 0
        let matches = processedExp.match(/\/(\d+)/)
        if( matches ){
            let divisor = parseInt( matches[1] , 10 );
            if( divisor < 0 ){
                this.clearExpression();
                return "∞";
            }
        }

        res = eval( processedExp );
        this.expression = [res];
        return res;

    }

    /*** Memory ***/
    updateLocalStorage(item){
        const expressionString = item.join("");
        this.history.push(expressionString);
        localStorage.setItem("calculatorHistory", JSON.stringify(this.history));
    }

}

const calc = new calculator;

export default calc;