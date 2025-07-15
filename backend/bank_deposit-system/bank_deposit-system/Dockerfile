FROM eclipse-temurin:21-jdk AS runtime

WORKDIR /app

# Copy the Quarkus JVM build output
COPY target/quarkus-app/ ./quarkus-app/

EXPOSE 8080

# Use Quarkus launcher
ENTRYPOINT ["java", "-jar", "quarkus-app/quarkus-run.jar"]
