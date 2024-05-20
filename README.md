# About
A lightweight React UI-component library.

![Alt text](preview.png?raw=true "Preview")

## Features
 - Over 30 custom components
 - Over 450+ customizable icons
 - Responsive (mobile-friendly)
 - Styleable & Customizable

## Installation

Download the latest repo.
Place the "xui" folder within your "/components" directory.

## Usage

To begin using any component, simply reference it inside your import statement.

```
import {
  Page,
  Title
} from './components/xui';

function App() {
  return (
      <Page>
        <Title>Hello!<Title>
      </Page>
  );
}
```

## Styling

A style configuration file can be found inside the 'xui' parent directory, titled 'Theme.css'.

```
:root {
    --filler-primary: #141519;
    --filler-secondary: #1D1E24;
    --primary: #2983ff;
    --primary-light: rgba(41, 98, 255, 0.2);
    ...
}
```

#### Conclusion

This project was originally made to cater to specific needs but was designed to be easily used for anything. Adequate documentation for the components (props) does not yet exist.
