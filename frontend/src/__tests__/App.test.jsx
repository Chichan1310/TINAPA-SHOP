import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App.jsx'

describe('App', () => {
  it('renders TINAPA SHOP title', () => {
    render(<App />)
    expect(screen.getByText('TINAPA SHOP')).toBeDefined()
  })
})
