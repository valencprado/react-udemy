/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
import { Home } from './index';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from "@testing-library/user-event";

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: "teste",
        body: "teste",
        url: "img1.jpg"
      }, {
        userId: 2,
        id: 2,
        title: "testee",
        body: "testee",
        url: "img2.jpg"
      }, {
        userId: 3,
        id: 3,
        title: "teste3",
        body: "teste3"
      },


    ]));
  })


];

const server = setupServer(...handlers);
describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  })
  afterEach(() => {
    server.resetHandlers();
  })
  afterAll(() => {
    server.close();
  })
  it('should render input, button and posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts com esse nome. Tem certeza que é isso que está procurando?');
    expect.assertions(3);

    await waitForElementToBeRemoved(noMorePosts);
    const search = screen.getByPlaceholderText(/type here/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: /title/i })
    expect(images).toHaveLength();


    const button = screen.getByRole('button', { name: /load more posts/i })
    expect(button).toHaveLength();



  });

  it('should search posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts com esse nome. Tem certeza que é isso que está procurando?');
    // expect.assertions(3);

    await waitForElementToBeRemoved(noMorePosts);
    const search = screen.getByPlaceholderText(/type here/i);
    expect(screen.getByRole('heading', { name: "teste" })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: "testee" })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: "teste3" })).toBeInTheDocument();

    userEvent.type(search, "teste");
    expect(screen.getByRole('heading', { name: "teste" })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: "testee" })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: "teste3" })).not.toBeInTheDocument();

    userEvent.clear(search, "teste");
    expect(screen.getByRole('heading', { name: "teste" })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: "testee" })).toBeInTheDocument();

    userEvent.type(search, "aaaaaaaaa");
    expect(screen.getAllByText("Não existem posts :(")).toBeInTheDocument();

  });

  it('should load more posts when clicked', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts com esse nome. Tem certeza que é isso que está procurando?');
    expect.assertions(3);

    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole('button', { name: /load more posts/i })
    userEvent.click(button)
    expect(screen.getByRole('heading', { name: "teste" })).toBeInTheDocument();
    expect(button).toBeDisabled();

  });
});
