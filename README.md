Node.js - Jobs Queue
==================

This project demonstrante how to implement job queues in Node.js using [Bull](https://github.com/optimalbits/bull), backed by [Redis](https://redis.io/).

This architecture supports clustering the server safely, as Bull takes care of load-balancing and synchronization.

## Key Features and Concepts
- Multiple queues (example: HTML Parsing, Video Transcoding)
- Adding jobs to a queue
- Repeated jobs (cron jobs)
- Monitoring UI

## Instructions
```
npm install
npm start
open http://localhost:3000/jobs
```

## Dependencies

As this project uses Redis to store the jobs, you need to have Redis installed. The default Redis connection settings are used, with support for custom settings using environment variables.

## Environment Variables
- `PORT` (default: `3000`) — Web server port
- `REDIS_HOST` (default: `127.0.0.1`)
- `REDIS_PORT` (default: `6379`)
