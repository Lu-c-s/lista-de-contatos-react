import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import ContactInfo from '../components/ContactInfo';
import Contact from '../components/Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('ContactInfo renders all contact info correctly', () => {
  const contactTest = {
    "general": {
      "firstName": "Liana",
      "lastName": "Crooks",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg",
      "id": "0"
    },
    "job": {
      "company": "Ledner, Johnson and Predovic",
      "title": "Investor Functionality Coordinator"
    },
    "contact": {
      "email": "Gerry_Hackett77@gmail.com",
      "phone": "(895) 984-0132"
    },
    "address": {
      "street": "1520 Zemlak Cove",
      "city": "New Devon",
      "zipCode": "42586-7898",
      "country": "Guinea-Bissau"
    }
  }
  const tree = renderer.create(
    <ContactInfo contact={contactTest} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})

test('Contact renders contact card correcly', () => {
  const contactTest = {
    "general": {
      "firstName": "Liana",
      "lastName": "Crooks",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg",
      "id": "0"
    },
    "job": {
      "company": "Ledner, Johnson and Predovic",
      "title": "Investor Functionality Coordinator"
    },
    "contact": {
      "email": "Gerry_Hackett77@gmail.com",
      "phone": "(895) 984-0132"
    },
    "address": {
      "street": "1520 Zemlak Cove",
      "city": "New Devon",
      "zipCode": "42586-7898",
      "country": "Guinea-Bissau"
    }
  }
  const tree = renderer.create(
    <Contact
        key={contactTest.general.id}
        id={contactTest.general.id}
        clicked={() => props.clicked( contactTest.general.id )}
        firstName={contactTest.general.firstName}
        lastName={contactTest.general.lastName}
        avatar={contactTest.general.avatar}
        company={contactTest.job.company} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
