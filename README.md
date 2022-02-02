# Zola-portfolio
One page developer portfolio website theme for zola. Made with tailwind

# Installation
1) Create a new zola site
```
mkdir my-website &&\
cd my-website &&\
zola init
```

2) Download the theme in proper path.

From inside your project root
```
git submodule https://github.com/sudipghimire533/zola-portfolio ./themes/zola-portfolio
```

3) Specify theme name in zola's `config.toml`

In `config.toml` set the `theme` key to `"zola-portfolio"`. If key `theme` is not already present then just add it


4) Head on to [Using this theme](#how-to-use-this-theme)


# How to use this theme
First make sure you have completed [installing theme](#installation).

This theme make use of different pages of `content` despite the fact that it is single page.
It will however, make sure that everything is put into single page. Refer to [post build guide]()

## Sidebar
file: `content/sidebar.md`

+++

| Key | Type | Description |
| :---: | :---: | :--- |
| `title` | `String` | Your Name. This is shown just below the avatar of yours |
| `description` | `String` | Intro type text in few words. This is hilighted. eg: "Software Engineer", "Self taught programmer"
| `extra.avatar` | `String` | Path to the avatar image shown in sidebar |
| `extra.menu` | `Array` | Menu items |
| `extra.menu.label` | `String` | Label to show |
| `extra.menu.icon` | `String` | font-awesome icon class to show just before label |
| `extra.menu.target` | `string` | Link url to navigate from this menu. Both local and external anchors are supported. Eg: "#about", "https://my-blog.com" |

Markdown content of this file will be ignored

+++

## About Section
file: `content/about-me.md`

+++

| key  | Type | Description|
| :---: | :---: | :--- |
| `title` | `String` | Section Heading. Eg: "About me", "My intro" |
| `extra.anchor_name` | `String` | Name of the anchor. This will be appended to `href` attribute to `a` tag. Eg: If you used `#about` in any of `extra.menu.target` in `sidebar.md` then you need to set this to `about` to make proper linking |

Markdown content of this file will be shown as is in the description just below heading.

+++

# Before Deploy
If you have used zola before, you may find that we will create several content page like
`contact.md`, `sidebar.md`, `education.md` etc. It was done to make editing and updating info easier instead of
rushing everything in single file. So, url like `/contact` and `/education` will be valid which will show zola's default page.

To demonestrate once you serve your site with `zola serve` and then visit `127.0.0.1:1111/contact` in your browser you will get zola's default
page which is not what one may expect in single page website.

A straight forward way is to just delete those directory. To do so, a simple shell script exists

From now on while bulding site locally or in CI/CD, do
```
zola build -o public &&\
./remove-sections.sh public
```

```
zola build &&\
rm -rf public/sidebar ;\
rm -rf public/contact ;\
rm -rf public/about-me ;\
rm -rf public/education ;\
rm -rf public/projects ;\
rm -rf public/skills
```

