# Activity Instructions

## Break Out Activity #1

- Modify the `onClick` behavior of our Add to Cart `<button>` to render only an 
`<h2>` element containing `“Added to Cart”` in place of Card details.

    - Make sure that the appropriate `<button>` labels are also rendering.

- 💡 Try using a ternary operator to dynamically render `<button>` labels based 
upon `isAdded` state.

## Break Out Activity #2

- Create a `<Button />` Component to enable each Button to manage its own `isToggled` state.

- ❗ Note that `isToggled` will replace the behaviors handled by `isLiked` and `isAdded` in `<Card />`.

- 💡 To configure each `<Button />`, try passing a `name` prop from `Card.js`.