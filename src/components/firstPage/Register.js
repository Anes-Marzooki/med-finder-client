import React, { Component } from "react";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      type: '',
      dropdownOpen: new Array(6).fill(false)
    };
  }

  // onChange = e => {
  //   this.setState({ [e.target]: })
  // }

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      type: this.state.type
    };

    this.props.registerUser(newUser, this.props.history);
  };

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return index === i ? !element : false;
    });
    this.setState({
      dropdownOpen: newArray
    });
  }
  
  render() {
    return (
      <div className=' align-items-center'>
        <Container>
          <Row className='justify-content-center'>
            <Col>
              <Card className='mx-4'>
                <CardBody className='p-4'>
                  <Form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className='text-muted'>Create your account</p>
                    <InputGroup className='mb-3'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='icon-user'></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id='name'
                        onChange={this.onChange}
                        value={this.state.name}
                        type='text'
                        placeholder='Username'
                        autoComplete='username'
                      />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id='email'
                        onChange={this.onChange}
                        value={this.state.email}
                        type='text'
                        placeholder='Email'
                        autoComplete='email'
                      />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='icon-lock'></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={this.onChange}
                        id='password'
                        type='password'
                        value={this.state.password}
                        placeholder='Password'
                        autoComplete='new-password'
                      />
                    </InputGroup>
                    <InputGroup className='mb-4'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='icon-lock'></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={this.onChange}
                        id='password2'
                        type='password'
                        value={this.state.password2}
                        placeholder='Repeat password'
                        autoComplete='new-password'
                      />
                    </InputGroup>
                    <Dropdown
                      direction='right'
                      isOpen={this.state.dropdownOpen[0]}
                      toggle={() => {
                        this.toggle(0);
                      }}
                    >
                      <DropdownToggle caret>Select your status</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => this.handleChange(User)}
                          dropDownValue='User'
                        >
                          User
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          onClick={() => this.handleChange(Pharmacy)}
                          dropDownValue='Pharmacy'
                        >
                          Pharmacy
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          onClick={() => this.handleChange(Doctor)}
                          dropDownValue='Doctor'
                        >
                          Doctor
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <Button type='submit' color='success' block>
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
