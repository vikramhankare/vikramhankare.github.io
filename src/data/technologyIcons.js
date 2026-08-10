import { FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiPostgresql,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiGit,
  SiLinux,
  SiHibernate,
  SiJunit5,
} from "react-icons/si";
import { Code2, Network, Database } from "lucide-react";

export const technologyIcons = {
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  Spring: SiSpringboot,
  "Spring Security": SiSpringsecurity,
  "Spring Data JPA": SiHibernate,
  JPA: SiHibernate,
  Hibernate: SiHibernate,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Git: SiGit,
  Linux: SiLinux,
  "REST APIs": Code2,
  Microservices: Network,
  SQL: Database,
  JWT: Code2,
  JUnit: SiJunit5,
};