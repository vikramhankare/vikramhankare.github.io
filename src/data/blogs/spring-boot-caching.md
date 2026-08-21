

# Understanding Caching in Spring Boot

Caching is a common technique used to improve application performance by avoiding repeated and expensive operations.

Instead of fetching the same data repeatedly, an application can temporarily store frequently accessed information and reuse it when required.

## Why caching matters

Consider an API that repeatedly performs the same database query.

Without caching:

- The API receives a request.
- The application queries the database.
- The database returns the result.
- The response is sent to the client.

With caching, frequently requested data can be reused.

## Architecture

Here is a sample image from this article.

![Caching Architecture](../assets/spring-boot-caching/test-image.png)

## A simple example

```java
@Cacheable("users")
public User getUser(Long id) {
    return userRepository.findById(id)
            .orElseThrow();
}
```

The first request may access the database.

Subsequent requests can retrieve the cached result.

## Things to consider

Caching is useful, but it also introduces questions around:

Cache expiration
Cache invalidation
Memory usage
Consistency
Distributed caching

## Conclusion

Caching can significantly improve application performance when used appropriately.