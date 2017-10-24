# nonblog

This is a minimal theme for non-blog websites with a hierarchical sidebar

## Options

`config.toml`

```toml
+++
baseURL = "https://heavywatal.github.io/"
theme = "nonblog"
uglyURLs = true
pygmentsCodefences = true
pygmentsUseClasses = true
googleAnalytics = "UA-***"

[params]
author = "Watal M. Iwasaki"
base_path = "/"
logo_src = "heavywatal.svg"
logo_alt = "LOGO"
theme_color = "#e08010"
copyrights = "(ɔ) 2008 Watal M. Iwasaki"
google_cse = "00*******************:***********"
og_image = "https://avatars.githubusercontent.com/heavywatal"
twitter_site = "@heavywatal"

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
og_image = "https://example.com/image.jpg"
[menu.main]
  parent = "python"
+++
```
