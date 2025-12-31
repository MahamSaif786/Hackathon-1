---
sidebar_position: 2
title: 'Chapter 2: ROS 2 Core Concepts – Nodes, Topics, and Services'
---

# Chapter 2: ROS 2 Core Concepts – Nodes, Topics, and Services

## ROS 2 Architecture Overview

ROS 2 implements a distributed computing architecture built on the Data Distribution Service (DDS) standard. This architecture enables communication between different software components, called nodes, regardless of their physical location or the programming language used to implement them.

The core architectural concepts include:

- **Nodes**: Independent computational units that perform specific functions
- **Topics**: Communication channels for publishing and subscribing to data streams
- **Services**: Request-response communication patterns for synchronous operations
- **Actions**: Extended services for long-running operations with feedback

## Nodes as Independent Computational Units

In ROS 2, a node is the fundamental execution unit of a ROS program. Each node:

- Encapsulates a specific functionality or capability
- Communicates with other nodes through topics, services, or actions
- Can be implemented in different programming languages (C++, Python, etc.)
- Can run on the same or different machines
- Manages its own resources and lifecycle

Nodes provide a way to decompose complex robot behaviors into manageable, reusable components. For example, a mobile robot might have separate nodes for:

- Sensor data processing
- Path planning
- Motion control
- Navigation
- User interface

## Topics and Message-Based Communication

Topics enable asynchronous, many-to-many communication in ROS 2. Key characteristics include:

- **Publish-Subscribe Pattern**: Publishers send messages to topics, subscribers receive messages from topics
- **Decoupling**: Publishers and subscribers don't need to know about each other
- **Many-to-Many**: Multiple publishers can send to a topic, multiple subscribers can receive from it
- **Data-Driven**: Communication is driven by data availability rather than function calls

### Topic Communication Example

```text
Camera Node (Publisher) → Image Topic → Perception Node (Subscriber)
```

This pattern is ideal for sensor data distribution, where multiple components might need access to the same information.

## Services and Request-Response Patterns

Services provide synchronous, one-to-one communication for operations that require a guaranteed response. Key characteristics:

- **Request-Response**: Client sends request, server processes and returns response
- **Synchronous**: Client waits for response before continuing
- **One-to-One**: One client communicates with one server at a time
- **Stateless**: Each service call is independent

### Service Communication Example

```text
Navigation Node (Client) → Get Plan Service → Path Planning Node (Server)
```

Services are appropriate for operations like:
- Calculating a path to a goal
- Saving robot configuration
- Triggering a calibration procedure

## High-Level Mental Model of Data Flow in a Humanoid Robot

In a humanoid robot system, the ROS 2 architecture facilitates complex data flows:

### Sensory Processing Pipeline
1. **Raw Sensors** (cameras, IMUs, joint encoders) publish to sensor topics
2. **Perception Nodes** subscribe to sensor data and publish processed information
3. **State Estimation** nodes integrate multiple sensor sources
4. **Behavior Selection** nodes use processed information for decision-making

### Control Pipeline
1. **Behavior Nodes** publish high-level commands (e.g., "walk forward")
2. **Motion Planning** nodes subscribe to commands and publish joint trajectories
3. **Controller Nodes** subscribe to trajectories and send low-level commands to hardware
4. **Hardware Interface** nodes communicate directly with robot actuators

## Conceptual Examples

### Example 1: Humanoid Walking
- **Nodes**: Vision node, balance controller, walking gait generator, joint controllers
- **Topics**: Camera images, joint states, IMU data, walking commands
- **Services**: Calibrate sensors, stop walking, reset position

### Example 2: Object Manipulation
- **Nodes**: Object detection, inverse kinematics, grasp planning, arm controller
- **Topics**: Camera feeds, object poses, joint angles, end-effector commands
- **Services**: Pick up object, place object, home arm

This architecture enables complex robot behaviors while maintaining modularity and reusability of components.