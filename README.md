# react-easy-icon - reusable SVG icon component

I am using this approach for all kinds of icons in any project that uses react or react based libraries/frameworks for frontend.

This package was created to make using SVG's as icons easier and to eliminate the need to reinvent the wheel on every project again and again.

## What problem the package solves

It is highly reusable and since it is customizable it can be used standalone but also as a part of other component.

This component is used as a generic icon container without the path.

Paths of icons can be listed in the object and then we can import just the icons we need to fill that generic icon container.

## Limitation of react-easy-icon component

Since this component is using single SVG path for creating the icon, all icons intended for use have to be optimized.

I wrote and article on how to optimize SVG's here, so feel free to take a look.

The second limitation is that this is for made for "flat", single-color icons. Hovers etc. can be made by targeting the CSS class and making appropriate styles.

Also you can put background color in the CSS class, but that's about how much more color it can have.

## react-easy-icon props

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
    <ReactEasyIcon className="react-svg-icon" d={Icon.ARROW_LEFT} />
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
import ReactEasyIcon from 'react-easy-icon';
import icons from './icons';

const Button = ({}) => (
    <button type="button">
        <ReactEasyIcon d={icons.CART}>
    <button>    
);

export default Button
```

If you are wondering how the icons object should look like, take a look at the example below.

```js
const icons = {
  BULLSEYE:
    "M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 9a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 15a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-19a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
  CART:
    "M11.13 19.33a2.69 2.69 0 1 1-3.64 0H4.4V1.87l-2.13-.79H1.25V0h1.03l3.2 1.06v3.25l17.26 2.28.01 8.48H5.47v2.8l15.09.8a2.7 2.7 0 1 1-2.32.66h-7.1Zm8.93.36a1.62 1.62 0 1 1 0 3.23 1.62 1.62 0 0 1 0-3.23Zm-10.75 0a1.62 1.62 0 1 1 0 3.23 1.62 1.62 0 0 1 0-3.23ZM5.47 14h16.2V7.54L5.47 5.4V14Z"
};

export default icons;
```
## react-icon demo
Head over to [CodeSandbox](https://codesandbox.io/s/react-easy-icon-example-1tbgq3) for live demo
## Instructions for contributors
will be added later