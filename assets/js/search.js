import params from '@params'
import Fuse from './fuse.min.mjs'

const searchQuery = new URLSearchParams(window.location.search).get('q') || ''
const searchInput = document.querySelector('search form input')
if (searchInput) searchInput.value = searchQuery
const fuseOptions = {
  minMatchCharLength: searchQuery.length - 1,
  threshold: 0.2,
  ignoreDiacritics: true,
  ignoreLocation: true,
  includeMatches: true,
  useExtendedSearch: true,
  keys: [
    { name: 'content', weight: 100 },
    { name: 'title', weight: 10 },
    { name: 'tags', weight: 2 },
    { name: 'type', weight: 1 }
  ]
}

fetch(params.index).then((response) => response.json()).then(search).then(render)

function search (objects) {
  const fuse = new Fuse(objects, fuseOptions)
  return fuse.search(searchQuery)
}

function render (results) {
  const elem = document.querySelector('main article')
  elem.innerHTML = results.map(toHTML).join('\n') || `<p>Not found "${searchQuery}"</p>`
}

function toHTML (result) {
  const maxSnippetSize = 400
  let tags = structuredClone(result.item.tags) || []
  const item = result.item
  item.content = '' // Show content only if matches found
  for (const match of result.matches) {
    let value = match.indices.reduceRight((v, idx) => mark(v, idx), match.value)
    if (match.key === 'content' && value.length > maxSnippetSize) {
      const start = Math.max(match.indices[0][0] - 10, 0)
      value = value.substr(start, maxSnippetSize) + '&hellip;'
    }
    if (match.key === 'tags') {
      item.tags[match.refIndex] = value
    } else {
      item[match.key] = value
    }
  }
  tags = tags.map((x, i) => `<a href="/tags/${x}">${item.tags[i]}</a>`)
  const tagsHTML = tags.join(' ')
  return `<section>
  <header>
    <h1><a href="${item.href}">${item.type}/${item.title}</a></h1>
    <div class="tags">${tagsHTML}</div>
  </header>
  <p>${item.content}</p>
</section>`
}

function mark (str, idx) {
  const end = idx[1] + 1
  const found = '<mark>' + str.substring(idx[0], end) + '</mark>'
  return str.substring(0, idx[0]) + found + str.substring(end)
}
