# Устройство класса Walker

### Интерфейс
Нужно подумать
как реализовать RawWalker и classWalker
```typescript
interface IWalker {
	middlewares: [function],
	genUid(node: any, parentNode: any): string,
	validate(node: any, schemaChunk: any): boolean
}
```

### Реализация базового класса

```typescript
class Walker implements IWalker {

}
```
**на данный момент это пример документации**