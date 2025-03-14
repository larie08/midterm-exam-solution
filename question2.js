function delayedGreeting(name) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
  }, 2000);
}

// Example usage:
delayedGreeting("Alice"); // Logs "Hello, Alice!" after 2 seconds
