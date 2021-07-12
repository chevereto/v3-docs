# Container Bootstrapped

::: danger
Use [Container Registry](../../setup/container/registry.md) for disposable container provisioning. Note that bootstrapped means that the application layer is provided on container run.
:::

## Why bootstrapping?

Ideally, you want to run Chevereto building your own image container image but that requires some setup. This method doesn't require registry setup. A volume must be used for the application files, ideally a bind mount.

We recommend using this method only if you are just trying the software or if you run it locally in your computer.

## Instructions

Check the repository at [chevereto/docker](https://github.com/chevereto/docker).

## Images

The images are published at [Docker Hub](https://hub.docker.com/r/chevereto/chevereto).
