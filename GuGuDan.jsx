const React = require('react');

const e = React.createElement;
class GuGuDan extends React.Component{
    constructor(props){
        super(props);
         //상태(state)는 바뀌는 부분이다. 바뀔수 있는 부분.
        this.state={
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            inputvalue: '',
            result: '',
        }
    }

    onSubmit= (e) => {

        e.preventDefault();
            if(parseInt(this.state.inputvalue,10) === this.state.first * this.state.second){
                this.setState((prevState) =>  {  //예전상태값(바뀌기전의 상태값)
                    return {
                    result: parseInt(prevState.inputvalue,10) + ' 정답 ',
                    first:Math.ceil(Math.random() * 9 ),
                    second:Math.ceil(Math.random() * 9 ),
                    inputvalue:'',
                }
                });

                this.input.focus();

            }else{
                this.setState({
                    result: parseInt(this.state.inputvalue,10) + ' 땡',
                    inputvalue:'',
                });
            }

    };

   onChange = (e) => {
       this.setState({ inputvalue: e.target.value});
   } 

input;

onRefInput = (c) => {
    this.input = c;
}
   componentDidMount(){
      
    }

    render(){

        console.log('렌더링'); 
        return(
            <React.Fragment>
            <div>{this.state.first} 곱하기 { this.state.second} 는 ? </div>
            <form  onSubmit={ this.onSubmit }> 

                <input ref={ this.onRefInput} id="inputnum" type="number"  value={this.state.inputvalue } onChange={this.onChange} />                        
                <button>입력!</button>
            </form>
            <div>{this.state.result }</div>
            </React.Fragment>                   
        );
    }

}


module.exports = GuGuDan;