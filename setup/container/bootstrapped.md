# Container Bootstrapped

::: danger
Use [Container Registry](../../setup/container/registry.md) for disposable container provisioning. Note that bootstrapped means that the application layer is provided on container run.
:::

## Why bootstrapping?

Ideally, you want to run Chevereto by building your own image container image for it. But that requires setup. This method doesn't require registry setup.

We recommend using this method if you are trying Chevereto or if you run it local in your computer for **development purposes**.

## Instructions

Check the repository at [chevereto/docker](https://github.com/chevereto/docker).