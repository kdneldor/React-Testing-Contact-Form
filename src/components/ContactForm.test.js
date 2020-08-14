import React from "react"
import ContactForm from "./ContactForm"
import { render } from "@testing-library/react";

test("tests message label text content", () => {
    //Arrange
    const { getByTestId } = render(<ContactForm/>)
    //Act
    const Message = getByTestId(/Message/i)
    //Assert
    expect(Message.textContent).toEqual("Message") 
})

test("tests email label text content", () => {
    //Arrange
    const { getByTestId } = render(<ContactForm/>)
    //Act
    const Email = getByTestId(/Email/i)
    //Assert
    expect(Email.textContent).toEqual("Email*") 
})

test("tests last name label text content", () => {
    //Arrange
    const { getByTestId } = render(<ContactForm/>)
    //Act
    const LastName = getByTestId(/LastName/i)
    //Assert
    expect(LastName.textContent).toEqual("Last Name*") 
})

test("tests first name label text content", () => {
    //Arrange
    const { getByTestId } = render(<ContactForm/>)
    //Act
    const FirstName = getByTestId(/FirstName/i)
    //Assert
    expect(FirstName.textContent).toEqual("First Name*") 
})



