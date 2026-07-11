# Hands-on 4: Difference between JPA, Hibernate and Spring Data JPA

## Objective

Understand the differences between Java Persistence API (JPA), Hibernate, and Spring Data JPA.

---

## Java Persistence API (JPA)

### Definition

Java Persistence API (JPA) is a specification defined under JSR 338 for persisting, reading, and managing data from Java objects.

### Features

* Defines standards for Object Relational Mapping (ORM)
* Provides annotations such as `@Entity`, `@Table`, `@Id`, and `@Column`
* Does not provide an implementation
* Requires an implementation such as Hibernate

### Example

```java
@Entity
@Table(name = "country")
public class Country {

    @Id
    private String code;

    private String name;
}
```

---

## Hibernate

### Definition

Hibernate is an ORM framework and one of the most popular implementations of JPA.

### Features

* Implements JPA specification
* Converts Java objects into database records
* Generates SQL automatically
* Supports transactions and caching

### Example

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();
session.close();
```

### Drawbacks

* Requires more boilerplate code
* Manual session and transaction handling

---

## Spring Data JPA

### Definition

Spring Data JPA is a framework built on top of JPA implementations such as Hibernate.

### Features

* Reduces boilerplate code
* Provides ready-made CRUD operations
* Automatically manages transactions
* Simplifies repository creation

### Example

#### EmployeeRepository.java

```java
public interface EmployeeRepository
        extends JpaRepository<Employee, Integer> {

}
```

#### EmployeeService.java

```java
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
```

---

## Comparison between Hibernate and Spring Data JPA

### Hibernate

```java
public Integer addEmployee(Employee employee){

    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;

    try {
        tx = session.beginTransaction();

        employeeID =
            (Integer) session.save(employee);

        tx.commit();
    }
    catch (Exception e) {

        if(tx != null) {
            tx.rollback();
        }

        e.printStackTrace();
    }
    finally {
        session.close();
    }

    return employeeID;
}
```

### Spring Data JPA

```java
@Transactional
public void addEmployee(Employee employee) {

    employeeRepository.save(employee);
}
```

---

## Difference between JPA, Hibernate and Spring Data JPA

| Feature                | JPA                      | Hibernate     | Spring Data JPA             |
| ---------------------- | ------------------------ | ------------- | --------------------------- |
| Type                   | Specification            | Framework     | Framework                   |
| Implementation         | No                       | Yes           | Uses Hibernate              |
| ORM Tool               | No                       | Yes           | Uses Hibernate ORM          |
| Database Operations    | Defined by specification | Implemented   | Simplified                  |
| Boilerplate Code       | Medium                   | High          | Very Low                    |
| Transaction Management | No                       | Manual        | Automatic                   |
| CRUD Operations        | Not Directly Available   | Manual Coding | Built-in Repository Methods |
| Ease of Use            | Moderate                 | Moderate      | Easy                        |

---

## Architecture

```text
Application
      ↓
Spring Data JPA
      ↓
Hibernate
      ↓
JPA Specification
      ↓
Database
```

---

## Advantages of Spring Data JPA

* Reduces coding effort
* Provides built-in CRUD methods
* Easy integration with Spring Boot
* Automatic transaction management
* Faster application development

---

## Conclusion

JPA is a specification that defines persistence standards. Hibernate is an ORM framework that implements JPA. Spring Data JPA is a higher-level abstraction built on top of Hibernate that reduces boilerplate code and simplifies database operations.
