# 🏟 Demo

You can setup your own demo populated with sample data, including all you need to extensively try Chevereto anywhere.

::: tip
There's also a hosted demo at [demo.chevereto.com](https://demo.chevereto.com) (no administrative access).
:::

## Step-by-step guide

### Requirements

* [git](https://git-scm.com/)
* [Docker](https://www.docker.com/get-started)

Clone the [chevereto/docker](https://github.com/chevereto/docker) repository.

```sh
git clone git@github.com:chevereto/docker.git
```

### Running

Run demo shell script:

<code-group>
<code-block title="Paid">
```sh
docker/bin/demo.sh
```
</code-block>

<code-block title="Free">
```sh
docker/bin/demo-free.sh
```
</code-block>
</code-group>

### Destroy

Run `docker stop` and `docker rm`.

<code-group>
<code-block title="Paid">
```sh
docker stop chv-demo && docker rm -f chv-demo
```
</code-block>

<code-block title="Free">
```sh
docker stop chv-demo-free && docker rm -f chv-demo-free
```
</code-block>
</code-group>
