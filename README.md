# nonblog

This is a minimal theme for non-blog websites with a hierarchical sidebar

## Options

`config.toml`

```toml
+++
# By default, hljs considers all available languages.
# set [] to disable auto detection
highlightjs_languages = ["sh", "c++", "python", "r", "tex"]
logo_src = "/favicon-32x32.png"
logo_alt = "航"
copyrights = "(ɔ) 2008 Watal M. Iwasaki"
page_source = false

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