/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { TextInput } from "."
import userEvent from "@testing-library/user-event";

describe('<TextInput />', () => {
    it('should have a value of searchValue', () => {
       const fn = jest.fn();
       render(<TextInput handleChange={fn} searchValue={'testando'}/>);
       const input = screen.getByPlaceholderText('type here');
       expect(input).toBeInTheDocument();
       expect(input.value).toBe('testando');
    });
    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn}/>);
        const input = screen.getByPlaceholderText('type here');
        const value = 'o valor';
        userEvent.type(input, value);
        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(7);

    });
      it('should match snapshot', () => {
        const {container} = render(<TextInput />);
        expect(container.firstChild).toMatchSnapshot();
    })
})
