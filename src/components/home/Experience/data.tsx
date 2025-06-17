import junkieBack from "../../../images/junkielabs.png"
import hundiBack from "../../../images/hundi_d.png"
import logfireBack from "../../../images/logfire.png"
import logfireCli from "../../../images/easy.gif"
export type Experience= {
    id: number;
    name: string;
    detail: string;
    tech: string[];
    link?: string ;
    image: string
}

export type Experiences = {
    id: number;
    name: string;
    projects: Experience[]
}
export const experienceList:Experiences[] = [
    {
        id : 0,
        name: "@Constient Global Solutions",
        projects: [
            {
                id: 0,
                name: "Logfire Backend",
                detail: "Architected and developed core backend services for Logfire, a high-throughput, real-time log management and observability platform. Designed modular microservices in Golang and Python to handle log ingestion, alerting, rule-based filtering, and multi-tenant analytics. Implemented scalable event-driven architecture using Kafka, with data stored in ClickHouse for fast analytical queries and PostgreSQL for metadata. Services are containerized using Docker and orchestrated via Kubernetes.",
                tech: ["Golang", "Python", "Kafka", "ClickHouse", "PostgreSQL", "Redis", "gRPC", "REST APIs", "Kubernetes", "Docker"],
                link: "https://logfire.ai",
                image: logfireBack
            },
            {
                id: 1,
                name: "Logfire CLI",
                detail: "Developed a custom CLI tool in Golang to empower developers to stream, filter, and debug logs in real-time from their local terminals. The CLI interfaces with Logfire’s backend over secure REST/gRPC endpoints and supports flexible query patterns, authentication, and multi-tenant access control. Designed for performance and ease of use, this tool reduces debugging time and provides real-time observability directly from the command line.",
                tech: ["Golang", "REST", "gRPC", "OAuth", "Log Parsing"],
                link: "https://github.com/obslog-ai/cli",
                image: logfireCli // Placeholder image reference
            }
        ]
    },
    {
        id : 1,
        name: "@Junkielabs",
        projects: [
            {
                id: 0,
                name: "Junkielabs Backend",
                detail: "Developed using Django-Rest-Framework. Caters for an Open and Collaborative platform for developers, designers and innovators to come together on a project and collaborate. The platform will handle in mundane day-to-day tasks for efficient collaboration. ",
                tech: ["Django", "DynamoDb", "AWS-Lambda", "Zappa"],
                link: "https://junkielabs.in/",
                image: junkieBack
            },
            {
                id: 1,
                name: "Junkielabs Admin-Dashboard",
                detail: "Implemented in React, using React-Admin library. An Admin Dashboard integration with Backend Api for Database access and Super-User control.",
                tech: ["React", "TypeScript"],
                link: "https://junkielabs.in/",
                image: junkieBack
            },
            {
                id: 2,
                name: "Hundi Record-Book Backend",
                detail: "A Rest-Api in python using FastApi framework, with MongoDb as its nosql database. With features like Scheduled event triggers, notification system, analytics, OAuth based user-verification.",
                tech: ["FastApi", "MongoDB", "Firebase Authentication", "GCP"],
                image: hundiBack
            }
        ]
    }
]
