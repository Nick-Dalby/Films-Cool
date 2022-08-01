import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Work Sans', sans-serif;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  background-color: #a7e1f8;
}
a {
  text-decoration: none;
  color: #000;
}
ul {
  list-style: none;
}
.container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 120px 20px;
  text-align: center;
}

.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 50px;
  padding: 0 20px;
}

.heading p {
  color: #828282;
}

.form,
.content {
  width: 70%;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 10px;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
}

.form-group label {
  text-align: left;
  display: block;
  margin: 0 0 5px 3px;
}

.btn {
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  appearance: button;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn svg {
  margin-right: 8px;
}

.icon svg {
  margin-right: 0px;
}

.btn-block {
  width: 100%;
  margin-bottom: 20px;
}

.btn:hover {
  transform: scale(0.98);
}

.btn-container {
  display: flex;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 50px;
}

.loadingSpinnerContainer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loadingSpinner {
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #000 transparent #555 transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  .form {
    width: 90%;
  }

  .heading h1 {
    font-size: 2rem;
  }

  .heading p {
    font-size: 1.5rem;
  }
}


`

export const Pill = styled.div`
  background: #a7e1f8;
  border: 2px solid #000;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
`
export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    background-color: #000;
    content: '';
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`
