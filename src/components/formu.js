import React, {Component}  from 'react';


class Name extends Component {
  constructor(props) {
    super(props)
    this.state = {password: '', email: ''}
    this.submit = this.submit.bind(this);
   
 
    
  }
  changedata = ({name, value} ) => {
    this.setState({[name]:value})

    };
    submit(){
    console.log(this.state)
    return false;};
  
  render() {
    return (
  
      <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">

              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin" >
                <div className="form-label-group">
                  <input type="email" id="Email" className="form-control"
                   placeholder="Email address" name="email" required autoFocus
                   onChange={event => this.changedata(event.target)}/>
                  <label >Email address</label>
                </div>
  
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control"
                   placeholder="Password" required name="password" 
                   onChange={event => this.changedata(event.target)} />
                  <label >Password</label>
                </div>
  
           
                <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.submit} type="button" >Sign in</button>
                <hr className="my-4"></hr>
                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                <button className ="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
              </form>
            
          </div>
        </div>
      </div>
    </div> </div>
 
    );
  };
 

}
export default Name;