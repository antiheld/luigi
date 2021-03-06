# Changelog

> Note: All the versions not mentioned in the changelog file do not contain changes. 

<!-- 
Generate the changelog using the lerna-changelog tool. 
Run the following command to generate changelog content for pull requests that have been merged since the time when the last git tag was created:

./node_modules/lerna-changelog/bin/cli.js --ignoreCommiters

You can also generate changelog content corresponding to pull requests that were merged in between particular git tags:

./node_modules/lerna-changelog/bin/cli.js --ignoreCommiters --from core-0.3.0 --to core-0.3.1

The lerna-changelog tool detects changes based on PR labels and maps them to sections as per the configuration in the package.json file.
  "changelog": {
    "labels": {
      "breaking": ":boom: Breaking Change",
      "enhancement": ":rocket: Enhancement",
      "bug": ":bug: Bug Fix",
      "documentation": ":memo: Documentation"
    }
    ...
  }
-->

## [v0.3.8] - 2018-11-23

#### :rocket: Added
* [#190](https://github.com/kyma-project/luigi/pull/190) Context Switcher in top navigation ([@maxmarkus](https://github.com/maxmarkus))
* [#209](https://github.com/kyma-project/luigi/pull/209) Support navigation nodes that just link to other nodes ([@jesusreal](https://github.com/jesusreal))
* [#162](https://github.com/kyma-project/luigi/pull/162) 404 support for non existing paths ([@parostatkiem](https://github.com/parostatkiem))
* [#187](https://github.com/kyma-project/luigi/pull/187) Luigi core config refactorings ([@jesusreal](https://github.com/jesusreal))
* [#200](https://github.com/kyma-project/luigi/pull/200) Align luigi header title with fundamental style ([@parostatkiem](https://github.com/parostatkiem))
* [#180](https://github.com/kyma-project/luigi/pull/180) Token refresh ([@y-kkamil](https://github.com/y-kkamil))
* [#160](https://github.com/kyma-project/luigi/pull/160) Configurable logo and title ([@maxmarkus](https://github.com/maxmarkus))

#### :bug: Fixed
* [#235](https://github.com/kyma-project/luigi/pull/235) Issues with path routing ([@jesusreal](https://github.com/jesusreal))
* [#234](https://github.com/kyma-project/luigi/pull/234) Add logout.html to webpack config ([@kwiatekus](https://github.com/kwiatekus))
* [#232](https://github.com/kyma-project/luigi/pull/232) Fix no context switcher error ([@pekura](https://github.com/pekura))
* [#224](https://github.com/kyma-project/luigi/pull/224) Bugfix/preserve view content area ([@maxmarkus](https://github.com/maxmarkus))
* [#222](https://github.com/kyma-project/luigi/pull/222) Login fix ([@hardl](https://github.com/hardl))
* [#202](https://github.com/kyma-project/luigi/pull/202) Fix go-back-button bug ([@parostatkiem](https://github.com/parostatkiem))
* [#215](https://github.com/kyma-project/luigi/pull/215) mock auth logout page fix ([@y-kkamil](https://github.com/y-kkamil))
* [#211](https://github.com/kyma-project/luigi/pull/211) Multiple path parameters do not get replaced in view url ([@pekura](https://github.com/pekura))
* [#212](https://github.com/kyma-project/luigi/pull/212) Fix failing unit tests ([@dariadomagala](https://github.com/dariadomagala))
* [#206](https://github.com/kyma-project/luigi/pull/206) Center the logo ([@dariadomagala](https://github.com/dariadomagala))
* [#196](https://github.com/kyma-project/luigi/pull/196) Fix for goBack when not using micro-frontend without routing ([@maxmarkus](https://github.com/maxmarkus))
* [#177](https://github.com/kyma-project/luigi/pull/177) Allow multiple init and update listeners ([@maxmarkus](https://github.com/maxmarkus))

#### :memo: Documentation
* [#197](https://github.com/kyma-project/luigi/pull/197) Improve luigi-client js docs ([@kwiatekus](https://github.com/kwiatekus))
* [#155](https://github.com/kyma-project/luigi/pull/155) Describe get path params and get node params better ([@pekura](https://github.com/pekura))
* [#199](https://github.com/kyma-project/luigi/pull/199) Add missing line and improve wording ([@bszwarc](https://github.com/bszwarc))


## [v0.3.7] - 2018-10-31


#### :rocket: Added
* [#169](https://github.com/kyma-project/luigi/pull/169) Enable Luigi Client (microfrontend) to check whether a path exists in the main app ([@jesusreal](https://github.com/jesusreal))

#### :bug: Fixed
* [#168](https://github.com/kyma-project/luigi/pull/168) Fix bug for closest parent navigation on Luigi Client ([@jesusreal](https://github.com/jesusreal))

#### :memo: Documentation
* [#138](https://github.com/kyma-project/luigi/pull/138) Add details about navigation nodes and reading node parameters ([@bszwarc](https://github.com/bszwarc))
* [#176](https://github.com/kyma-project/luigi/pull/176) Update and improve the content of the installation guide ([@bszwarc](https://github.com/bszwarc))
* [#161](https://github.com/kyma-project/luigi/pull/161) Fix small docu bugs ([@jesusreal](https://github.com/jesusreal))

## [v0.3.6] - 2018-10-23

#### :rocket: Added
* [#131](https://github.com/kyma-project/luigi/pull/131) Make automatic login configurable ([@dariadomagala](https://github.com/dariadomagala))
* [#121](https://github.com/kyma-project/luigi/pull/121) Navigation node as a link to an external page ([@parostatkiem](https://github.com/parostatkiem))
* [#118](https://github.com/kyma-project/luigi/pull/118) Keep left-side navigation on a node hierarchy level ([@maxmarkus](https://github.com/maxmarkus))
* [#129](https://github.com/kyma-project/luigi/pull/129) Add automatic loading indicator to show processing ([@maxmarkus](https://github.com/maxmarkus))
* [#105](https://github.com/kyma-project/luigi/pull/105) Enable e2e tests ([@dariadomagala](https://github.com/dariadomagala))
* [#142](https://github.com/kyma-project/luigi/pull/142) View preservation is now allowed also cross-domain ([@maxmarkus](https://github.com/maxmarkus))

#### :bug: Fixed
* [#140](https://github.com/kyma-project/luigi/pull/140) Fix css issues in core and angular example ([@jesusreal](https://github.com/jesusreal))
* [#116](https://github.com/kyma-project/luigi/pull/116) Change per-component backdrop to global one ([@parostatkiem](https://github.com/parostatkiem))
* [#120](https://github.com/kyma-project/luigi/pull/120) Fix fonts bundling in luigi core ([@parostatkiem](https://github.com/parostatkiem))
* [#115](https://github.com/kyma-project/luigi/pull/115) Re-login not redirecting to luigi app ([@jesusreal](https://github.com/jesusreal))

#### :memo: Documentation
* [#148](https://github.com/kyma-project/luigi/pull/148) Copy template for security issues ([@franpog859](https://github.com/franpog859))
* [#135](https://github.com/kyma-project/luigi/pull/135) Improve getting started  documentation ([@maxmarkus](https://github.com/maxmarkus))
* [#137](https://github.com/kyma-project/luigi/pull/137) Add autogenerated luigi client api docs ([@jesusreal](https://github.com/jesusreal))


## [v0.3.5] - 2018-09-26

#### :rocket: Added
* [#104](https://github.com/kyma-project/luigi/pull/104) Dynamic pathSegments in navigation nodes ([@maxmarkus](https://github.com/maxmarkus))

#### :bug: Fixed
* [#84](https://github.com/kyma-project/luigi/pull/84) Remove unnecessary files from public folder ([@dariadomagala](https://github.com/dariadomagala))
* [#103](https://github.com/kyma-project/luigi/pull/103) Fix behavior of the logout dropdown ([@dariadomagala](https://github.com/dariadomagala))
* [#102](https://github.com/kyma-project/luigi/pull/102) Fix 'preserve view' feature for sibiling nodes ([@maxmarkus](https://github.com/maxmarkus))
* [#89](https://github.com/kyma-project/luigi/pull/89) Fix unnecessary 'authSuccessfull' handler execution on each page refresh ([@dariadomagala](https://github.com/dariadomagala))
* [#79](https://github.com/kyma-project/luigi/pull/79) Fix fundamental-ui issues in applications setup docu ([@jesusreal](https://github.com/jesusreal))

#### :memo: Documentation
* [#107](https://github.com/kyma-project/luigi/pull/107) Commands path info in angular example readme ([@parostatkiem](https://github.com/parostatkiem))


## [core-0.3.3] - 2018-09-14

#### :rocket: Added
* [#67](https://github.com/kyma-project/luigi/pull/67) Navigation node visibility with custom nodeAccessibilityResolver ([@maxmarkus](https://github.com/maxmarkus))

#### :bug: Fixed
* [#82](https://github.com/kyma-project/luigi/pull/82) Fixed changedetector bug ([@dariadomagala](https://github.com/dariadomagala))
* [#71](https://github.com/kyma-project/luigi/pull/71) Fixed top navigation popover behavior ([@maxmarkus](https://github.com/maxmarkus))
* [#76](https://github.com/kyma-project/luigi/pull/76) Fixed broken routing after successful OIDC authentication ([@maxmarkus](https://github.com/maxmarkus))
* [#57](https://github.com/kyma-project/luigi/pull/57) Fixed preserve view and back example ([@dariadomagala](https://github.com/dariadomagala))
* [#75](https://github.com/kyma-project/luigi/pull/75) Fixed import of LuigiClient on angular app ([@jesusreal](https://github.com/jesusreal))

#### :memo: Documentation
* [#80](https://github.com/kyma-project/luigi/pull/80) Luigi documentation refinements ([@dpolitesap](https://github.com/dpolitesap))
* [#34](https://github.com/kyma-project/luigi/pull/34) Introduce changelog file ([@jesusreal](https://github.com/jesusreal))


## [client-0.3.2] - 2018-09-10

#### :rocket: Added
* [#33](https://github.com/kyma-project/luigi/pull/33) Ensure es5 compliance for luigi client ([@y-kkamil](https://github.com/y-kkamil))


## [core-0.3.1] - 2018-09-07

#### :bug: Fixed
* [#31](https://github.com/kyma-project/luigi/pull/31) Redirect from root node to first child ([@y-kkamil](https://github.com/y-kkamil))
* [#50](https://github.com/kyma-project/luigi/pull/50) #49 [fix] OAuth2 implicit grant flow should use GET as default reques… ([@aartek](https://github.com/aartek))


## [core-0.3.0] - 2018-09-05

#### :rocket: Added
- Preserve view and go back feature.
- Default child nodes feature.
- Support for url parameters.
- Add vue.js example app by [@DamianLion](https://github.com/DamianLion)
- On angular example app, update angular version from version 5 to 6.
- On angular example app, introduce fundamental-ui css framework.
- Backdrop functionality can now be disabled via Luigi Config object.
- Add error message for missing Luigi Config.
- Improvements on authorization, remove login button, trigger auth flow on page load.
- Add documentation.

#### Changed
- 'hideNav' flag to disable top and left navigations is called now "hideNavigation" and is under "settings".
- 'isHashRoute' flag to activate hash routing is moved to Luigi Config object under 'settings' and is called now 'useHashRouting'.
- Luigi Config is now under "window.Luigi.config" instead of "window.LuigiConfig" and "setConfig" and "getConfig" helper methods are available.

#### :bug: Fixed
- On angular example app, fix path routing issues by simplifying app chunks split.
- On backdrop functionality, fix some small visual errors.

## [client-0.3.0] - 2018-09-05

#### :rocket: Added
- Support for url parameters.
- Add documentation.

#### :bug: Fixed
- Prevent reloading of whole browser window when navigating with hash routing and only hash changes.

## 0.2.1 - 2018-07-24
#### :rocket: Added
- Core: Angular example application.
- Core: Hash-based and path-based routing.
- Core: Navigation setup.
- Core: Support authorization via Open ID Connect (OIDC) or OAuth2 Implicit Grant.
- Core: Navigation on top and left (can be disabled via Luigi Config object).
- Core: Backdrop functionality.
- Core: Authorization.
- Client: Lifecycle functions.
- Client: Link manager for navigation.
- Client: UX manager for backdrop.


[core-0.3.0]: https://github.com/kyma-project/luigi/compare/v0.2.1...core-0.3.0
[core-0.3.1]: https://github.com/kyma-project/luigi/compare/core-0.3.0...core-0.3.1
[core-0.3.3]: https://github.com/kyma-project/luigi/compare/core-0.3.2...core-0.3.3
[client-0.3.2]: https://github.com/kyma-project/luigi/compare/client-0.3.1...client-0.3.2
[client-0.3.0]: https://github.com/kyma-project/luigi/compare/v0.2.1...client-0.3.0
[v0.3.5]: https://github.com/kyma-project/luigi/compare/core-0.3.3...v0.3.5
[v0.3.6]: https://github.com/kyma-project/luigi/compare/v0.3.5...v0.3.6
[v0.3.7]: https://github.com/kyma-project/luigi/compare/v0.3.6...v0.3.7
[v0.3.8]: https://github.com/kyma-project/luigi/compare/v0.3.7...v0.3.8
