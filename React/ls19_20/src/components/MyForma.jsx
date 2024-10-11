import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { initForma, ENUM_FORM } from '../constants';

// export const validationSchemaForm = yup.object({
//     [ENUM_FORM.EMAIL]: yup.string().min(6).max(24).email('it is not EMAIL').required('It is required'),
//     [ENUM_FORM.NUMBER]: yup.string().min(8).max(12).required('Enter number'),
//     [ENUM_FORM.LOGIN]: yup.string().min(4).max(8).required('Required'),
//     [ENUM_FORM.PASSWORD]: yup.string().min(4).max(8).required('RRRR')
// })

export const validationSchemaForm = yup.object({
    [ENUM_FORM.EMAIL]: yup.string().email('It is not EMAIL').required('It is required'),
    [ENUM_FORM.NUMBER]: yup.string().required('Enter number'),
    [ENUM_FORM.LOGIN]: yup.string().required('Required'),
    [ENUM_FORM.PASSWORD]: yup.string().required('RRRR')
})

const JSXXX = () => (
    <div>
        Hellloooooo
    </div>
)

export default JSXXX

export function MyForma () {
    const handleDataForm = (data) => {
        console.log(data);
    }


    return (
        <div>
            <h1>dlldldldldldldl</h1>
            <Formik
                initialValues={initForma}
                onSubmit={handleDataForm}
                // validate={}
                validationSchema={validationSchemaForm}
            >
                <Form style={{width: '30%', textAlign: 'center', margin: '40px'}}>
                    <label htmlFor={ENUM_FORM.EMAIL}> Enter email</label>
                    <Field id={ENUM_FORM.EMAIL} name={ENUM_FORM.EMAIL} placeholder="Your email" />
                    <ErrorMessage name={ENUM_FORM.EMAIL}/>
                    <hr />

                    <label htmlFor={ENUM_FORM.NUMBER}> Enter number </label>
                    <Field id={ENUM_FORM.NUMBER} name={ENUM_FORM.NUMBER} placeholder="Your number" />
                    <hr />

                    <label htmlFor={ENUM_FORM.LOGIN}> Enter login</label>
                    <Field id={ENUM_FORM.LOGIN} name={ENUM_FORM.LOGIN} placeholder="Your login" />
                    <hr />

                    <label htmlFor={ENUM_FORM.PASSWORD}> Enter password</label>
                    <Field id={ENUM_FORM.PASSWORD} name={ENUM_FORM.PASSWORD} placeholder="Your password" />
                    <hr />

                    <input type="submit" value={'VAlue'} />
                </Form>
            </Formik>
        </div>
    )
}