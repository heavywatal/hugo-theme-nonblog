# hugo-theme-nonblog

This is a minimal theme for non-blog websites with a hierarchical sidebar

## Options

`config.toml`

```toml
+++
baseURL = "https://heavywatal.github.io/"
title = "Heavy Watal"
defaultContentLanguage = "ja"
uglyURLs = true
copyright = "(ɔ) 2008 Watal M. Iwasaki"

[params]
logo_src = "heavywatal.svg"
logo_alt = "heavywatal.svg"
theme_color = "#eeeeee"
images = ["https://avatars.githubusercontent.com/heavywatal"]

[params.author]
name = "Watal M. Iwasaki"

[params.social]
twitter = "@heavywatal"

[markup.goldmark.renderer]
unsafe = true

[markup.goldmark.extensions]
strikethrough = false

[markup.highlight]
noClasses = false

[services.googleAnalytics]
ID = "G-***"

[module]
[[module.imports]]
path = "github.com/heavywatal/hugo-theme-nonblog"

[taxonomies]
tag = "tags"

[[menu.main]]
    name = "R"
    identifier = "rstats"
    weight = 10
[[menu.main]]
    name = "Python"
    identifier = "python"
    weight = 20
+++
```

Front matter

```toml
+++
title = "Seaborn"
subtitle = "statistical data visualization"
tags = ["python", "stats"]
description = ""
images = ["https://example.com/image.jpg"]
[menu.main]
  parent = "python"
+++
```
