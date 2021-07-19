In this project we have two specs with different tags to test grep and configFile at same time.

The expected behaviour is pass configFile=HMP and grepTags=@TES-T5967. The grep_env.spec should pass and grep_env2.spec should be skipped. The Issue is or the first test fail (with wrong env) or don't filter the test with grep.

Commands without success:
npx cypress run --env configFile=HMP --env grepTags=@TES-T5967

npx cypress run --env grepTags=@TES-T5967 --env configFile=HMP

npx cypress run --env grepTags=@TES-T5967 configFile=HMP
