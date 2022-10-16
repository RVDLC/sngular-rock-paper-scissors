import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const playerTestName = 'Durin'
let playerInput, buttonJoin;

beforeEach(async () => {
  render(<App/>)
  playerInput = screen.getByTestId('playerInput');
  buttonJoin = screen.getByRole('button', { name: 'Join' });
  userEvent.type(playerInput, playerTestName);
});

test('renders the home page', () => {
  expect(screen.getByRole('button', { name: 'Join' })).toBeDefined();
});

test('Logs in correctly', () => {
  userEvent.click(buttonJoin);
  
  expect(screen.getByTestId('playerName').textContent).toBe(playerTestName);
});

test('the game is executed correctly', async () => {
  userEvent.click(buttonJoin);

  userEvent.click(screen.getByTestId('handRock'));
  
  expect(screen.getByTestId('resultContainer').textContent).toBe('Your Rock');
  expect(screen.getByTestId('resultContainer').textContent).not.toContain('Oponent');

  await waitFor(() => {
    expect(screen.getByTestId('resultContainer').textContent).toContain('Oponent');
  },{timeout:2000});

});