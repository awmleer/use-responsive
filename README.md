# useResponsive

React hook for responsive design.

## API

```typescript
  interface ResponsiveConfig {
    [key: string]: number;
  }
  interface ResponsiveInfo {
    [key: string]: boolean;
  }

  function configResponsive(config: ResponsiveConfig): void
  function useResponsive(): ResponsiveInfo
```

## The `useResponsive` Hook

Use `useResponsive` to get responsive info in components.

```javascript
function App() {
  const info = useResponsive() // info is {"xs":true,"sm":true,"md":true,"lg":false,"xl":false}
  return (
    <div>
      {info.md && <p>Window width >= middle</p>}
      {info.lg && <p>Window width >= large</p>}
    </div>
  )
}
```

## Config

The default responsive config is the same as Bootstrap's breakpoints:

```javascript
{
  'xs': 0,
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1200,
}
```

If you wish to config your own breakpoints, you can use `configResponsive`:

(Attention: You only need to set your config once, so don't call this function in components.)

```javascript
configResponsive({
  'xs': 0,
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1200,
})
```
