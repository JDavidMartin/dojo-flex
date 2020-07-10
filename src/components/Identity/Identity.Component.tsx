import React from 'react';

interface IdentityState {
    'valid': boolean,
    'localFormat': string,
    'carrier': string,
    'country': string
}

export class IdentityComponent extends React.Component<any, IdentityState> {
    constructor(props: any) {
        super(props);
        this.state = {
            valid: false,
            localFormat: '',
            carrier: '',
            country: ''
        }
    };

    VerifyPhoneNumber = (phoneNumber: string) => {

        if (phoneNumber !== undefined) {
            let payload = {
                'phoneNumber': phoneNumber
            };

            fetch(
                'TWILIO FUNCTION URI GOES HERE',
                {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    mode: 'cors'
                }
            )
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        valid: result.valid,
                        localFormat: result.local_format,
                        carrier: result.carrier,
                        country: result.country_name
                    })
                })
                .catch(error => console.log(error));
        }
    }

    render() {
        let { task } = this.props;

        let phoneNumber = task.attributes.name;
        return (
            <div>Hello</div>
        )
    }
}

export default IdentityComponent;