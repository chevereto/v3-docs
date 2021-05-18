# 🏟 Demo

Build your own Chevereto demo with sample data, all you need to extensively try Chevereto anywhere.

::: tip hosted demo
See a hosted demo at [demo.chevereto.com](https://demo.chevereto.com) (no admin access).
:::

## Step-by-step guide

### Requirements

* [git](https://git-scm.com/)
* [Docker](https://www.docker.com/get-started)

Clone the [chevereto/docker](https://github.com/chevereto/docker) repository.

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
