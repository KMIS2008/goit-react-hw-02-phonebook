import { Formik } from 'formik';
import { Button } from './FormAdContact.styled'; 
import { FormStyle,
         FieldStyle,
         FormLabel} from './FormAdContact.styled';

export const FormAddContact = ({onAdd})=> {
    return (
  <div>
    <Formik
      initialValues={{
        name: '',
      }}

      onSubmit={async (values, actions) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        onAdd(values);
        actions.resetForm();
      }}

    // onSubmit={(values, actions) => {
    //     onAdd(values);
    //     actions.resetForm(); }}
    >
      <FormStyle>
           <FormLabel >Name
                <FieldStyle            
                     type="text"
                     name="name"
                    //  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    //  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required />
            </FormLabel>
        
        <Button type="submit">Submit</Button>
      </FormStyle>
    </Formik>
  </div>
    )
}