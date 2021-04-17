# 🏟 Demo

You can setup your own demo populated with sample data, including all you need to extensively try Chevereto anywhere.

::: tip
There's also a hosted demo at [demo.chevereto.com](https://demo.chevereto.com) (no administrative access).
:::

## Step-by-step guide

### Requirements

* [git](https://git-scm.com/)
* [Docker](https://www.docker.com/get-started)

You will require to clone the [chevereto/docker](https://github.com/chevereto/docker) repository.

### Running

Run `demo.sh`

```sh
docker/bin/demo.sh
```

### Destroy

Run `docker stop` and `docker rm`.

```sh
docker stop chv-demo && docker rm -f chv-demo
```