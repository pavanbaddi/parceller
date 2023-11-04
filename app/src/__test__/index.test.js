/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '../app/pages/index'

describe('Home', () => {
    it('renders a heading', () => {
        const { container } = render(<Home />)
        expect(container).toMatchSnapshot()
    })
})