# hugo-theme-nonblog

This is a minimal theme for non-blog websites with a hierarchical sidebar

## Options

`config.toml`

```toml
+++
baseURL = "https://heavywatal.github.io/"
theme = "hugo-theme-nonblog"
uglyURLs = true
pygmentsCodefences = true
pygmentsUseClasses = true
googleAnalytics = "UA-***"
copyright = "(ɔ) 2008 Watal M. Iwasaki"

[author]
name = "Watal M. Iwasaki"
twitter = "@heavywatal"

[params]
logo_src = "heavywatal.svg"
logo_alt = "LOGO"
theme_color = "#e08010"
google_cse = "00*******************:***********"
og_image = "https://avatars.githubusercontent.com/heavywatal"

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
