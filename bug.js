```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting count to a string
    setCount('0');
  }, []);

  return <div>Count: {count}</div>;
}
```