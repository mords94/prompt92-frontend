import * as React from 'react';
import { connect } from 'react-redux';
import { MouseEvent, ChangeEvent, FormEvent } from 'react';
import { UserPayload, saveUser } from '../../actions/users';
import { USERS_RESET } from 'src/store/usersReducer';
import { Redirect } from 'react-router';
import BreadCrumb from 'src/components/Common/BreadCrumb';

export interface NewUserStates {
    emailInputs: EmailInput[];
    counter: number;
    userName: String;
    date_of_birth: String;
}

interface EmailInput {
    id: number;
    value: String;
}

class NewUser extends React.Component<any, NewUserStates> {
    state = {
        emailInputs: [],
        counter: 0,
        userName: '',
        date_of_birth: '',
    };

    componentWillMount() {
        this.props.dispatch({type: USERS_RESET});
    }

    handleAddEmail() {
        let inputs: EmailInput[] = this.state.emailInputs;
       
        inputs.push({id: this.state.counter, value: ''});

        this.setState({emailInputs: inputs, counter: this.state.counter + 1});
    }

    handleRemove(id: number) {
        this.setState({emailInputs: this.state.emailInputs.filter((input: EmailInput) => input.id !== id)}); 
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const payload = {
            emails: this.state.emailInputs.map((input: EmailInput) => input.value),
            name: this.state.userName,
            date_of_birth: this.state.date_of_birth,
        } as UserPayload;

        this.props.dispatch(saveUser(payload));
    }

    handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({userName: event.target.value});
    }

    handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
        console.log(name, this.state);
        this.setState({...this.state, [name]: event.target.value} as NewUserStates);
    }

    handleEmailChange(event: ChangeEvent<HTMLInputElement>, id: number) {
        
        const changedInputs =  this.state.emailInputs.map((input: EmailInput) => {
            if (input.id === id) {
                return {...input, value: event.target.value};
            }

            return {...input};
        });

        this.setState({emailInputs: changedInputs});
    }

    render() {
        const { emailInputs, userName, date_of_birth } = this.state;
        const { submit, saved } = this.props;

        if (saved) {
            return <Redirect to="/users" />;
        }

        return (
            <form onSubmit={(event: FormEvent<HTMLFormElement>) => this.handleSubmit(event)}>
                <BreadCrumb page="New user"/>
                <div className="form-group">
                    <label>
                        Full name
                        <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter a person's name" 
                                onChange={this.handleChange('userName')} 
                                value={userName}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Date of birth
                        <input 
                                type="date" 
                                className="form-control" 
                                placeholder="Date of birth" 
                                onChange={this.handleChange('date_of_birth')} 
                                value={date_of_birth}
                        />
                    </label>
                </div>
                
                <div className="form-group">
                    <button 
                        type="button"
                        className="btn btn-default" 
                        onClick={(event: MouseEvent<HTMLButtonElement>) => this.handleAddEmail()}
                    >
                        Add email
                    </button>
                </div>
                {emailInputs.map((input: EmailInput, key: number) => 
                    <div key={key} className="form-group">
                        <input 
                                type="text"
                                className="form-control" 
                                placeholder="Type email address here" 
                                value={input.value as string} 
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    return this.handleEmailChange(event, input.id);
                                }}
                        />
                        <button 
                                type="button" 
                                className="btn btn-danger mt-2"
                                onClick={(event: MouseEvent<HTMLButtonElement>) => this.handleRemove(input.id)}
                        >
                            Remove
                        </button>
                    </div>
                )}
                <button type="submit" disabled={submit} className="btn btn-success">
                   Save
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state: any) => ({
    submit: state.user.submit,
    saved: state.user.saved,
});

export default connect(mapStateToProps)(NewUser);