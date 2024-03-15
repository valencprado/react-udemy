import userEvent from '@testing-library/user-event';
import { Button } from '.';
import { render, screen } from "@testing-library/react";

describe('<Button />', () => {
    it('should render the button with the text', () => {
        render(<Button text="Load more" />);
        const button = screen.getByRole('button', { name: /load more/i });
        expect.assertions(1);
        expect(button).toBeInTheDocument();
    })
     it('should call function on click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn}/>);
        const button = screen.getByRole('button', { name: /load more/i });
        userEvent.click(button);
        // fireEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    })
    it('should be disabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true}/>);
        const button = screen.getByRole('button', { name: /load more/i });
        userEvent.click(button);
        expect(button).toBeDisabled();
    })
    it('should be disabled when disabled is false', () => {
        render(<Button text="Load more" disabled={false}/>);
        const button = screen.getByRole('button', { name: /load more/i });
        userEvent.click(button);
        expect(button).toBeEnabled();
    })
});