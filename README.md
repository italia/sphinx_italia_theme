[![Join the #design channel](https://img.shields.io/badge/Slack%20channel-%23design-blue.svg)](https://developersitalia.slack.com/messages/C7658JRJR)
[![Get invited](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)

# Docs Italia theme

This is the official theme for any piece of documentation hosted on the
upcoming Docs Italia.

## How to use Sphinx Italia on your documentation 

* Add the following line to your documentation `requirements.txt` file:

    ```
    $ pip install git+https://github.com/italia/docs-italia-theme.git
    ```

* In your `conf.py` file, you'll need to specify the theme as follows:

    ```
    # Add this line at the top of the file within the "import" section
    docs_italia_theme = __import__("docs-italia-theme")
    
    # Add the Sphinx extension 'docs-italia-theme' in the extensions list
    extensions = [
      ...,
      'docs-italia-theme'
    ]
    
    # Edit these lines
    html_theme = "docs-italia-theme"
    html_theme_path = [docs_italia_theme.get_html_theme_path()]
    ```


## Advanced Configuration

The theme's project-wide options are defined in the `docs-italia-theme/theme.conf`
file of this repository, and can be defined in your project's `conf.py` via
`html_theme_options`.

This theme has three different layouts included:

* (default) **documentation page** layout, for documentation
* **home page** layout, for the docs.italia.it homepage
* **landing page** layout, for the docs.italia.it project homepages

Home page and landing page don't display any documentation content, and instead only
relies on a special data syntax from Read the Docs to populate.

```
html_theme_options = {
    # To enable the landing page template, instead of the default documentation template
    'layout': 'landing',
}
```

## Contributing or modifying the theme

* Clone the repository:
    
    ```
    git clone git+https://github.com/italia/docs-italia-theme.git
    ```

* If needed, install [Sphinx](http://www.sphinx-doc.org/en/stable/) into a virtual environment:
    
    ```
    pip install sphinx
    ```

* If needed, install [SASS](http://sass-lang.com/):

    ```
    gem install sass
    ```

4. Install [node.js](https://nodejs.org) and grunt:

    ```
    // Install node on OS X
    brew install node

    // Install grunt
    npm install -g grunt-cli

    // Now that everything is installed, let's install the theme dependecies.
    npm install
    ```

5. Run the main script to load a sample docs with the Sphinx Italia theme applied:

    ```
    npm start
    ```

This will compile static assets and watch files required for the theme to reload at runtime.

**TODO:** building a release, handling versioning system to enable automatic update on Docs Italia platform
