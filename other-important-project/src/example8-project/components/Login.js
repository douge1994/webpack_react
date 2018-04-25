import React,{ Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {username: '',password:''};
    }
    handleChange(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: event.target.value
        });
      }
    
    handleSubmit(event) {
        // console.log(this.state);
        this.props.onSubmit(this.state)
        event.preventDefault();
    }
    render(){
        return (
            <div className="wrapper-page">
                <div className="text-center">
                    <a className="logo logo-lg"><i className="md md-equalizer"></i> <span>Minton</span> </a>
                </div>
                <form className="form-horizontal m-t-20" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form-group">
                        <div className="col-xs-12">
                            <input className="form-control" name='username' type="text" required="" placeholder="Username"
                                onChange={this.handleChange.bind(this)}/>
                                <i className="md md-account-circle form-control-feedback l-h-34"></i>
                        </div>
                    </div>
                        <div className="form-group">
                            <div className="col-xs-12">
                                <input className="form-control" name="password" type="password" required="" placeholder="Password"
                                    onChange={this.handleChange.bind(this)}/>
                                    <i className="md md-vpn-key form-control-feedback l-h-34"></i>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-xs-12">
                                <div className="checkbox checkbox-primary">
                                    <input id="checkbox-signup" type="checkbox"/>
                                        <label>
                                            Remember me
                                        </label>
                                    </div>

                                </div>
                            </div>
                        <div className="form-group text-right m-t-20">
                            <div className="col-xs-12">
                                <button className="btn btn-primary btn-custom w-md waves-effect waves-light" type="submit">
                                Log In
                                </button>
                            </div>
                        </div>
                </form>
            </div>
        )
    }
}

export default Login