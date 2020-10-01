# [motion-toolbox.com](http://motion-toolbox.com)

## Forking/Pull Requests

Pull requests are encouraged! Add new wrappers or more tags to existing ones.

1. `bundle install`

2. Add your new data to `data.json`

3. Add your github token file to `.oauth_token`. You can generate a token here: https://github.com/settings/tokens

4. Preview your changes with `bundle exec middleman` and `rake open`.

5. Subsequent runs you can skip interacting with Github by running: `SKIP_GITHUB=true bundle exec middleman`
