import {Form, Text, Select} from "react-form";
import IUser from "../interfaces/IUser";
import * as React from "react";

interface IAddUserFormProps {
    users: IUser[];
    onSubmit: (user: {name: string, guestOfUUID: string}) => any;
}

const AddUserForm = (props: IAddUserFormProps) => {
    const usersToOptions = (users: IUser[]) => (
        users.filter((user) => (user.homeOwner))
        .map((user) => ({label:user.name, value: user.UUID})
    ));

    const onSubmit = (submittedValues: any) => {
        props.onSubmit({name: submittedValues.name, guestOfUUID: submittedValues.guestOf})
    };

    return (
        <Form onSubmit={onSubmit}> 
            {(formApi) => (
                <form onSubmit={formApi.submitForm}>
                    <label htmlFor="name" />
                        Name
                    <Text 
                        field="name"
                        id="name"
                        placeholder="Ralph Wiggum" 
                    />
                    <label htmlFor="guestOf" />
                    <Select field="guestOf" id="guestOf" options={usersToOptions(props.users)}/>
                    <button type="submit"> Join L o n g b  o   a    t</button>
                </form>
            )}
        </Form>
    );
}

export default AddUserForm;