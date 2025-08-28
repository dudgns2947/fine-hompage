import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #FF6B35;
    --primary-hover: #E55A2B;
    --secondary-color: #2C3E50;
    --accent-color: #F39C12;
    --text-primary: #2C3E50;
    --text-secondary: #7F8C8D;
    --text-light: #FFFFFF;
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --bg-dark: #2C3E50;
    --border-color: #E9ECEF;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 4px 20px rgba(0, 0, 0, 0.15);
    --border-radius: 8px;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
    min-width: 320px;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: var(--transition);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea, select {
    font-family: inherit;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 0.75rem;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
    }
  }

  /* 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-hover);
  }

  /* 반응형 폰트 크기 */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 13px;
    }
  }
`;

export const theme = {
  colors: {
    primary: '#FF6B35',
    primaryHover: '#E55A2B',
    secondary: '#2C3E50',
    accent: '#F39C12',
    textPrimary: '#2C3E50',
    textSecondary: '#7F8C8D',
    textLight: '#FFFFFF',
    bgPrimary: '#FFFFFF',
    bgSecondary: '#F8F9FA',
    bgDark: '#2C3E50',
    borderColor: '#E9ECEF',
  },
  shadows: {
    small: '0 2px 10px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 20px rgba(0, 0, 0, 0.15)',
    large: '0 8px 30px rgba(0, 0, 0, 0.2)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },
  transitions: {
    fast: 'all 0.2s ease',
    normal: 'all 0.3s ease',
    slow: 'all 0.5s ease',
  },
};

export type Theme = typeof theme;
