require 'compass/import-once/activate'
require 'susy'
require 'bootstrap-sass'
# require 'compass-normalize'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"  # url 路径 https://uda100.com
css_dir = "demo/css"
sass_dir = "demo/sass"
images_dir = "demo/images"
javascripts_dir = "demo/js"

# 开发环境还是生产环境
environment = :production

# You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded #:expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# 相对路径
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
