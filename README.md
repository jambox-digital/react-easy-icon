# react-icon - reusable SVG icon component

I am using this approach for all kinds of icons in any project that uses react or react based libraries/frameworks for frontend.

This package was created to make using SVG's as icons easier and to eliminate the need to reinvent the wheel on every project again and again.

## What problem the package solves

It is highly reusable and since it is customizable it can be used standalone but also as a part of other component.

This component is used as a generic icon container without the path.

Paths of icons can be listed in the object and then we can import just the icons we need to fill that generic icon container.

## Limitation of react-icon component

Since this component is using single SVG path for creating the icon, all icons intended for use have to be optimized.

I wrote and article on how to optimize SVG's here, so feel free to take a look.

The second limitation is that this is for made for "flat", single-color icons. Hovers etc. can be made by targeting the CSS class and making appropriate styles.

Also you can put background color in the CSS class, but that's about how much more color it can have.

## react-icon props

Default `viewBox` value is opinionated as I tend to optimize icons to the size of 24 x 24 pixels.

If resizing the icon to the different size than 24px, just put bigger number in `width` prop and the icon will scale.

If the icon has aspect ratio different that 1:1, put the proper `viewBox` value and of course add proper `width` and `height` values.


| Prop | Required | Type | Default value |
---|    ---|    ---|    ---|
| d    | Yes   | string    | - |
| width | No | number/string | 24 |
| height | No | number/string | 'auto' |
| color | No | string | 'black' |
| viewBox | No | string | '0 0 24 24' |
| className | No | string | - |
| ariaHidden | No | boolean | true |
| role | No | string | 'presentational'|


## Applying styles to icon component
You can pass the styles through the `className` prop. That prop is attached to the `SVG` element. Only other element used here is the `<path />`

HTML example
```html
<a href="/contact">
    <ReactIcon className="react-icon" d={Icon.ARROW_LEFT} />
</a>
```

SCSS example
```scss
.react-icon {
    border-radius: 50%;
    background-color: #ffa500;
    path {
        fill: #fff;
    }
}

a:hover .react-icon {
    path {
        fill: #000;
    }
}
```

## How to use it in the project

Just import the ReactIcon component and import some icons object with appropriate SVG path data

```jsx
import ReactIcon from 'react-icon';
import { icons } from '../components/Icons';

const Button = ({}) => (
    <button type="button">
        <ReactIcon d={icons.EMAIL}>
    <button>    
);

export default Button
```

If you are wondering how the icons object should look like, take a look at the example below.

```js
const icons = {
    CART: '',
    EMAIL: '',
    ARROW_LEFT: '',
    ARROW_DOWN: ''
}
export {icons}
```
## react-icon demo
will be added later
## Instructions for contributors
will be added later