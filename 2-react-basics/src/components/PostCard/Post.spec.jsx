import { PostCard } from "."
import { render, screen } from "@testing-library/react";
import { postCardMock } from "./mock";

const props = postCardMock;

describe("<PostCard />", () => {
    it('should render PostCard correctly', () => {
    render(<PostCard {...props}/>);
    expect(screen.getByRole('img', {name: props.title}))
    .toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', /title 1/i)).toBeInTheDocument();
    expect(screen.getByText(/body/i)).toBeInTheDocument();
});
it('should match snapshot', () => {
        const {container} = render(<PostCard {...props}/>);
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toMatchSnapshot();
    })
})