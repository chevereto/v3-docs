# Container Introduction

Containers is a term to refer to a software package that you run in a OS-level virtualization. To put it simple, a container is a stand-alone instance of an application including all what the application needs to operate. This includes the application files, the library requirements and up to the operating system.

You can learn more about containers in the [Wikipedia](https://en.wikipedia.org/wiki/Docker_(software)) and at the [OCI](https://opencontainers.org/).

## Why?

The container technology allow us to ship the entire Chevereto application servicing, enabling users to carry application updates without the hassle of the base system requirements. With this technology the software can be continuously one-click deployed in the form of disposable container images.

Main advantages of container is that provisioning is way more predictable and also hassle-free as you don't need to carry any package updating, never worry about PHP (or any other requirement).

### Any downsides?

We could say that the downside is that containers are still a relatively green technology for the average consumer so the offering is not that massive yet in terms of service providers. Leaving that apart you will notice that it really doesn't have any downside, specially if you wan to run multiple applications or instances in the same machine.

## Requirements

To use containers you need a container engine, besides [Docker](https://www.docker.com/) there's a [list of software](https://en.wikipedia.org/wiki/List_of_Linux_containers) you can use.

You will also need to get used to build your own Chevereto container images, which may be deal breaker for most users. Don't worry, our [Container Registry](registry.md) guide uses **GitHub Actions** to reduce the complexity of this to simple one-click actions.
