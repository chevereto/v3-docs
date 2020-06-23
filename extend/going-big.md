# Going big

Hosting a massive image hosting website can be something very challenging and hard to achieve. At Chevereto we care about it and we have prepared this guide with insights on which things you need to know before trying to achieve such endeavour.

## Server

More users means more server load and processing. Any large image hosting website will need certain kind of hardware to perform all the functionalities in a proper manner without delays or downtimes. Using a dedicated machine with a huge amount of server resources, with an outstanding network and with a professional setup will be certainly a great start.

The server optimizations that you should consider are:

- NGiNX or any kind of optimized server with Micro-cache
- OPCache or any similar PHP optimizer
- IP based blocks for malicious requests
- Mandrill or any similar SMTP API to send transactional emails
- High-end server hardware

Since the server is the machine where all the image processing, data storage and everything happens, it is a good idea to try to leverage all the load you can. There are other optimizations that must be taken in consideration that will help to leverage the server load like using an [External storage](#external-storage) and/or enable a [CDN](#content-delivery-network-cdn).

## External storage

External storage is crucial when you going big because you will be able to distribute the storage among several servers. This means that all those uploads which are shared with thousands will be distributed rather than served stressing one single machine. This helps a lot to leverage the server bandwidth and to free the HDD from intensive I/O. Check the [Storages documentation](./storages.md) to get started.

## Content Delivery Network (CDN)

The CDN acts like an optimizer which makes your website faster based in distributed global request cache and just like external storage it also leverage server load. Chevereto allows you to use CDN to serve all the static local files of your main server (JS, CSS, etc.) which makes your website loads really fast depending in the CDN relay.

You can also use CDN on top of each one of your external storage servers which helps to get faster speeds and reliability. Check the [CDN documentation](./CDN.md) for more information about this.

## Software updates

Every software or script is a system in constant evolution so you should always try to run updated software. In the case of Chevereto, high system performance is one of our main goals so is highly recommended to run your website updated with latest stable version.

Note that server dependencies and libraries are always being updated but for production servers you should only rely in stable and tested versions. Don't try experimental versions in your website unless you know what you are doing.

## Anything else?

At script layer there are always neat improvements that benefit the system performance and if you detect functionalities or things that could be optimized don't hesitate to [let us know](https://chevereto.com/community/forums/requests-ideas-and-suggestions.1).
