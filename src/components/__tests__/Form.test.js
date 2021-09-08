import React from "react";
import { render, cleanup } from "@testing-library/react";
import { getByPlaceholderText, getByTestId, fireEvent } from "@testing-library/dom";
import Form from "components/Appointment/Form";



describe("Form", () => {


afterEach(cleanup);

  const interviewers = [
    {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];


  it("renders without student name if not provided", () => {
    const { getByPlaceholderText } = render(<Form interviewers={interviewers} />);
    expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
  });

  it("renders with initial student name", () => {
    const { getByTestId } = render(<Form interviewers={interviewers} name="Lydia Miller-Jones" />);
    expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
  });

 // BUG: Unable to find an element with the text: /student name cannot be blank
  it("validates that the student name is not blank", () => {
    const onSave = jest.fn();
    const { getByText } = render(
    <Form interviewers={interviewers} onSave={onSave} />);

    fireEvent.click(getByText("Save"));
    expect(getByText(/student name cannot be blank/i)).toBeInTheDocument();
   
    // do not call onSave
    expect(onSave).not.toHaveBeenCalled();
  });
 
  
  it("calls onSave function when the name is defined", () => {
    const onSave = jest.fn();

    const { getByText, queryByText } = render(
      <Form interviewers={interviewers} 
            name="Lydia Miller-Jones" 
            onSave={onSave} /> );

    fireEvent.click(getByText("Save"));

    expect(queryByText(/student name cannot be blank/i)).toBeNull();
    // onSave is called once
    expect(onSave).toHaveBeenCalledTimes(1);
  
    /* 5. onSave is called with the correct arguments */
    expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", null);
  }); 
});