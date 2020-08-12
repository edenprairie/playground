https://fastapi.tiangolo.com/features/
https://github.com/Redocly/create-openapi-repo#generator-openapi-repo--
也就近几年的事。2014年初龟叔在湾区搞了个asyncio的讲座，那时候还在做。紧接着
实验性质的异步库在3.4的时候首次发布，同时搞了个backport给2.7的trollius。进化
得比较完备的时候是2016年底的3.6了，从那时候开始到现在asyncio真正开始发力

微框架里几个比较出名的项目:

Sanic
https://github.com/huge-success/sanic

FastAPI
https://fastapi.tiangolo.com

web框架标杆Django五天前发布的最新3.1搞定了asyncio进化的第二步（第一步是去年
底3.0的ASGI支持，第三步3.2预计要最终搞定全框架异步比如数据库层）：
https://docs.djangoproject.com/en/3.1/releases/3.1/

Celery原作者Ask的Python流处理框架Faust
https://faust.readthedocs.io/en/latest/

这几个里面除了Django是大而全的从sync时代进化而来以外，其余都是以asyncio为基
础全新开发的。而Django这五六年基本没人用它的全框架，大多是配合DRF做纯API后端
，也是很轻巧的。整个Python社区都是往小而精进化，大幅提升性能的同时也大幅降低
代码复杂度，维护起来更容易

十年前Python要做高并发得上Twisted那样恶心的库，之后有了Celery还有一些奇技淫
巧像gevent、eventlet这样的，再有就是偏门tornado一类。这几年asyncio成体系之后
，以前的方案都不香了，好东西层出不穷。更大的利好是今年2.7正式EOL，终于可以彻
底不管遗老遗少了（这都提前十多年宣布了，好多2.7遗老遗少还如丧考妣）

2016年开始Python对Java的反超不全是data用户的贡献，asyncio和Python 3的新功能
功不可没。asyncio扬长避短，绕过GIL造成的多线程问题，在新的生态下与Go一起把前
几年Node的后端占有率又给吃回来了。Python的性能已经不是瓶颈

【 在 guvest (我爱你老婆Anna) 的大作中提到: 】
: 能否Python asyncio 展开说下？有测评可以看吗？
: <br>: 给你指条明路，Python/Rust/Go这三个可以看看，JavaScript顺带也可以，其他
: 的特别
: <br>: 是Java就免了
: <br>: Python你要做data另说，不做data就只看asyncio之后的新生态，3.6 起步。之
: 前的那
: <br>: 些老版本垃圾教程别看了，特别是爬虫啥的
: <br>: 至少六七年前我就在这个版上呼吁别再入Java的坑了，很多人不听。结果没几年
: ，2016
: <br>: 的时候Python就反超Java，这几年更不用说了，再打脸没有意思
: ...................
