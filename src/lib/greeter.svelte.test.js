import { render, screen } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import Greeter from './greeter.svelte'

test('initial greeting', () => {
  render(Greeter)

  expect(screen.queryByText('Hello World!')).toBeInTheDocument();
})
