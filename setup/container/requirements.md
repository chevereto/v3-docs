# Container Requirements

To use containers you need a container engine like [Docker](https://www.docker.com/) and to manage and administer these images in a container registry.

There are many container registry alternatives to pick from. To name a few:

* Docker Hub
* GitHub Container Registry
* Google Cloud Container Registry
* Azure Container Registry

::: tip
Don't worry about image management, we have an automated one-time setup [Container Registry](registry.md) that will enable you to get all the benefits of containers without the hassles.
:::

## Why?

* One-time setup

Our container registry repo setup needs to be configured just once. From there, all the experience is just button clicking to instruct base image update and re-deploy.

* One-click experience

Get your container images one-click updated from the friendly Github web-based user interface. No more messy commands, just button clicking.

* Better isolation

Running the build process in disposable CI machinery is better and safer than using any other system. This makes the process way harder to temper with.
