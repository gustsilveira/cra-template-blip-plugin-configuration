import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../Home';

jest.mock('plugin-general-configuration', () => {
    return function GeneralConfiguration(props, ref) {
        return (
            <div data-testid="config-package">
                <span>content</span>
            </div>
        );
    };
});
jest.mock('plugin-attendance-time', () => {
    return function AttendanceTime(props, ref) {
        return (
            <div data-testid="attendance-package">
                <span>content</span>
            </div>
        );
    };
});

describe('Home page', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
