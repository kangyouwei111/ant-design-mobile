# Popup

<code src="./demos/index.tsx"></code>

# API

| Name           | Description                                                                                                                   | Type                                                               | Default         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------- |
| visible        | Whether visible                                                                                                               | `boolean`                                                          | `false`         |
| onMaskClick    | Triggered when the mask is clicked                                                                                            | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -               |
| destroyOnClose | Unmount content when not visible                                                                                              | `boolean`                                                          | `false`         |
| forceRender    | Render content forcely                                                                                                        | `boolean`                                                          | `false`         |
| getContainer   | To get the specified mounted `HTML` node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null`                         | `document.body` |
| afterClose     | Triggered when completely closed                                                                                              | `() => void`                                                       | -               |
| position       | The specified location of the pop-up                                                                                          | `'bottom' \| 'top' \| 'left' \| 'right'`                           | `'bottom'`      |
| className      | Container class name                                                                                                          | `string`                                                           | -               |
| style          | Container style                                                                                                               | `React.CSSProperties`                                              | -               |
| bodyClassName  | Content section class name                                                                                                    | `string`                                                           | -               |
| bodyStyle      | Content section style                                                                                                         | `React.CSSProperties`                                              | -               |
| maskClassName  | Mask class name                                                                                                               | `string`                                                           | -               |
| maskStyle      | Mask style                                                                                                                    | `React.CSSProperties`                                              | -               |
| onClick        | Triggered when clicked, used to stop event bubbles usually                                                                    | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -               |