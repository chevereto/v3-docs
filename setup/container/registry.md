# Container Registry

Use [chevereto/container-builder](https://github.com/chevereto/container-builder) to easily create your own private Chevereto container images which will be available in the container registry of your choice.

## How it works?

The system works by using a GitHub template repository which you clone in your account. That repository comes with GitHub Actions and using repository secrets the actions will be used in your own context.

As it works using GitHub Actions, you can use webhooks and all the available GitHub API to trigger the repository actions.

## Setup

The [SETUP](https://github.com/Chevereto/container-builder/blob/main/SETUP.md) guide explains how to use the template for your own project.

## Building

The [BUILDING](https://github.com/Chevereto/container-builder/blob/main/BUILDING.md) guide follows the process to generate your container images on demand.

## Updating

The [UPDATING](https://github.com/Chevereto/container-builder/blob/main/UPDATING.md) guide outlines the process required to update your repository changes with the new updates published in the base template. Follow this guide to keep your system provisioning always updated.
