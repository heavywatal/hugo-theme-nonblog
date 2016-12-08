# nonblog

This is a minimal theme for non-blog websites with a hierarchical sidebar

## Options

`config.toml`

```toml
+++
baseURL = "https://heavywatal.github.io/"
theme = "nonblog"
googleAnalytics = "UA-***"

[params]
author = "Watal M. Iwasaki"
base_path = "/"
logo_src = "favicon-192x192.png"
logo_alt = "LOGO"
copyrights = "(ɔ) 2008 Watal M. Iwasaki"
google_cse = "00*******************:***********"

# By default, hljs considers all available languages.
# set [] to disable auto detection
highlightjs_languages = ["sh", "c++", "python", "r", "tex"]

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
[menu.main]
  parent = "python"
+++
```
