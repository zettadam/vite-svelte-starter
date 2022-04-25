import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/svelte'

import App from '../App.svelte'

describe('App', () => {
  test('renders the main page', () => {
    render(App)

    expect(screen.getByText(/Svelte Starter \(Vite\)/))
    expect(screen.getByText(/© Company 2022/))
  })
})