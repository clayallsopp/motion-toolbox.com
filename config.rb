require 'lib/toolbox_helpers'

helpers ToolboxHelpers

configure :development do
  activate :livereload
end

# Build-specific configuration
configure :build do
end
