// import React from 'react';

// import {Form, Icon, Input, Button} from 'antd';
// const FormItem = Form.Item;

// class Login extends React.Component {
//   onSubmit = e => {
//     e.preventDefault ();
//     this.props.form.validateFields ((err, values) => {
//       if (!err) {
//         this.props.submitLoginDetailsLoading (this.props.loginState, values);
//       }
//     });
//   };

//   render () {
//     const {getFieldDecorator} = this.props.form;
//     return (
//       <div
//         style={{
//           width: '300px',
//           transform: 'translate(-50%, -50%)',
//           left: '50%',
//           top: '50%',
//           marginRight: '-50%',
//           position: 'absolute',
//           boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
//           borderRadius: '12px',
//           padding: '2em 2em 0em',
//         }}
//       >
//         <Form onSubmit={this.onSubmit}>
//           <FormItem>
//             {getFieldDecorator ('zipCode', {
//               rules: [{required: true, message: 'Please provide Zip Code!'}],
//             }) (
//               <Input
//                 placeholder="Zip Code"
//                 type="number"
//               />
//             )}
//           </FormItem>
//           <FormItem>
//             {getFieldDecorator ('password', {
//               rules: [{required: true, message: 'Please Provide Password!'}],
//             }) (
//               <Input
//                 prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
//                 type="password"
//                 placeholder="Password"
//               />
//             )}
//           </FormItem>
//           <FormItem>
//             <Button
//               type="primary"
//               htmlType="submit"
//               style={{
//                 transform: 'translate(-50%, -50%)',
//                 left: '50%',
//                 top: '50%',
//                 marginRight: '-50%',
//                 marginTop: '20px',
//               }}
//             >
//               Submit
//             </Button>
//           </FormItem>
//         </Form>
//       </div>
//     );
//   }
// }

// const WrappedHorizontalLoginForm = Form.create () (Login);

// export default WrappedHorizontalLoginForm;
