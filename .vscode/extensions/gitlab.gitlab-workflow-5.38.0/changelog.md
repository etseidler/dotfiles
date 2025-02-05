# [5.38.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.37.0...v5.38.0) (2025-02-05)


### Features

* close duo chat with hotkey ([2244e26](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2244e264222990e15b126f1826a0e20d5890cf81))
* **DuoChat:** Add Language Server version to Diagnostics ([8d7126f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8d7126f3e6775d4f698f94e4fb6b3f85c42be6ba))



# [5.37.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.36.0...v5.37.0) (2025-02-03)


### Bug Fixes

* editing MR comments doesn't duplicate them ([ae3631f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ae3631fd5a1028a80cb28b3e84f4e674e807da38))


### Features

* Handle opening of files for LSP events ([b247534](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b247534aedeebef9b7998561494d88073ceb0956))



# [5.36.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.35.3...v5.36.0) (2025-01-29)


### Features

* GitLab Duo Tutorial ([772ccbd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/772ccbd28c5b46fdf11b4e03cb29aea631bfa39f))



## [5.35.3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.35.2...v5.35.3) (2025-01-28)


### Bug Fixes

* WS URL creation for different instance URLs ([2f16a74](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2f16a74d2cd8f77021099fc48a525bdc05341359))



## [5.35.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.35.1...v5.35.2) (2025-01-27)


### Bug Fixes

* add logging to understand Chat initialization ([c605281](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c6052819b0307c949cfda13f3f4d65ffdd303bc1))



## [5.35.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.35.0...v5.35.1) (2025-01-24)


### Bug Fixes

* Add top level error catch with webview error display ([a4b22b1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a4b22b1b8dadaefc1566d8e5e76a99caaa9412e6))



# [5.35.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.34.0...v5.35.0) (2025-01-22)


### Bug Fixes

* remove sast scan command from common package json ([5b83f2b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5b83f2b2b8753c3e7a49932fe9cc9aa889ec71eb))


### Features

* update duo-ui and gitlab-ui + breaking changes, update empty state ([e13c37f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e13c37fd6d11c06bba8fc1f0c7ca1cc12011e101))



# [5.34.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.33.3...v5.34.0) (2025-01-21)


### Features

* Add diagnostics page and version diagnostics ([8faa05a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8faa05a58c2c517a0144bccaa63073617473c485))



## [5.33.3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.33.2...v5.33.3) (2025-01-21)


### Bug Fixes

* authenticate through walkthrough signin ([cb9db20](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/cb9db20b7257e4efbe08613b5804d6cf9482a088))



## [5.33.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.33.1...v5.33.2) (2025-01-20)


### Bug Fixes

* **DuoChat:** Change text from Show Status to STATUS ([9b0ce91](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9b0ce9111e5b29ce8772b4e3ec32f412245ae147))
* move quick chat text hint to after cursor ([dc2f1e9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/dc2f1e9d26bbcb75fea0f7310858423a996eb7ea))



## [5.33.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.33.0...v5.33.1) (2025-01-17)



# [5.33.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.32.0...v5.33.0) (2025-01-17)


### Bug Fixes

* Emit `FeatureStateManager` state when listener is added ([1808fad](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1808fad7d7f5da7eb9007e20b7c73e16659f9152))


### Features

* release single account per workspace simplification ([d59903c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d59903cc74dd5ca806d5227735d4d371e3298ab6))
* **single-account:** shows a message about single account management ([ecd6f30](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ecd6f308fb2b068b4d382f0accaeb0f2b5527adb))



# [5.32.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.31.0...v5.32.0) (2025-01-15)


### Bug Fixes

* **code suggestions:** report API errors to the user ([a5a4665](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a5a466526c94aed0181f35750c4938d591f734e3))
* **single-account:** hide chat UI in WebIDE if Duo chat isn't available ([f9f5261](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f9f5261a6fe3d7fce02dc1b63ffe0021630ac385))
* **workflow:** show the "Run" command only when the "Show" is available ([4b3d4fc](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4b3d4fcd5914443d1d9ff8da48cb793a0d5d5001))


### Features

* Implement exponential backoff for token refresh ([183890c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/183890c7836e194251cb257a4c731b0d813389b1))



# [5.31.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.30.0...v5.31.0) (2025-01-13)


### Bug Fixes

* refresh OAuth token even if the extension doesn't make API requests ([84d8559](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/84d8559c6f527b3207394660b171ab786dc8d359))
* Showing and hiding of QuickChat based on LS checks ([e29c606](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e29c606c2cec89ae0aeec0990d2cf19517732847))


### Features

* add remote sast scan settings ([07242a8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/07242a8c8cfdaa3f0c58304cfd978cf85b90381c))



# [5.30.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.29.0...v5.30.0) (2025-01-09)


### Features

* Create Chat State Manager ([0d15cba](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0d15cba124271434914593dc5ac4e9aac8599faa))



# [5.29.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.28.0...v5.29.0) (2025-01-09)


### Features

* Add Show Status button in Duo Chat Sidebar Toolbar ([63ff658](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/63ff658f26b9ef02bffd37c89484ab8a6cc8947c))
* hide scan command when no activeTextEditor ([9947125](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/99471254f19a8d54de22c7d316ce64d8371b1b78))



# [5.28.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.27.0...v5.28.0) (2025-01-06)


### Features

* Add account preselection state management (behind FF) ([b4a7d93](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b4a7d93313405fc7c636df9a1c54d9ab04086ddd))
* Add service for automatic account selection (behind FF) ([02a5ee7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/02a5ee794b1190cd6afa332cd18c979efb9c8d54))
* hide sast scan when no account ([177b822](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/177b8227bd04b6afb5cdb4c88a9f5a42ffbcae57))



# [5.27.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.26.0...v5.27.0) (2025-01-01)


### Features

* update empty state colors ([afed844](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/afed844e149cf1977e2a7a8ada6c1687994fa1ad))



# [5.26.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.25.1...v5.26.0) (2024-12-19)


### Features

* Prevent multiple workflow tabs ([d23252c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d23252c3e80d215c8882f95b8a61fdf3342be9e2))



## [5.25.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.25.0...v5.25.1) (2024-12-17)


### Bug Fixes

* duo chat insert code snippet variable replacements ([4dcdc21](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4dcdc21a6f935da85e88218ea74acd0961b6c81d))
* ensure_npm pre-install script incorrectly triggered ([b228f36](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b228f363fa07d169e127f515ac8210f14e95bf82))



# [5.25.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.24.0...v5.25.0) (2024-12-13)


### Bug Fixes

* prevent TextDocument onDidOpen if document is not actually open ([e5ce365](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e5ce365ab4247115415758606ac827487a666273))


### Features

* **quick-chat:** Add one-click button to insert code snippet ([171a539](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/171a539cb822fff9b1ceccc212c0c31e5d0f1c3f))
* show error message popup ([ede779b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ede779bed10834ebe4dfd34e5e8ee30b3266013c))



# [5.24.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.23.2...v5.24.0) (2024-12-12)


### Bug Fixes

* prevent feature flags errors on older instances ([f3ff148](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f3ff14865db1adccfdc7b607c7d6d3e4aa9e263c))


### Features

* Duo workflow preserve context ([ee2f65e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ee2f65e919c8549432fed726674e9d772e948c50))



## [5.23.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.23.1...v5.23.2) (2024-12-11)


### Bug Fixes

* **quick-chat:** label update steals focus ([6cacec8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6cacec8205cd864236f0eca0000e59c0ee4858d7))



## [5.23.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.23.0...v5.23.1) (2024-12-10)



# [5.23.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.22.0...v5.23.0) (2024-12-10)


### Features

* **status-bar:** add status to quick pick menu ([c142d0f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c142d0fe59ad98c28b04767826db8e03c0d5176c))



# [5.22.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.21.0...v5.22.0) (2024-12-09)


### Bug Fixes

* better account validation error ([711d83c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/711d83cd19eddcff40cd97119e98f6806f06e39a))


### Features

* setup security vulnerability webview ([472d0cd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/472d0cd6a0a28d48e61fc2edecd1159d0cdfe8b2))
* show quick chat keybindings hint only when chat is available ([9a79bd2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9a79bd26e98b41dab3ca09f0fee7bd43788d3359))



# [5.21.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.20.0...v5.21.0) (2024-12-04)


### Features

* **ai-context:** LocalGitContextProvider ([850b765](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/850b765ac3ce501eaa295e7e2297dcf2759686a1))



# [5.20.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.19.0...v5.20.0) (2024-12-04)


### Features

* add scan button in remote scan tree view ([c581874](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c58187485de9d0fa337efba0a55f9b4108676030))
* group configuration properties in settings UI ([93b434a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/93b434a026cf60015ad9f5df6bf4652e957b2d28))
* order settings in the settings UI ([4dafa88](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4dafa885af8908feaa4a7a90281f5bec3afb7f78))
* **workflow:** run Duo Workflow from the command palette ([feaabe5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/feaabe5d49085b253afc72ce9ddce939fa28f420))



# [5.19.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.18.1...v5.19.0) (2024-11-26)


### Bug Fixes

* catch and report errors when getting MR details ([df22e20](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/df22e20fe313255dad02b1db8b45824996d21612))
* correct documentation link for code suggestions ([03b196c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/03b196c332f2e910b4262a848a05b83939a7a0ca))
* DuoChat markdown render after stream end ([d111710](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d111710f279b4b1c3e8560a63e484ab061153ad5))
* DuoChat websocket race condition ([e5060e9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e5060e964707d8aca4d32028b55b68f43499944e))
* **DuoChat:** Gradients on code blocks not working ([45241c4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/45241c4fdeab2faaa5e3cbb0408d511e726109d9))


### Features

* add help command to Duo Chat slash menu ([a213001](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a213001369b4ab6563bb611672d1d4ecf8188406))
* Create Remote Scanning Sidebar ([a9389fb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a9389fb238d41e712ff3e0af8a0b1dffd2f2beae))
* Duo UI migration VS code extension ([d7102b9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d7102b9813aeac0531b1e4e41c7e5d03961ff85a))
* **quick-chat:** add gutter icon ([c16d170](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c16d170fb6c132f78209325b2510bdcbe8d63c07))
* **quick-chat:** capture user input when shown ([df7468b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/df7468b208a3cb6af730326a720186e17a834020))
* Track quick chat telemetry ([0a68369](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0a6836925d4ccd081cade37b493b8210a8437001))



## [5.18.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.18.0...v5.18.1) (2024-11-13)

### Other

* **deps:** Updates the GitLab Language Server to v6.15.0 ([changeset](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp/-/compare/v6.13.0...v6.15.0))


# [5.18.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.17.0...v5.18.0) (2024-11-11)


### Bug Fixes

* Adjust styles for Duo chat error messages ([174905a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/174905aa239fc6e0f51de04ff750ed07abd57d96))
* chat API errors are logged ([97e0b55](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/97e0b55d81f64f0a2e1bcd11a3471a8ad311513c))
* Display unauthenticated duo quick menu ([50af771](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/50af7719ab35bbf3edd2933152a9aa2b347d7854))
* prevent project path badge overflowing context item popover ([dd2dcfb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/dd2dcfb77749f2aee51351b3ccac8c284fcdd1f3))
* **quick-chat:** ensure quick chat is expanded ([d6af3e4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d6af3e41b48dba54cb8f308372b819230fa7e4c2))
* **quick-chat:** scope keybinding hints to files ([1764d65](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1764d65a62966844d3dd1429789a14aa4243b8f6))


### Features

* add local_git context category ([9aada92](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9aada929f528e3bcbf71458af4a22d6a5c3ff3a4))
* add snippet quick-pick placeholders ([a163de5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a163de50cf36ffec2aeff1948942d0723c5c0c6d))
* enable duo chat dependencies context category ([7c99c5d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7c99c5d43a2bdb21790cdc61c4a0c76a4efd4362))
* Pass HTTP proxy settings to language server process ([b88f9c8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b88f9c804ccd614f43c1de177eb8b15f96132ad4))
* **quick-chat:** add keybinding hint ([b657567](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b6575678322547a078907ec512cfb958fd0e302c))
* **workflow:** theming support for the editor area webviews ([6b9baea](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6b9baea83e776f02522f80d45cad7dbef0c1e2c6))



# [5.17.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.16.0...v5.17.0) (2024-10-23)


### Bug Fixes

* add AIContextManager stub for Web IDE ([8d682e5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8d682e581010f56f50956431ce9fe583057e650d))
* **DuoChat:** theme inline code blocks & "included reference" link ([afabd1b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/afabd1bb589371f3a08c65330f0fc478cdb15f68))
* Generate unique remote name when publishing ([04324cc](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/04324cc5e3ab6e7141b82daeaddfed3a9ef7320b))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !2065](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/2065) 👍


### Features

* Add support for 'canceling' job status ([ca01650](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ca016500a4f83207a12c137aefa5bbb7f27907a9))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !2064](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/2064) 👍
* Duo quick chat -  add support for `/reset` and `/clear` commands ([056d1aa](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/056d1aac5231ebd3c7f4cf1c108703eafedbfe75))



# [5.16.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.15.0...v5.16.0) (2024-10-18)


### Bug Fixes

* Always offer to run Authenticate command when token expires ([45a7ee4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/45a7ee4e01a5ab57698b5a7de475aa1ba36d9eb9))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !2031](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/2031) 👍
* **Duo Chat:** Remove clean slash command ([145c8a7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/145c8a725488180de52e65030295e654b6de9d15))
* Retrieve maxAccessLevel separately in ProtectedBranchProvider ([766f564](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/766f5648850654afd430c690bd6ad66e5599a987))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !2036](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/2036) 👍


### Features

* add LSP feature flags to browser.package.json ([4bacaf4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4bacaf40b9d5c8445ec0cb6012688bc2027318e8))
* Code suggestions in unsaved files ([96ff465](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/96ff4654f22eff9c78b04382a868653857e0b789))
* Copy code snippet from quick chat ([e0a150b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e0a150b362e2270664771509ff8e09e2405888af))
* Initialize Git repo when publishing to GitLab ([834fa99](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/834fa99f92432fc34b83120f51305e03f3b4b425))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1977](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1977) 👍
* Update Quick chat "Send" label to OS-specific ([057a04f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/057a04f824b5842a56defa4d62139cd72115d625))
* Update Quick Chat thread label text on selection change ([88fc60d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/88fc60d02ae9c699910adb662b12be6664b85f5b))



# [5.15.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.14.0...v5.15.0) (2024-10-04)


### Bug Fixes

* Don't return protection rules if include is empty ([7229efe](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7229efeea6de9c13622024a3efe072755b869bad))
  * Implemented by [@X_Sheep](https://gitlab.com/X_Sheep)👑


### Features

* display quick chat actions ([5c4a326](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5c4a326f25d73cc9cdfaf1f91322ee7c38cc8ce1))



# [5.14.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.13.0...v5.14.0) (2024-10-04)


### Bug Fixes

* delay when opening quick chat ([ac425ca](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ac425ca280b22d1d624e51a34a6fc0fff7f9754d))


### Features

* **DuoChat:** Streaming code includes syntax highlight/action buttons ([754f955](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/754f95537ef15555af2549881b4e1fe6b7516ae1))
* support Duo Code Suggestions in notebooks ([79d32bd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/79d32bd936f8f510c7e5dcef2fa4a170245ea482))
* Trigger Inline Chat in editor ([7d62838](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7d62838cb49a6005559e7d3933d4a307aa384d97))

### Community contributions 👑

* Implemented by [@X_Sheep](https://gitlab.com/X_Sheep)
  * Support branch protection rules ([997dce0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/997dce0787ef8089e683948941dbf1d0462db41d))


# [5.13.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.12.2...v5.13.0) (2024-09-26)


### Bug Fixes

* extension not initialized error during startup ([72614fa](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/72614fabe6e7b545922fa949da6ecff562a91849))
* support osx shortcuts ([6177269](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6177269ed4164f79e5a638e2a28e729405ba2971))


### Features

* **ai-context:** Enable additional chat context with a feature flag ([b980ac7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b980ac7615b260a58d598234b133e0ded2993b98))



## [5.12.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.12.1...v5.12.2) (2024-09-24)


### Bug Fixes

* Disable additional context in chat query/mutation ([6ab30e4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6ab30e4e9e85524a88892888ef89fb9b224dc39f))



## [5.12.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.12.0...v5.12.1) (2024-09-23)


### Bug Fixes

* Stop visibilityPicker item selection from jumping to 0 ([e548d43](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e548d438c8461667bb0c89d5aff2fd70c76c6150))



# [5.12.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.11.0...v5.12.0) (2024-09-19)


### Bug Fixes

* Ensure the "fix" command does not display when Duo is disabled ([aaaed45](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/aaaed4533d2784c77b3c79d22f0651cce2dfc1df))
* Hide Open in GitLab in command palette ([f217845](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f2178453018cce42fd366d2f2b5faa3a88c1706e))


### Features

* **ai-context:** Injected File Context in Duo Chat ([0a15221](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0a152210aede771e498209988be287ebdd9621eb))



# [5.11.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.10.0...v5.11.0) (2024-09-17)


### Bug Fixes

* **docs:** Fix formatting problem detected by Prettier ([324b0e9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/324b0e9d061dfefdb1cb47d81b9894c14007825d))
* **docs:** Resolve errors from updated docs linting rules and tools ([44d507c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/44d507c163cf678a63e106107a7243ea85cb7ba1))
* ensure Duo Chat prompt is focused when showing panel ([c918f76](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c918f764c3de0f644be38715d580c496052815b0))


### Features

* **ai-context:** injected context UI integration ([a164759](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a164759450972e8f0353265c86f9db52659f73b4))


### Community contributions 👑

* Implemented by [@X_Sheep](https://gitlab.com/X_Sheep)
  * Publish to GitLab: create a new project from existing repository ([bdabd94](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bdabd943b821446ec0889b831fd9895c9746f98f))


# [5.10.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.9.1...v5.10.0) (2024-09-06)


### Bug Fixes

* Use metadata.featureFlags gql field for instance feature flags ([ba3b3b0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ba3b3b0de64e737a9cf8be8cf354803bec213985))


### Features

* implement inserting code snippets ([7a80e20](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7a80e20c70558bd1ba22304a20f98fe20a1a36b8))



## [5.9.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.9.0...v5.9.1) (2024-09-04)


### Features

* added AI Context Management ([a33e44e](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/a33e44eb23aeebc99cf3059ac52519b20471e826))
* show executing duo workflow steps ([75c3c59](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/75c3c59a972de2f0e97dbb359af334780ca3c3ee))
* subscribe to do workflow events ([9e7bd53](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/9e7bd5379e0bae31847c066faf13be622c0fcaf8))


# [5.9.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.8.0...v5.9.0) (2024-08-28)


### Bug Fixes

* Add Code Suggestion State Check for Status Bar Icon ([ee2472a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ee2472a4fe0ab4f5a3896859030ac9d2e9d459bb))
* Add missing tailwind styles for DuoChat ([09b1a98](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/09b1a987d6fe7795a2ca793d93d0044c0faa4f61))


### Features

* add /fix command for GitLab Duo chat ([384708a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/384708a79f5e6927ac80f51c09a07f60d1b1177b))
* Add cancelPrompt handlers for DuoChat ([2fadc14](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2fadc149161a4e6ac7f4083dfff828fd4a32284c))
* add new chat icon to activity bar ([50f54cd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/50f54cdb7fe899a8e0e80fc7f36ce9e92d01584a))
* add notification listener to open URLs ([929144c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/929144cad55a07fe261f51bb3eee8aa05b83cff7))
* Remove code suggestions request states from status bar ([52416ae](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/52416ae8895f831950a4b2707e005a3fd24783ee))
* rename aiAssisted configuration namespace to duo ([9d55361](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9d55361364c042f564f746b7b84d2e2a9565c848))



# [5.8.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.7.1...v5.8.0) (2024-08-20)


### Bug Fixes

* Send `DidChangeDocumentInActiveEditor` on LS start ([6d70cf2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6d70cf2b16dd8ee50b6f7a4186f8a1f2ef2d7b0e))

## Language Server changes

### Bug Fixes

* only notify on actual changes to LanguagesService ([aeceee3](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/aeceee3fb2cc23e3423ff40e964614715dfca7b6))


### Features

* add new state notification for disabled language ([04db755](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/04db75521ac7017d358e5c6def04c0804e3eadf3))
* Duo Workflow fetch workflow token ([3ee23f9](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/3ee23f9b0f5bee5c3ba39961c3df3cef103a837d))
* initial port of duo chat from vscode ([f9ce04e](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/f9ce04e288196fc1cfceda7017b95d68240482f5))
* normalize invalid "additionalLanguages" identifiers ([3e327ea](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/3e327ead55ef61611ab4d8e8460f07f88ad51bcd))
* reduce suggestion debounce from 300ms to 250ms ([bd098b3](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/bd098b39fc8a50a72d60a976295627cb8b308d90))



## [5.7.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.7.0...v5.7.1) (2024-08-16)


### Bug Fixes

* don't ask user to select account ([92ca27c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/92ca27cb1d39e1d3a6e5492a8845a00b1227165e))
* duo chat feedback form not sending text feedback ([7b46dad](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7b46dad825df70f6b65c7206d7451bf3dc1a522e))



# [5.7.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.6.0...v5.7.0) (2024-08-16)


### Features

* send open tabs to language server on init ([f44a714](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f44a71405592392f002200e4a7575e9b139aff36))
* update duo status bar item placement and label ([6af8303](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6af8303aa2d0bb0160698e51cd45b96148f7ea9c))



# [5.6.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.5.0...v5.6.0) (2024-08-14)


### Bug Fixes

* Scope duo workflow docker values to all settings ([69d1e72](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/69d1e72b06c529740aab1deb0d28b366c5a2f629))

### GitLab Language Server Features

* Add Workflow goal and execution component ([3cb5d60](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/3cb5d60f3f39e9d686f11f2dede37437747e6284))
* switching between open tabs adds them to advanced context cache ([c00320a](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/c00320a623eac03c6b97dc61d1c32fa6f3c916da))


# [5.5.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.4.0...v5.5.0) (2024-08-14)


### Bug Fixes

* change deprecated state.refs to getRefs() ([24cfac8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/24cfac82cd32f8080a3b375b95892fd9bcc1bf81))
  * Implemented by [Van Anderson](https://gitlab.com/van.m.anderson) with [MR !1846](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1846) 👍
* **chat:** fix UI glitches and prepare for gitlab-ui update ([43691bf](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/43691bfe6a3fe5bcac397221883334defbfe242a))
* ensure cleared Duo Chat does not persist ([accb50d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/accb50dabfd87fa53c97b703a55abd65a392c8f1))
* Remove references to `gl.addAccount` command ([c6e6888](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c6e6888366d04cf78f5d9bebc9dc1d045b201724))
* render correct CS status (disabled languages) ([859f573](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/859f573271a8918e77240d5e3e71e6ee92eede7e))
* Send URI instead of document in `DidChangeDocumentInActiveEditor` ([51fc76d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/51fc76d108cc2a8c0db125903e87e4151e17d659))


### Features

* add Duo Chat status item to quick pick menu ([7813d2d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7813d2d88488ca68f934a423bab3c8c976ef04c1))
* add gitlab workflow walkthrough ([8cb0288](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8cb0288715cb248980e09a8050ccdb4336e8900b))
* add remote security scanning ([6cdf5a3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6cdf5a3966b1981ac78e7dedcbf67f733eafb4f0))
* improve tooltip text for disabled languages ([ce7b355](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ce7b355c21277877b7489c2d08db30281b62d5f0))
* introduce enabledWithoutGitlabProject Duo setting ([8861f62](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8861f62275b5a011b68578425a72c501447e98f6))
* **workflow:** added Duo Workflow settings ([48d0c42](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/48d0c422b835fd29d4f67997d1599f726c3901e1))



# [5.4.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.3.0...v5.4.0) (2024-08-05)


### Bug Fixes

* add padding around Duo Chat code blocks ([535765b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/535765bfd5732f3ff19aece8ddbe7ca5224f64e6))


### Features

* add Duo Settings item to the quick pick menu ([18abe16](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/18abe16a88c1f4c18491e9340b88fd0d7df4bd41))
* add language toggle item to quick pick menu ([38db63f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/38db63f05abfbf4a1e32ffae84bb4d9304e8fa38))



# [5.3.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.2.0...v5.3.0) (2024-07-31)


### Bug Fixes

* fix misconfigured highlight.js ([7d75ddd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7d75ddd137ac0e56038697cea4cb234acee815e0))


### Features

* add docs and forum links to quick pick menu ([94da24d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/94da24da0b0cdbefd790e451400a43258a0a7d01))



# [5.2.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.1.0...v5.2.0) (2024-07-30)


### Bug Fixes

* **chat:** styling of in-progress code blocks ([11be499](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/11be49996859f046d0f5051448bce03d8b0add0d))


### Features

* syntax highlighting for gitlab duo chat ([98f3dce](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/98f3dce54facb65eb170026fa96dc453bc01dfea))



# [5.1.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.0.0...v5.1.0) (2024-07-26)


### Bug Fixes

* Omit invalid chat input field for GitLab 17.2 and earlier ([0a903aa](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0a903aa78b762fe2c8216ba14dc32c6d10e05b47))


### Features

* add code suggestions quick pick menu ([67416ad](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/67416ad9ae679de1fb73a1fd5dbffd3c4e04ecca))



## [5.0.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v5.0.0...v5.0.1) (2024-07-26)


### Bug Fixes

* Omit invalid chat input field for GitLab 17.2 and earlier ([0a903aa](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0a903aa78b762fe2c8216ba14dc32c6d10e05b47))



# [5.0.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.21.0...v5.0.0) (2024-07-23)


### Features

* consolidate authentication methods into one command ([c21c63e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c21c63e3df8c318e67ebf13af1a3b193e44609b2))
* remove the VS Code Auth provider in favor of custom OAuth flow ([67e6663](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/67e6663f0149356cd88d62d91794fcd60166af4b))
  - This is a **breaking** change in a sense that if any 3rd party extension relied on the `gitlab` authentication provider, it will temporarily stop working.
  - More information in [!1778](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1778).



# [4.21.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.20.0...v4.21.0) (2024-07-16)


### Features

* add "enabled supported languages" setting ([053938a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/053938acd505e899e9f67279c21536b3565d34db))
* add command to toggle Code Suggestions for current language ([2ca138a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2ca138ad6b428cfc6798b70d7dd2978f51507ba7))



# [4.20.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.19.0...v4.20.0) (2024-07-10)


### Bug Fixes

* correct GitLab casing ([35c28be](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/35c28be6e4c1c8f07959676fd6f3e005e60b6267))
* race condition that caused empty chat responses ([2b55f2d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2b55f2d394513445f3f698dd9e9288d083ff5dd2))


### Features

* add open tabs context setting ([b4aadde](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b4aadde0b1472302bc229ccbc51966c2fe1ba5fa))



# [4.19.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.18.0...v4.19.0) (2024-07-03)


### Features

* Add `draft` custom query property and treat `wip` as an alias ([c4075a6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c4075a6c2f2dec04104e7bfb5474896cd0b9a101))



# [4.18.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.17.0...v4.18.0) (2024-06-27)


### Bug Fixes

* LS initialization to enable source maps ([0d34c56](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0d34c565487a9d0e06b5baa1ac6582d59f0e6a92))


### Features

* add a command to restart language server ([d5d0097](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d5d00978de5f030c5e816b5ab795c4a620c26a0d))



# [4.17.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.16.0...v4.17.0) (2024-06-25)


### Features

* if gitlab.debug is on, show language server stacktraces ([111be12](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/111be1297d94a422c5f28391480b9c31f012792a))



# [4.16.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.15.1...v4.16.0) (2024-06-17)


### Bug Fixes

* **dev:** support windows build when copying language server assets ([7c8c72b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7c8c72b5d48d8256ef47db2d6dc577077f87af43))
* **e2e:** increase wait times ([506c574](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/506c574b4dc0c50375328c5eec713952e88706c0))


### Features

* send code suggestion requests directly to cloud connector ([0f990d5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0f990d56e00ed57ab4e4a8aa57927e592cd7e9ec))



## [4.15.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.15.0...v4.15.1) (2024-06-13)



# [4.15.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.14.1...v4.15.0) (2024-06-13)


### Bug Fixes

* **e2e:** clean up allure report code ([5a78d05](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5a78d0531e34c508f4520c100a7c8a383f279187))
* Fixing broken URL ([bc86e48](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bc86e48ca200822ed9968a2636e747176f0cce4f))
* Sync telemetry setting to the LS ([42d7f51](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/42d7f51c45e7b298b976751677658d2c858d8457))


### Features

* read PAT from file ([67d8b5e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/67d8b5e78e2499e84db95d51b18a1ac098eeba10))
* Language Server: open file tabs advanced context resolver (feature flagged) ([e6610a3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e6610a32ab1b0a53d9ce3430f7abace1cefdb8e3))
* Language Server: introduce 15s default timeout for requests ([df29178](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/df29178421b56d87f07ea94b445220e7aad46ec5))


## [4.14.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.14.0...v4.14.1) (2024-05-31)


### Bug Fixes

* Ensure code suggestions state is updated after init ([4c3d7eb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4c3d7eb448e47d8fb9c83a5cd358281d3d3c10f6))



# [4.14.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.13.0...v4.14.0) (2024-05-29)


### Features

* [Support for multiple suggestion](https://gitlab.com/groups/gitlab-org/editor-extensions/-/epics/50) is now on by default.
* Combine Open in GitLab commands ([5a8d69b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5a8d69be15c98715315a4a2a868eb64b6732e283))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1619](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1619) 👍
* Telemetry for multiple suggestions ([9bb4e81](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9bb4e81a2b5b45016b8fd87874c813a35d95846f))



# [4.13.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.12.0...v4.13.0) (2024-05-24)


### Bug Fixes

* run code suggestion on gitlab-web-ide scheme files ([609c63f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/609c63f6c3f8589bcb631be8a977c7c805c100b9))


### Features

* Add timeouts to GitLab API calls ([1abe5b0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1abe5b074c7187d96a97c05df5c22e21bc5bf3ac))
  * Implemented by [Elian Cordoba](https://gitlab.com/ElianCordoba) with [MR !1559](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1559) 👍



# [4.12.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.11.0...v4.12.0) (2024-05-23)


### Bug Fixes

* hide Duo Chat features when disabled for a project ([47d4954](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/47d495440e019020b55e792d7d71fe9d4827342a))
* respect duoFeaturesEnabled setting for Duo Chat actions ([a012a62](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a012a62707bf795e43eb48f79f5eb35d8a0355f5))
* WebIDE code suggestions respect policies ([c43f16c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c43f16c9da51e4d14a633533a0aa5fecbd2f7d8f))


### Features

* add support for html, css, shell, sql (in non-LS mode) ([1a3acdf](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1a3acdf4d050f7171e7951fa64f67bcfb24dba0e))

### Language Server Updates

#### Bug Fixes

* only set intent when generation is detected ([65987e2](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/65987e2c46dfa261bc8cf81a713ea316c6be59ba))


#### Features

* Add additional attributes to code suggestions telemetry ([2853f70](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/2853f708812eafe6e646cf7630656087ce6014a1))
* better comment detection ([990b08c](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions/commit/990b08c83140f2ada640e314b6ba133791186136))


# [4.11.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.10.0...v4.11.0) (2024-05-13)


### Bug Fixes

* Checkbox background not styling correctly ([36a7468](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/36a746822d7ca9fadb53ac72978ce921d4e0a63a))
* **e2e:** adjust wait for prompt text ([d02c1c1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d02c1c1392ca564eed65ead8aaab8d21bc3f1048))
* **e2e:** wait for tab in e2e code suggestions spec ([dc81c93](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/dc81c93485608305b6edcb5d4ad5192058e0697d))
* FeedbackForm snowplow event missing "environment" ([d7b4ea0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d7b4ea01607f167eb5498490283cd1d18235ddf3))
* Handle malformed setting for user languages for CS ([6f91db2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6f91db221983e492a95ec0ed539c317d7557906b))


### Features

* Add Ide Extension Context to Feedback Telemetry ([4862d61](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4862d6130c43075511c1d0f743d148a6091e6d2d))
* Add markdown to code suggestions supported langs ([545f78d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/545f78d9dd80ee07fb055900306e4526ddace632))
* Add user-configured CS languages ([6c8792a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6c8792aad0a7cc2ac4394ef258d9ccd5ae2637ec))
* Add user-configured CS languages ([ee02432](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ee02432ffb0d9252eef1e6d9b59354e86ef0a838))



# [4.10.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.9.0...v4.10.0) (2024-05-02)


### Features

* **Code Suggestions:** faster code generation streaming ([dcf3161](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/dcf3161f56fd67c9e2a15bf72380a197f22619b9))
* **Duo Chat**: Adjust color of DuoChat body alert ([a551d82](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/commit/cf4513991a4b45a0827461999f770e827a551d82))
* **Developer Experience**: Use forward slashes when finding webfont icons ([766c106](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/commit/50da72f320cfcb1dc4d6cc372f6761e7c766c106))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1535](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1535) 👍



# [4.9.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.8.0...v4.9.0) (2024-04-11)


### Bug Fixes

* add whitespace before created_at in MR overview ([a57a126](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a57a126033491e7c82851e426693232bdce7f9ce))
  * Implemented by [Florian Dageförde](https://gitlab.com/dagefoerde.florian) with [MR !1486](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1486) 👍


### Features

* **chat:** add `/clear` command to Duo Chat ([4a31a73](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4a31a73e97654f7985d2230fae5c491cc5f90573))
* **chat:** added setLoadingState to chat view ([3d25f8c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3d25f8c7e9496ab3e40ebfbf972c3680ae15803f))
* **chat:** removed Experimental badge ([b7e2086](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b7e208676c499940b6271515462b9674eb13251d))



# [4.8.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.7.0...v4.8.0) (2024-03-21)


### Bug Fixes

* **code-suggestions:** detect and cleanup detached streams ([b68ab53](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b68ab53329de8c2382ba063cbd50a8b8e375892e))


### Features

* Add fallback text if CI status does not have illustration ([270bc4f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/270bc4f7b2757a6c19ac1939266e6321be3334d1))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1466](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1466) 👍
* detect unsupported GitLab version when adding token ([5f89b78](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5f89b784093c6506b02314536e2580659df54838))
* Send telemetry event when suggestion stream is accepted ([40ce843](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/40ce8431bffb432bd52d3041fced6c835b49b608))
* Show project folder as tooltip in Merge Request View ([0e1e365](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0e1e365fc5f906a7d8207c8fdfa9552bd3d2bba8))
  * Implemented by [Florian Dageförde](https://gitlab.com/dagefoerde.florian) with [MR !1474](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1474) 👍



# [4.7.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.6.0...v4.7.0) (2024-03-04)


### Bug Fixes

* **chat:** Update to latest DuoChat ([f896ecc](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f896eccf739d1cab89b2845ed0414a6126350a8d))
* **code suggestions:** Fix for streaming logging in the Language Server ([c6bf2195](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp/commit/c6bf2195adef27da49cdd8d5b3a358b36bc0dcea))

### Features

* Introduce updated illustrations for Pending Jobs ([32e84ac](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/32e84ac7c2243c23c0dd4eb1d8e1ddbbd890ef47))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1449](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1449) 👍



# [4.6.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.5.1...v4.6.0) (2024-03-04)


### Features

* **code suggestions:** improve HTTP error reporting in the Language Server ([da643976](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/commit/da643976f09bf79c868f160eadb2c53adc011c45))



## [4.5.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.5.0...v4.5.1) (2024-02-29)


### Bug Fixes

* Send HTTP Agent config to Language Server ([c544fe8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c544fe84307d4b9f6bad9f4df3586dd896f0f84d))



# [4.5.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.4.0...v4.5.0) (2024-02-29)


### Bug Fixes

* stale token cache prevents creating an account ([3adb30b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3adb30b20c4adbb220b9a6e590922b274755db38))


### Features

* **chat:** Update GitLab/UI and add tailwind support ([df5f738](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/df5f7386da1df5919dfd6f70843258f8060e76d1))
* decorate MR files ([763b823](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/763b823d4b6a050c15e8646447071c0be920dbf3))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1434](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1434) 👍
* Use GitLab logo in Git Clone menu ([4290b5b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4290b5bc31946e89718ed49805ec67c94164982f))



# [4.4.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.3.2...v4.4.0) (2024-02-26)


### Features

* **web-ide:** Use auth provider if available ([ba49bf7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ba49bf7c0f2f10ef509478ad1ca9593c939375d7))



## [4.3.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.3.1...v4.3.2) (2024-02-26)


### Bug Fixes

* **chat:** Increased timeout for Web View init ([35080e6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/35080e6d3f1f45cb9ca665617e82b290f19bb5f6))



## [4.3.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.3.0...v4.3.1) (2024-02-22)


### Bug Fixes

* **security_scanning:** Hide reports for GitLab Community Edition ([2780116](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2780116433842c9264063c80b32ebbb2d417af22))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1417](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1417) 👍
* **security_scanning:** Improve fetching security report results ([0e843d0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0e843d00b2c4c35fb6b4ca82df0419bff3c5864c))



# [4.3.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.2.0...v4.3.0) (2024-02-20)


### Bug Fixes

* **chat:** Increase the timeout for Web View initialization ([735cae4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/735cae4d37715453a96f8212c6654ddc1b3ec8f4))
* commenting with just slash-commands shows error ([a8a762b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a8a762ba206dbaaf4093802c980d3bfeab4bc6bd))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !1421](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1421) 👍
* error during status bar initialization breaks extension ([8c017f4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8c017f42a46246fedf30e2d3ffbc8c22648c1628))


### Features

* **chat:** set up Duo Chat WebView with initial state ([b2ea32c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b2ea32cb41dbcb2d3c7ed8ece5e68366e46c9cd4))



# [4.2.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.1.0...v4.2.0) (2024-02-15)


### Features

* **code suggestions:** enable license check feature flag ([30d0254](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/30d02549d5f4e2942e37d936d8727836cc98575c))



# [4.1.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v4.0.0...v4.1.0) (2024-02-14)


### Bug Fixes

* **chat:** Update to latest DuoChat ([ecd32e1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ecd32e125e2bf0e8a3bc1c4157b54282fd87292b))
* Sync load scripts in webviews to fix CORS ([e77140a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e77140a17ad15f50f2cfa76c37f2c205ee5cf458))


### Features

* **code suggestions:** show license status ([9958314](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9958314a0472611d2b69ef81fb4b8005a97536d3))



# [4.0.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.101.1...v4.0.0) (2024-02-08)

This is a breaking change because the GitLab Duo Code Suggestions feature will now only work with GitLab instances 16.8 and higher.

### Bug Fixes

* show comments on MR diff (and remove decorations) ([95b92be](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/95b92be3b321d038b705f500d1d0f4d68b735284))


### Features

* **desktop:** stop code suggestions for gitlab projects if disabled ([8bbda54](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8bbda545047503f903443e52db0b99b4b431cf7b))
* Minimum GitLab version warning ([5985c26](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5985c2698739958a85f7f886073e017e873e7815))
* Show progress status and pipeline error states ([7f352f5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7f352f5b06b386a454f525e226ddd454da61e961))



## [3.101.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.101.0...v3.101.1) (2024-02-01)



# [3.101.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.100.0...v3.101.0) (2024-01-30)


### Bug Fixes

* **chat:** catch streaming error in webide to not crash chat ([572c7f0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/572c7f0204ca253a5c9558eba537fafa186ebf59))
* **chat:** leading assignment of gitlab:chatAvailable in browser ([5972f54](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5972f54834ec58f73965fd190ddd212542e329ef))
* **chat:** removed unnecessary dependencies ([bdba804](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bdba804a4dc26de1649276051d1ddc5cf15187fe))


### Features

* Add support for image diff in Merge Requests ([6cdb5e1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6cdb5e1eb7fcd78131b7e92a7814a52880bd8e79))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1319](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1319) 👍
* **chat:** accept platform as a param for 'getChatSupport' ([d55f308](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d55f3083d2a64ec5d52051ad1e554dec1622e512))
* **chat:** process `/clean` slash command ([402c43e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/402c43ee17e11fc608c4962891d753d9c9b55d00))
* detect revoked token and offer re-authentication ([ea76c39](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ea76c3919ec078a510302291425d6575611f41e4))
* Display trigger jobs in sidebar ([b1765f2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b1765f28afe5a177159676bb03efa548ca3c0d21))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1336](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1336) 👍
* Don't use Diff when comparing empty media file ([8e300e5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8e300e5478e9c8ed8d744b9e623dbc8e2dbab21c))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !1355](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1355) 👍



# [3.100.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.99.0...v3.100.0) (2024-01-17)


### Features

* **chat:** show chat only when it can be used by user ([d5cd1f0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d5cd1f07b7ed715b09faab86438df80a7ca729b4))



# [3.99.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.98.0...v3.99.0) (2024-01-16)


### Bug Fixes

* Clean code style ([76a9dc0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/76a9dc00d63df8c76253c42a271b7084411557b2))
* Specify ignoreCertificateErrors option for the language server ([ad4a077](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ad4a077573e0e7e7d0e713041efc35124a506989))


### Features

* Move streaming decision to the LS ([99a1a0f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/99a1a0fa92bbfc03954ee6594a42d2bbc692a938))



# [3.98.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.85.0...v3.98.0) (2024-01-11)


### Bug Fixes

* Fix broken link fragments in README ([502dbbd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/502dbbdf36f0a61f7867da6588e28737fb048653))


### Features

* **chat:** enable Duo Chat for SM instances ([0e4e04b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0e4e04bf9603876cf86970f8b313ad04782114ba))
* Display comment thread state using VS Code API ([12775bb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/12775bb9f4292a31ca6607e916ba09990437aa4d))
* make location blob path linkable ([ca7d389](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ca7d3894e928349211e6b289eef4132de742d060))
* render links in security findings webview ([f064166](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f064166f07b7bbdb7b4eaec9f984dda905f710b3))


# [3.97.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.96.1...v3.97.0) (2023-12-26)


### Features

* Update label for code suggestions flag ([cf849e3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/cf849e31598c12eb9e3725e0b961a27a84ee2400))



## [3.96.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.96.0...v3.96.1) (2023-12-21)



# [3.96.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.95.0...v3.96.0) (2023-12-21)


### Bug Fixes

* **cs-stream:** Clean loading icon flicker ([e3d45bb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e3d45bba6358f233c497dc9d5345a44fa62fd88f))


### Features

* add vulnerability identifiers & solution ([f384024](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f38402496af690b95e39311d0f9e1f8a04aacd26))
* enable streaming for the chat ([5e5432c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5e5432cfcfa85713a47ee8a453dd2b25a5a42be0))
* enable suggestion streaming by default ([65a968a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/65a968aa1ca422d65a7ff1b288a400163c3b8bba))
* Support using web ide in the language server ([bda65ec](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bda65ec3b4bd2a30133be4120bfb23e23c30984e))



# [3.95.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.94.0...v3.95.0) (2023-12-20)


### Bug Fixes

* Fix language server browser build path ([f3cfd39](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f3cfd39af82f5d67bc3cf536368582bf003a68ef))


### Features

* **code_suggestions:** Added LSP based streaming ([56b2cc8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/56b2cc8b0a654317b68614b8b85a8f6986fac44f))
* Decide whether to stream data based on the intent ([140cb27](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/140cb27feb3c431353c1f69e970565f86aa9d0c8))



# [3.94.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.93.1...v3.94.0) (2023-12-19)


### Bug Fixes

* unblock build with path and fs fixes ([738161d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/738161d70b5538450869cd504a3e14f294d472e4))
* update min VS Code version to 1.82.0 to support Language Server ([e98d557](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e98d5574312975e119800b110f86840862fd0897))


### Features

* add vulnerabiltiy location to webview ([5db715a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5db715a300e1e6fda1c90bddddd54461c2061ffe))
* Ensure HTTP agent settings are used in VSCode with keepalives ([af38e25](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/af38e25b48bbb8e7b64406225f6aa870641514e5))
* Use Keep-Alive connection to connect to server (part 1) ([2138233](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/21382337e9de767ee2705903b1f1b12c99682f86))

### Community contributions 👑 (not user-facing)

* Fixed by [@mjgardner](https://gitlab.com/mjgardner)
    * [docs: fix default custom queries link](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1274) 👍🏽


## [3.93.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.93.0...v3.93.1) (2023-12-14)


### Bug Fixes

* enable suggestions cache by default ([8d7865f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8d7865f4b17e2347642e85d2452baa6814d1d808))
* End LS request when canceled ([ce78d2c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ce78d2c425063016d8a8a51384ba76dd78743b40))



# [3.93.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.92.0...v3.93.0) (2023-12-13)


### Features

* Specify project path in LSP workspace settings ([7aad253](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7aad253a3e9249c480d9dddc03089f6ba8c4a803))



# [3.92.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.91.0...v3.92.0) (2023-12-08)


### Features

* add refactor command to Duo Chat ([3c87525](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3c875251f4e340fb38a5c1dee132a133cd9ddb6e))
* Support log level configuration ([6288dbd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6288dbdc983ec029f50622be9c8c911178d72cd8))



## [3.91.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.90.1...v3.91.0) (2023-12-06)


### Bug Fixes

* upgraded @gitlab/ui package to 71.6.0 ([2b3ce81](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2b3ce817dc898cdfb040e1144b5152e6ee520298))


### Features

* enabled slash-commands for DuoChat ([3dc0d9d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3dc0d9d648f12dc6dd424adda6a719a9d2d686c1))
* migrate chat commands to slash commands ([82bdfb8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/82bdfb854ee6b5f6ebaeaabff19c51d21cc55f40))



## [3.90.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.90.0...v3.90.1) (2023-12-04)


### Bug Fixes

* Code suggestion gutter icons in Web IDE ([e1dd6ad](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e1dd6adfa0bb29065f76d0642b10cea8d9048c34))
* Do not enable LSP in Web IDE ([97cc301](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/97cc301754af0d3b52f4e1c6fbfe7fbe23895fa6))
* Fix gutter icon persisting across tabs ([553ff7e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/553ff7e726b583c30e3e7e027f7483bca626ce82))


### Features

* Add "codeSuggestionsClientDirectToGateway" feature flag ([7a6e048](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7a6e048fa9aa59b2b74279ec7983feac08579e07))
* add passing suggestions cache config flag ([f9ba575](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f9ba5750ba28e2d37f986c48372fc0fac38d7708))
* Bump version of LSP to v3.20.0 ([cbe85a2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/cbe85a2a6e687919e2a5ba41f702d477c25d53db))
* open securty finding in sideview ([4279470](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4279470e39fbe3e4aec984ae296f94cca2dad5c0))
* render markdown for security findings ([c0749b8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c0749b8ee3a960540da5585b83b4f804a8da9838))



# [3.90.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.89.0...v3.90.0) (2023-12-03)


### Features

* Code suggestions gutter icon status ([24373b4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/24373b42eaaef7783bacb168b8d97f78b79ae3cd))
* use LS Code Suggestions by default ([e7ee390](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e7ee3906e2abe88722c8f1a42c33114c0395bce4))



# [3.89.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.88.0...v3.89.0) (2023-12-01)

This Version also updates code suggestions Language server from version [3.17.0 to 3.18.1](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp/-/blob/main/CHANGELOG.md).


### Features

* **security:** add more security finding details ([025bc54](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/025bc54479540cfbd2773a9e7f1b917ef12016f8))



# [3.88.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.87.0...v3.88.0) (2023-11-29)


### Bug Fixes

* add npm install for commit-lint ([9aa45a6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9aa45a68788bd32f40f755d80d9eef3918426180))
* **code suggestions:** increase size of status icon ([9a37631](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9a3763162ebb0b2fc14ddda54cd3b238c5051626))
* **code suggestions:** un-fill loading and error status icon ([5a78020](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5a7802083526856d80cf96a552af83b12d7e3136))
* **status icon:** Handle parallel completion requests ([6a84948](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6a84948caac290948a824bf76c6c18728b2d7fdf))


### Features

* language server suggestions react to api errors ([0fdd611](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0fdd611ce9e64f0e363466049f5f52e8e2ef7617))
* show loading state for LS suggestions ([80651b2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/80651b2ca88809a9966e4f7992f205a112e193e9))
* suggestions status manager handles missing account ([1a35c74](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1a35c7499a160b411e3bbaf50f4a4167467de023))



# [3.87.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.86.1...v3.87.0) (2023-11-24)


### Bug Fixes

* Only catch unchanged_document in intellisense context ([ca24ae7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ca24ae72e7081ada2105c8eda7b98a1c45301c67))


### Features

* Language Server listens on account changes and updates token ([5b2aea3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5b2aea31164105490c271fa60af5482114569ed6))



## [3.86.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.86.0...v3.86.1) (2023-11-17)


### Bug Fixes

* Do not request suggestions when deleting or adding spaces ([d56d71f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d56d71f3c683bc91ad86071c0bc93952b30ba8fe))



# [3.86.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.85.1...v3.86.0) (2023-11-16)


### Features

* add Duo Chat toggle setting ([32e46bb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/32e46bbea369296710650013e8e35f113f15ec0f))



## [3.85.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.85.0...v3.85.1) (2023-11-16)

### Bug Fixes

* chat role graphql type ([5c0f8fe](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5c0f8fe394a9f7eb0fca1940afb3ee1a17c450ea))
* correct border on checkboxes in chat ([8346281](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8346281a0e54322d0e870ca9080d9c90fbcd6b3b))
* do not throw when remote URL is unexpected ([575318a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/575318a9eaaa69b5a81ae51a9a2cf620590001f0))
* enable starting multiple LS at the same time ([c5889f1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c5889f1c003af2de0f41d295fcb28e07e5d203fb))
* git clone now lets you select an account ([3f95993](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3f959935035140b97f6e5316839a5f6ce5e31b96))
* hid SVG sprite for Duo Chat ([03e8269](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/03e826984dda5e24368d0f2ac6cd73eeb70e5315))
* **language-server:** correct feature flag usage ([43a2a11](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/43a2a119f234bea6795e73c76e36057b94e82204))
* Sends only the relative Path ([822bcd3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/822bcd3b9d4e9ea5e6f464d938e97cca397df9b3))
* **snowplow:** Fixed issues with duplicate events being sent to Snowplow ([e5c4555](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e5c4555f6b04f990828794c20318a0d103163b1a))
* switched to basic CSS variables for Duo Chat ([ec6f0b8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ec6f0b8eadfa053d19c9632c9270b15f580fbb59))
* **telemetry:** Assure code suggestion telemetry state manager exists ([f0a72fc](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f0a72fc3d97dcc886fd751213561f96b9ca00139))
* **telemetry:** Fixed issue with telemetry category ([0f16d59](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0f16d59fb0aff6b5aea2c9053e8b7f081491616e))
* **telemetry:** Reject open suggestion sooner in the life cycle ([c0ecc68](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c0ecc6810865fab2b3df66ae37b684abc7a6b96d))
* the OS keychain issue is not Ubuntu-specific ([d5ed8d4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d5ed8d4f9ef0717df322402f2016ce8fcbdd0878))
* Update AI enable setting with correct config target ([efa9387](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/efa9387385fdf75baa547977192792671a103d09))
* update API error handling ([2148c24](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2148c24fedb0c487e3be5c56c7aeb7fc7996b95f))
* updated gitlab-ui to 67.3.3 ([08e6aad](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/08e6aadd190856e8de4838b5c005f1209e6b229e))
* user feedback modal to not overlap scrollbar ([9414692](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/94146923e936e9b6e5d7e4783e4948a69b17972c))


### Features

* Add Generate Tests chat feature ([3bf3a73](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3bf3a7301adcc9aa929fc0ff247edaaa7beb6027))
* add message extras display to the chat ([cb77cf1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/cb77cf1c67046f69478b6f05f1b5183a08ea2a9c))
* add shortcut for toggle ([d61cf59](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d61cf597a32b8b129a96637d06bc5a844f99951f))
* Add token validation ([6391115](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/639111595bb7c9f95fbeb06f2f63be3bfd695ec9))
* allow data: protocol in src ([1956107](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1956107151a501d3a5d2c9bbce44c92ac1305f02))
* Allow Duo Chat to be used outside of GitLab project ([a1a44a6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a1a44a6c571c99b79f6d8a078422ae33874c9528))
* allow to use Duo Chat only with SaaS accounts ([45fc7fc](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/45fc7fc81ad7906051a5a62d34ddd53950aff2c5))
* Check for completion feasibility ([7f610ff](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7f610ff05f2cba24a573ed9de443bdc7942f2ff0))
* Enable code suggestions telemetry in browser environment ([83d7c0b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/83d7c0b25ba1b1fd51101a7b29aec4a62693eadc))
* GitLab Duo chat as Vue2 application ([a488be9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a488be94d90131ade80854f9bdf91225872dd0c2))
* integrate language server ([0a5daa2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0a5daa284476aab896ef698bddd7913baa82f835)), closes [#803](https://gitlab.com/gitlab-org/gitlab-vscode-extension/issues/803)
* Limit max height of codeblocks in the chat ([ebf57db](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ebf57db1c057365453248dadf0d7ec5474d3ddce))
* Provide file context to duo chat ([65af6c4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/65af6c4f4d8d7a3703c360ad46c3547d7c6a1eb5))
* revert "add Duo Chat toggle setting" ([ba3b480](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ba3b4800c44deaae7e2a6a6dbf75d2c6acca723d))
* **secure:** uncapitalize severity label in treeview ([e42510d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e42510dfa686a5f4cd92faaab5183754ee839a78))
* send client context to LS ([1193cc1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1193cc155292b7db284caa1931a2c30d07758a19))
* Send feedback for gitlab duo chat ([7c027f4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7c027f489f48c24d3ed47aed6a67f51ca39c9991))
* send language with Code Suggestions request ([7bb09a1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7bb09a16b0ebf36f613db968b2e1af6d24af5c4b))
* send suggestion accepted event to LS ([b0f6d03](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b0f6d035d5a904535e1e3e7040ab9b33d41668a4))
* show count for security findings groups ([26cdc8c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/26cdc8c0072be688e0bbd6e73ee6de26ba2f6e10))
* support inline completion from LS ([a377c7d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a377c7df8f072ddc50a2a2e912de9cc9ed87ac67))
* switched chat to GlDuoChat component ([8bcf25c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8bcf25ca5dc5747558f5a415034bf0974b4a5173))
* **telemetry:** Add status code ([b0c0165](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b0c01652a238d40aa7fa239f75b5e20fe4b89332))
* update Chat hotkey ([7208c8e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7208c8eec65cd8d16b2a2d39f913742d649436f2))
* update prompt content with response from API ([a93a693](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a93a693bd65c98b7ec184fc831901bac1fc376eb))
* upgraded gitlab-ui to 68.7.0 ([1407445](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/14074453db9b13655c1f8d50af6ddd5c77bd34b7))


# [3.85.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.75.0...v3.85.0) (2023-11-16)

This version hasn't been released due to a CI issue.


# [3.84.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.83.0...v3.84.0) (2023-11-10)


### Features

* send client context to LS ([1193cc1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1193cc155292b7db284caa1931a2c30d07758a19))
* send suggestion accepted event to LS ([b0f6d03](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b0f6d035d5a904535e1e3e7040ab9b33d41668a4))
* switched chat to GlDuoChat component ([8bcf25c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8bcf25ca5dc5747558f5a415034bf0974b4a5173))



# [3.83.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.82.0...v3.83.0) (2023-11-06)


### Features

* Add token validation ([6391115](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/639111595bb7c9f95fbeb06f2f63be3bfd695ec9))



# [3.82.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.81.0...v3.82.0) (2023-10-31)


### Bug Fixes

* enable starting multiple LS at the same time ([c5889f1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c5889f1c003af2de0f41d295fcb28e07e5d203fb))
* the OS keychain issue is not Ubuntu-specific ([d5ed8d4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d5ed8d4f9ef0717df322402f2016ce8fcbdd0878))


### Features

* Add Generate Tests chat feature ([3bf3a73](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3bf3a7301adcc9aa929fc0ff247edaaa7beb6027))
* add message extras display to the chat ([cb77cf1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/cb77cf1c67046f69478b6f05f1b5183a08ea2a9c))
* support inline completion from LS ([a377c7d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a377c7df8f072ddc50a2a2e912de9cc9ed87ac67))
* update Chat hotkey ([7208c8e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7208c8eec65cd8d16b2a2d39f913742d649436f2))



# [3.81.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.78.0...v3.81.0) (2023-10-19)


### Bug Fixes

* git clone now lets you select an account ([3f95993](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3f959935035140b97f6e5316839a5f6ce5e31b96))


### Features

* show count for security findings groups ([26cdc8c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/26cdc8c0072be688e0bbd6e73ee6de26ba2f6e10))
* **telemetry:** Add status code ([b0c0165](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b0c01652a238d40aa7fa239f75b5e20fe4b89332))



# [3.80.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.78.0...v3.80.0) (2023-09-29)


### Bug Fixes

* chat role graphql type ([5c0f8fe](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5c0f8fe394a9f7eb0fca1940afb3ee1a17c450ea))
* **language-server:** correct feature flag usage ([43a2a11](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/43a2a119f234bea6795e73c76e36057b94e82204))
* **telemetry:** Fixed issue with telemetry category ([0f16d59](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0f16d59fb0aff6b5aea2c9053e8b7f081491616e))


### Features

* add shortcut for toggle ([d61cf59](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d61cf597a32b8b129a96637d06bc5a844f99951f))
* integrate language server ([0a5daa2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0a5daa284476aab896ef698bddd7913baa82f835)), closes [#803](https://gitlab.com/gitlab-org/gitlab-vscode-extension/issues/803)
* revert "add Duo Chat toggle setting" ([ba3b480](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ba3b4800c44deaae7e2a6a6dbf75d2c6acca723d))
* Implemented by [@rosskipp](https://gitlab.com/rosskipp) with [MR !1024](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/1024) 👍




# [3.79.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.78.0...v3.79.0) (2023-09-29)


### Bug Fixes

* chat role graphql type ([5c0f8fe](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5c0f8fe394a9f7eb0fca1940afb3ee1a17c450ea))
* **language-server:** correct feature flag usage ([43a2a11](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/43a2a119f234bea6795e73c76e36057b94e82204))
* **telemetry:** Fixed issue with telemetry category ([0f16d59](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0f16d59fb0aff6b5aea2c9053e8b7f081491616e))


### Features

* add shortcut for toggle ([d61cf59](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d61cf597a32b8b129a96637d06bc5a844f99951f))
* integrate language server ([0a5daa2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0a5daa284476aab896ef698bddd7913baa82f835)), closes [#803](https://gitlab.com/gitlab-org/gitlab-vscode-extension/issues/803)
* revert "add Duo Chat toggle setting" ([ba3b480](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ba3b4800c44deaae7e2a6a6dbf75d2c6acca723d))



# [3.78.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.77.1...v3.78.0) (2023-09-20)


### Features

* **secure:** uncapitalize severity label in treeview ([e42510d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e42510dfa686a5f4cd92faaab5183754ee839a78))
* update prompt content with response from API ([a93a693](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a93a693bd65c98b7ec184fc831901bac1fc376eb))



## [3.77.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.77.0...v3.77.1) (2023-09-15)


### Bug Fixes

* Update AI enable setting with correct config target ([efa9387](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/efa9387385fdf75baa547977192792671a103d09))


### Features

* Limit max height of codeblocks in the chat ([ebf57db](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ebf57db1c057365453248dadf0d7ec5474d3ddce))



# [3.77.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.76.1...v3.77.0) (2023-09-11)


### Features

* Enable code suggestions telemetry in browser environment ([83d7c0b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/83d7c0b25ba1b1fd51101a7b29aec4a62693eadc))



## [3.76.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.76.0...v3.76.1) (2023-09-06)


### Bug Fixes

* **snowplow:** Fixed issues with duplicate events being sent to Snowplow ([e5c4555](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e5c4555f6b04f990828794c20318a0d103163b1a))
* **telemetry:** Assure code suggestion telemetry state manager exists ([f0a72fc](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f0a72fc3d97dcc886fd751213561f96b9ca00139))
* **telemetry:** Reject open suggestion sooner in the life cycle ([c0ecc68](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c0ecc6810865fab2b3df66ae37b684abc7a6b96d))



# [3.76.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.75.0...v3.76.0) (2023-09-04)


### Bug Fixes

* Sends only the relative Path ([822bcd3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/822bcd3b9d4e9ea5e6f464d938e97cca397df9b3))


### Features

* Check for completion feasibility ([7f610ff](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7f610ff05f2cba24a573ed9de443bdc7942f2ff0))
* GitLab Duo chat as Vue2 application ([a488be9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a488be94d90131ade80854f9bdf91225872dd0c2))
* send language with Code Suggestions request ([7bb09a1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7bb09a16b0ebf36f613db968b2e1af6d24af5c4b))



# [3.75.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.74.0...v3.75.0) (2023-08-30)


### Bug Fixes

* Fix gitlab platform creation for code suggestions ([36debb3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/36debb321c98d6084f10691c4dd3a973444eccc6))
* handle security findings validation gracefuly ([3d20b8a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3d20b8a090f2a54f467aa70f956b487a76fc777e))


### Features

* introduced support for Vue2 webviews ([679c62b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/679c62b4ffa87f1797f3c16b83028f484ad9fd2a))
* mark chat window as experiment ([cd46c85](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/cd46c854acfdec51fc81badaf74f1e5161922247))
* **telemetry:** Added Track Telemetry to Platform ([179fb19](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/179fb19e652380e7e8bd7cc464cda2676c1e9d48)), closes [gitlab-org/modelops/applied-ml/code-suggestions/ai-assist#254](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/issues/254)



# [3.74.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.73.0...v3.74.0) (2023-08-21)


### Features

* add toggle on/off for code suggestions ([efee9a1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/efee9a13b96f41e461e270299c870706269fc63e))
* Enable security findings ([d2887f4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d2887f4b98821a32ae861b2b7f45d3edbcac614e))
* Remove project requirement from Code Suggestions ([d1ae632](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d1ae632dbeac03cec379cd635c1291bd9734aa05))



# [3.73.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.72.3...v3.73.0) (2023-08-16)


### Bug Fixes

* Handle security findings project roles ([b840523](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b8405233fd8caa68cfc9389fa38e0db9caef51aa))
* handle security findings when report is empty ([6302a8c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6302a8cb6f59c862352fe8c3254665a63c21520b))
* Hello world command showing up in Web IDE ([5434c10](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5434c10e4a2803d302e474511b78827ad4d37c83))
* properly mark terraform/terragrunt as supported languages ([24df900](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/24df900e3bcb553d982d3f10449a966d6792b258))
* respect vscode telemetry settings ([c0ea55a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c0ea55a5a1daa9fccb4ec32638ee9dbae5fdd1f6))


### Features

* Add code suggestions experiments data ([0bf93a6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0bf93a67979a9ebf1518aef0f394b685c5ad0301))
* add Duo Chat toggle setting ([1a151de](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1a151de85b3310e57647c66cd95af7a6f8ddf8ff))
* Add reset command to GitLab Duo Chat ([99a83ad](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/99a83ad449ebbfa40b3aea7d54cbdb84605f9330))
* add webview for security findings ([fac29a0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/fac29a012e91d2f82abf75a3b329883889e550a0))
* hide chat window unless gitlab account is connected ([f7a77cd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f7a77cd1d1d223449e9e802e878b1077c711e4ac))
* Update GitLab Duo icon ([183eadd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/183eaddc724a083c5e1c85a3830253ab3ebcf3da))



## [3.72.3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.72.2...v3.72.3) (2023-08-04)


### Bug Fixes

* use nonce to load chat webview app ([d98ba99](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d98ba99620cb3d4579f5f1b7b3df57b4f72afabd))



## [3.72.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.72.1...v3.72.2) (2023-08-03)



## [3.72.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.72.0...v3.72.1) (2023-08-02)


### Bug Fixes

* Update mediator command calls ([49db7e8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/49db7e87e62a1b73aceb357ec4b28e24f17c4aec))



# [3.72.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.71.0...v3.72.0) (2023-08-02)


### Features

* added the GitLab Duo Chat webview ([05aa83c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/05aa83c2f29baa8bf396dec4a3295d4efaf822db))
* improve chat ui ([c7a109c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c7a109c8c44b4dff56fc2d94d7e93441767f615b))



# [3.71.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.70.0...v3.71.0) (2023-07-27)


### Features

* swap mocked security report  data for real data ([d0a7459](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d0a74590b3e6118917c924eaf1b5a92524eacb22))



# [3.70.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.69.0...v3.70.0) (2023-07-26)


### Features

* enable code suggestions by default ([6129a92](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6129a9288b786cf41527165394b17bf7e429b277))
* introduce promotional banner ([f45489c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f45489c4d9f31f243e8d6164cd20e96ab8bde092))


### Performance Improvements

* dont wait for 5 seconds if chat response is ready ([8da7e31](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8da7e318727833c8b68c3517dd73f04eaa497c3c))



# [3.69.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.68.4...v3.69.0) (2023-07-25)


### Features

* Add language to code suggestions telemetry ([1ce24e3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1ce24e38025cd2b942c62832caf71823d1c5bbae))
* introduce "explain selected code" command for GitLab Duo Chat ([1afd135](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1afd1359b9f9e193117f07676e0887f1da1c7fb3))
* support terraform in code suggestions ([9125ee9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9125ee931e0a19fb0ef9b72ceb7a7ec4601a60f6))



## [3.68.4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.68.3...v3.68.4) (2023-07-20)

### Bug fixes

* Ignore erb files for code suggestions to improve internal team member Markdown experience
([4c1fa845](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/commit/4c1fa845b174ad2f1745d9e03dbae30e8448c19c))

## [3.68.3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.68.1...v3.68.3) (2023-07-13)


### Bug Fixes

* broken issuable webview (couldn't initialize) ([3c6fadd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3c6fadde1135618fc1c4a75957580da0fe7c1fc9))



## [3.68.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.68.0...v3.68.2) (2023-07-13)

This is a rollback release because `3.68.1` broke the issuable webview. This version is identical to `3.68.0`.


## [3.68.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.68.0...v3.68.1) (2023-07-13)


### Bug Fixes

* handle edge case when getting GitLab URL for unsaved file ([21cac29](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/21cac2922262234c8c7ed300a8b13b84cdd55a34))
* report accepted suggestions in WebIDE ([09cc39c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/09cc39cbda524d69cfcdb19d6a58234192218953))
* **telemetry:** only count suggestions shown to the user ([3e1b6fe](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3e1b6fe70458422b129f7c60856f52f2924e46c7))



# [3.68.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.67.0...v3.68.0) (2023-06-26)


### Bug Fixes

* git clone not working for projects without repositories ([436b073](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/436b07316ff85c2b51ae89ffe813c68d215bed92))
* running job SVG is not showing ([0c28696](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0c286967ae2e28f4e342f38b1f74fad370a0f15c))
  * Fixed by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !857](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/857) 👍


### Features

* improve AI Suggestions UI status element to cover main scenarios ([b82cff1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b82cff16d4948ea258e8c1eeb463866ec581fc92))
* Include model data on telemetry ([ac2ff72](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ac2ff72b66ce5458e367731ef1ce70aa01950703))



# [3.67.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.66.0...v3.67.0) (2023-06-15)


### Bug Fixes

* add "single-file-component" languages ([cf4efe0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/cf4efe02b779e239ec3de80f5ac66ab9f830b2fc))
* concise status bar indicators ([7c8b600](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7c8b60020328051359fe9869e84bd7abae9e6982))
* produce correct package json in watch:desktop job ([fd516cb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/fd516cb22cf4b5450ae983d500c21b10d7913931))


### Features

* add status bar indicator to Workflow Code Suggestions ([8a0022f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8a0022fdf2a6f01f0c787fb5757e5330f544a750))



# [3.66.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.65.0...v3.66.0) (2023-06-08)


### Bug Fixes

* only suggest when authenticated and for known languages/schemes ([13d313f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/13d313f649bdd3532af2bcb3313770cc98c11371))


### Features

* Add circuit breaker to code completion ([2351f4f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2351f4f0f343423efffa5670db728f10bc8ee149))
* Add Code Suggestion Telemetry ([3134597](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/31345978e4a20fc2939dcba5c9196db4319b6bcd))



# [3.65.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.64.0...v3.65.0) (2023-06-02)


### Features

* code suggestions use the new JWT authentication flow ([98b9aaa](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/98b9aaa3309cd41db8bf126b00145efb2deb8027))

### Refactoring

* [refactor: Rename `noRepository` state to `openRepositoryCount`](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/798)
  * Implemented by [Anatoli Babenia](https://gitlab.com/abitrolly) 🎉🔥



# [3.64.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.63.0...v3.64.0) (2023-06-01)


### Bug Fixes

* remove all mentions of the old issue/MR URL format ([a53c169](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a53c169d01eb2e66671716ff9a575a7c0a491fec))


### Features

* debug log all http fetches ([dfc369d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/dfc369d81bb22a5bdddd0ae6dd3ce4e540dc88e2))



# [3.63.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.62.0...v3.63.0) (2023-05-19)


### Bug Fixes

* create issue and MR commands are broken thanks to deprecated URL ([47c2c80](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/47c2c80a47f77c62c751dfca74ca53e5aa5a5db2))
* reorder pipelines to fix GitLab ordering issue ([cb3988a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/cb3988aea1f384819599752dcc1afaee6e1d8798))


### Features

* add context menu to open issue/mr in browser ([14e8012](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/14e801235329a186ad19fa87cf61e4577a995854))
  * Implemented by [@busybox11](https://gitlab.com/busybox11) with [MR !782](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/782) 👍



# [3.62.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.61.0...v3.62.0) (2023-04-28)


### Features

* add context menu to open issue/mr in browser ([eb21b46](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/eb21b46cb65ff645bff70de53ad4069b1171c0ff))
* Ai Assisted Code Suggestions: Prompt Collection V1 ([9d3886e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9d3886ef4c3707183ba6ed710af184371e3f2728))



# [3.61.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.60.0...v3.61.0) (2023-04-11)


### Bug Fixes

* Retrieve active project for custom text editors ([3230bde](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3230bde31bc9eabce1b52c846e77e9574948ca6b))
  * Fixed by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !742](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/742) 👍


### Features

* add scope and search level to advance search prompt ([d64984b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d64984b939f595ee4d7d81ae96e2b108de89f15b))
  * Implemented by [Paul Marshall](https://gitlab.com/shnaru) with [MR !749](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/749) 👍
* clicking ambiguous project item lets user select a project ([8313ba4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8313ba4ae4ae65bf3a7bf345b7b1b3ac53d207ce))
* refreshing current branch info works when webviews are open ([112958c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/112958c1cdc20e4e707ba43e54c95f8a826aa182))
  * Fixed by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !745](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/745) 👍
* use permalinks in Copy Link to Active File command ([4e6f9be](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4e6f9bee23870f9e26ed3e2ed0a5ec67fedb0034))



# [3.60.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.59.2...v3.60.0) (2023-02-20)


### Bug Fixes

* Don't use NODE_ENV for selecting webview ([e04abce](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e04abce24ec94278240d0d56e6441f8906360ad5))
  * Fixed by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !727](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/727) 👍
* Properly handle SSH URLs with custom ports ([23e851d9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/23e851d9ac836bb2bca455d541c29762bccbb37d))
  * Fixed by [Johannes May](https://gitlab.com/johannesmay) with [MR !736](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/736) 👍


### Features

* Change Compare command to use default branch ([179aa19](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/179aa19afb0b2508e9daf8701954a40d73403d2e))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !723](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/723) 👍
* Display message when job is erased ([7c69a84](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7c69a849c0ba7736cd8edfeed952575c7371ccb3))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !725](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/725) 👍



## [3.59.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.59.1...v3.59.2) (2023-01-19)


### Bug Fixes

* Exclude pendingjob.html in vscodeignore ([456c203](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/456c20359565af4d821c647596fb53a8b6351b3e))
  * Fixed by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !718](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/718) 👍



## [3.59.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.59.0...v3.59.1) (2023-01-18)


### Bug Fixes

* remove SVG badges from README to fix publishing ([82e2248](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/82e2248e53391dd2f5336c17ed8694a476945abc))



# [3.59.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.58.0...v3.59.0) (2023-01-18)


### Features

* View Pending CI jobs ([0f2ab11](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0f2ab11562ad42a938710472d09087e070676566))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !705](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/705) 👍



# [3.58.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.57.3...v3.58.0) (2023-01-12)


### Features

* Allow custom query reviewer Any and None ([1319283](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/13192830c28bf8da647326ea7126a1820b2d93e9))
  * Fixed by [Raul Reyes](https://gitlab.com/mk/raul-reclique) with [MR !713](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/713) 👍

### Refactoring

* [refactor: Add EventEmitter to CurrentBranchRefresher](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/703)
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) 🎉🔥



## [3.57.3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.57.2...v3.57.3) (2022-12-13)


### Bug Fixes

* Allow AI Assist server url to be empty ([95d292b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/95d292b91a7c36cac23f44bd75385673540137f9))
* don't override OAuth token with an invalid response ([a2528ee](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a2528eec15ee93474ce1eefcdbf20a9fa65606d0))



## [3.57.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.57.1-fix...v3.57.2) (2022-12-01)

* Small documentation updates and updated URL for GitLab code completion.

## [3.57.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.56.0...v3.57.1) (2022-11-17)


### Bug Fixes

* Fetch all jobs in the pipeline instead of just first page ([1becad8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1becad88a98ce8023f1d1ed62e2b9fcc6c09688f))
  * Fixed by [Mikhail Kuryshev](https://gitlab.com/mk9) with [MR !680](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/680) 👍


# [3.57.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.56.0...v3.57.0) (2022-11-15)


### Features

**All features in this release have been implemented by [Lennard Sprong](https://gitlab.com/X_Sheep)** 🚀. Thank you once again for making the extension better 🙇

* Display trace for running Jobs ([c5633b1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c5633b1f3ff8fad7399c44bcad53a0cf893182f1)) [MR !674](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/674)



# [3.56.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.55.0...v3.56.0) (2022-11-08)


### Bug Fixes

* Do not log.debug all account props ([498a8d1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/498a8d117125a992b8c2bffc81745765e66d1e00))


### Features

* ai assist stop sequences ([2152712](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/215271243c81c9bd2df790b6c4fa054ce6774ef0))


### Performance Improvements

* Reduce number of calls AI assist makes ([e474dc7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e474dc78cb9a4023c5ec296605bb8dedd13805d4))



## [3.55.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.55.0...v3.55.1) (2022-11-08)


### Bug Fixes

* Do not log.debug all account props ([916961a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/916961a905e1cfb0f6fabaa83a6d366c57aa6814))



# [3.55.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.54.0...v3.55.0) (2022-10-31)


### Features

* Add authentication for AI Assist ([3b5a9fe](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3b5a9feabf9168336a74691359f5e4303d602a7d))
* open changed MR file using a context menu in the TreeView ([39937c5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/39937c53aaca39f1371a6a1e7db438e7628359fa))



# [3.54.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.53.0...v3.54.0) (2022-10-12)


### Features

**All features in this release have been implemented by [Lennard Sprong](https://gitlab.com/X_Sheep)** 🚀. Thank you once again for making the extension better 🙇

* Display external status in pipeline tree ([1278c37](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1278c37196bd48874ca92e5885b3c52c85e67120)) [MR !671](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/671)
* display logs for finished CI jobs ([0c7dcb2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0c7dcb2a4ffe782781fb8284061e4ee113a770d9)) [MR !661](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/661)



# [3.53.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.52.0...v3.53.0) (2022-10-10)


### Features

* Add support for AI-assisted code completion (alpha) ([446cc63](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/446cc63a6034c0d6ef3c9b970015b4be40d64e6e))



# [3.52.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.51.0...v3.52.0) (2022-09-23)


### Bug Fixes

* mention GitLab: Remove Account command in docs and error messages ([382dd76](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/382dd76de21bf6fc494ca60f38244edf1b794588))


### Features

* Allow disabling Status bar items through VS Code UI ([542eac7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/542eac7709b3fd7b7b5e8b89519abbb4872bb64d))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !649](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/649) 👍
* YAML Completion with variable names in braces ([1e41b29](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1e41b2908f1d24afc8ad00b4b0cc745270d7ee3d))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !650](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/650) 👍



# [3.51.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.50.0...v3.51.0) (2022-09-15)


### Features

* Allow retrieving pipelines for tags ([4cdfcc5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4cdfcc5540481dd2ecf42ac7a6fff1d5389cf073))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !644](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/644) 👍



# [3.50.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.49.0...v3.50.0) (2022-09-09)


### Bug Fixes

* use project id from the project in repository ([63dbf50](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/63dbf50717ff5b4e25d4e06a0335ec2c30549c7b))


### Features

**All features in this release have been implemented by [Lennard Sprong](https://gitlab.com/X_Sheep)** 🚀. Thank you so much for making the extension better 🙇

* Add context menu buttons for retrying/cancelling Job ([2134f78](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2134f78b9bd640e3efa8e9ce13e710a826a6853c)) [MR !633](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/633)
* Add pipeline menu action for downloading artifacts ([f4d027c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f4d027c616c884bef9fc42e5f20dfac43b811134)) [MR !635](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/635)
* Add retry/cancel pipeline to context menu ([c2caee4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c2caee40cfcbfb5d13cc790f9a2d1cfcf6c6a7ab)) [MR !637](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/637)
* Display merged CI YAML ([3c3a67a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3c3a67ab2ecc0c5270aba5e515919b78f15f2ce5)) [MR !626](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/626)



# [3.49.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.48.1...v3.49.0) (2022-08-30)


### Bug Fixes

* Show proper error message when add token to existing account fails ([c6a3b8b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c6a3b8bce38c9df7e65dc45114e9f7d23f2261af))
  * Implemented by [Chris Qiang](https://gitlab.com/chez14) with [MR !623](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/623) 👍


### Features

* Add Download Artifacts context button ([b06a1d9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b06a1d9fbf2cbc2eb93a541a756cf6c3cc8c316d))
  * Implemented by [Lennard Sprong](https://gitlab.com/X_Sheep) with [MR !625](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/625) 👍



## [3.48.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.48.0...v3.48.1) (2022-08-12)


### Bug Fixes

* downgrade VS Code for integration tests ([9b214c9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9b214c905538493539ae2ad955d3e78e245564f1))
* handle ssh urls with custom ports ([310dcc8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/310dcc8ff687695fae11160e69b1407981dc14b0))
  * Implemented by [Adam Groves](https://gitlab.com/addywaddy) with [MR !616](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/616) 👍
* hotfix for vulnerabilities not conforming to the RestIssuable ([c728e10](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c728e10492b37a2d7e573efbb4c9768cab1b7b35))



# [3.48.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.47.2...v3.48.0) (2022-07-28)


### Features

* Add Yaml file suggestion message ([b813d7e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b813d7eda7f8a38b0a75c6888567e31560dbd66f))
  * Thanks to [Tuna Ozkoc](https://gitlab.com/TunaOzk) for initial implementation [MR !466](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/466)
* minimal version check ([ff0c05b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ff0c05b8a74a74acb8e6c8437c9e9f90294b3135))



## [3.47.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.47.1...v3.47.2) (2022-06-22)


### Bug Fixes

* don't fetch closing issue if it's missing iid ([5e846c3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5e846c3a23fc64bec7a5e53c914edc9fe60d26f0))



## [3.47.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.47.0...v3.47.1) (2022-06-09)


### Bug Fixes

* indicate that extension is waiting for OAuth redirect ([32e1cd7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/32e1cd78abf936185c1ee0dc3fa2109da54badd9))



# [3.47.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.46.0...v3.47.0) (2022-06-08)


### Features

* OAuth authorization welcome screen ([e1f1f6a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e1f1f6a15c7c63edd8c363ceb8b0f1eaf811bf1f))



# [3.46.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.45.0...v3.46.0) (2022-06-06)


### Bug Fixes

* update extension description to official ([9d0f314](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9d0f314a045bc8023b4fd52d89f47c976a4e7a5b))


### Features

* update extension banner color ([6d068b1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6d068b1a4ea95068006684b66e00c1bf797fe940))



# [3.45.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.44.2...v3.45.0) (2022-06-06)


### Bug Fixes

* improve UX for removing accounts where there is no account ([f0fef4d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f0fef4dba615a232dd60ac278dd8c98ea44c94f4))
* update extension icon ([fb5f20c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/fb5f20c85b0e3ee6585b15560d673597e40b7bd4))
  * Implemented by [George Tsiolis](https://gitlab.com/gtsiolis) with [MR !570](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/570) 👍
* update extension marketplace icon ([0755ff6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0755ff6065721ff7524cffbc4404cbee0319d7d4))


### Features

* introduce debug mode ([2e0137f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2e0137f04e58a7028a53b7b2d5d2791718eb930a))
* OAuth authentication to GitLab.com ([e140b2d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e140b2d6d333454dfba562d88bf1b697079b89b8))
* rename "Set GitLab Personal Access Token" command to "Add Account" ([c94c5fe](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c94c5fe7385161350156a5096867b772999943f2))



## [3.44.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.44.1...v3.44.2) (2022-05-25)


### Bug Fixes

* explain why creating a comment on a large diff fails ([d7a8c46](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d7a8c463d37b10cb0db02a338d5ec63e58eca0db))
* warn user about OS Keychain issue on Ubuntu ([066d115](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/066d1153c3bf0e8cd8bcacc4f7d6659994a5b82b))



## [3.44.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.44.0...v3.44.1) (2022-05-13)


### Bug Fixes

* accounts can be removed even when they are missing token ([7fbf8d9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7fbf8d95a492eb5286f2e24c48676c1c4b485f93))
* remove tokens from secret storage when we remove account ([291e6da](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/291e6dad1b3a172f1a9196d6f2b8ebff5f66c8bb))



# [3.44.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.43.1...v3.44.0) (2022-05-13)

In this release we redesigned account management. Now it's possible to have multiple accounts (e.g. work and personal) on the same GitLab instance.

### Bug Fixes

* render markdown in MR comments ([9e249c7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9e249c7729cfd89150a4e493a0114d13b5bc2c2b))


### Features

* support multiple accounts on the same GitLab instance ([bb469bf](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bb469bfdf51b92339d20f3c2331316ff1d69a46b))
* Updated code completion to include *.gitlab-ci.yml ([b8e3551](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b8e3551efe8ca0be10934dcd99c2dea848671dbe))
  * Implemented by [Zack Knight](https://gitlab.com/zachkknowbe4) with [MR !549](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/549) 👍
* use VS Code SecretStorage to store tokens ([01cfc88](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/01cfc889ff8f4c22ccd40d631796066d3bd03e5c))



## [3.43.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.43.0...v3.43.1) (2022-05-03)


### Bug Fixes

* avoid "GitExtensionWrapper is missing repository" error ([537ed11](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/537ed11fd742ac9923b05fe4075848bd3ac956ca))



# [3.43.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.42.2...v3.43.0) (2022-05-03)

This release contains a [larger refactor of the extension internal state](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/558). This refactor closes 9 outstanding issues:

- [Detect GitLab instance from git remote](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/34)
- [Smarter multiple instances management](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/116)
- [Consistent handling of remotes, instances and branches](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/260)
- [Setting non-existing gitlab.remoteName causes git remote parsing error](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/394)
- [Assertion error if the local repository has a remote pointing to a local path](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/418)
- [Remote name will be used for every sub project](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/448)
- [Support instanceUrl at the workspace folder level](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/480)
- [not compatible with git remote using ssh config](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/537)
- [gitlab.repositories setting (used for preferred remote) can't handle relative path](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/546)

The following settings are no longer used:

- `gitlab.instanceUrl` - The extension automatically matches your GitLab token instance URL with the Git remote (based on host). If this matching fails, right-click the repository item in the GitLab Workflow TreeView and manually assign a GitLab repository.
- `gitlab.repositories.preferredRemote` - if you've got multiple GitLab projects for the same repository (e.g. fork and upstream), right-click the repository item in the GitLab Workflow TreeView and select which project should be used.

### Bug Fixes

* few minor issues with issuable search ([24253c1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/24253c140221b698a3d74e98e056871109215967))


### Features

* project-centric extension internal model ([d1c97a1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d1c97a17f2ae262af375523ef11d273c5f05ab90))



## [3.42.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.42.1...v3.42.2) (2022-04-20)


### Bug Fixes

* can't access issue detail from closing issue ([5fdaffa](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5fdaffa03cc90aecc409acc2c6357a56335a4b6d))
* MR /merge quick action ([b5d55b5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b5d55b5f180c67c5abe32dbe152a50e0f49188e5))



## [3.42.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.42.0...v3.42.1) (2022-04-12)


### Bug Fixes

* include response status and body in every fetch error ([c19a56e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c19a56e35bcc99584c941aa6996d3db6677d6cdd))
* support branches with hash symbol in their name ([58cfecc](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/58cfecc621222827fdf98f402f2d5a7b66b7778b))



# [3.42.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.41.2...v3.42.0) (2022-04-01)


### Features

* validate token right after user added it ([bcea7aa](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bcea7aa734da5442dd151f9fe301bfea3b420d88))



## [3.41.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.41.1...v3.41.2) (2022-03-14)


### Bug Fixes

* getting MR discussions can only work on GitLab 13.9.0 or later ([79cad6a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/79cad6af5d439ffc477bbe95c70a3f0df76a8ec7))



## [3.41.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.41.0...v3.41.1) (2022-03-09)


### Bug Fixes

* comment out Front Matter from README.md ([13bac39](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/13bac3934af389583de210639402fc64843d0a76))



# [3.41.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.40.2...v3.41.0) (2022-03-09)


### Features

* support <current_user> in more "user" filters ([e73d7d6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e73d7d6b2f020a5343308e293dbb88fd86183942))
  * Implemented by [Mathieu Rochette](https://gitlab.com/mathroc) with [MR !441](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/441) 👍
* validate GitLab instanceUrl setting ([d3e740f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d3e740f49d90a885f29f483d213db0924a31e442))
* validate instance URL for new token ([54ed3e1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/54ed3e1331044039676d2f0233392f5bf3f181a8))



## [3.40.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.40.1...v3.40.2) (2022-01-18)


### Bug Fixes

* fetch all pages from API ([d7da635](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d7da63560fb8aac7db48161c6b7ec6934e0cf0f5))
* incorrect branch encoding ([9e394ec](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9e394ec44c9069d540a6bec1af9c3c1794598e92))



## [3.40.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.40.0...v3.40.1) (2022-01-06)

- Improved README (https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/436, https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/434)
- Reduced extension size and startup time (https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/428)


# [3.40.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.39.0...v3.40.0) (2021-12-14)


### Bug Fixes

* manual job has unknown status in sidebar tree ([fd44ec9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/fd44ec99295411cffd09a671536fceba130d4511))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !415](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/415) 👍


### Features

* render suggestions in MR reviews ([3178746](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/31787465c3e2659e4b56b3c80ddf46b69b8209b4))
* render suggestions in MR webview ([beeefcf](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/beeefcf1255df3ac5df854bcf2b9431919ce5c5e))



# [3.39.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.38.2...v3.39.0) (2021-12-07)


### Bug Fixes

* extension ignores expired token and fails in the wrong place ([4661365](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4661365ada85c7b0af49fd5fb9ec205ff73498ea))
* show closing issue status bar item ([ef16e08](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ef16e08b8f6bd5bd6b941902384c3363d6a4eb6d))


### Features

* introduce log level to logging ([c40ab03](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c40ab038bc0b98e423b184ac74652010fac29d8a))
* open status bar MR link in webview ([56415fb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/56415fb6502dcfe3a53f252e2329eb5361e0def9))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !416](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/416) 👍



## [3.38.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.38.1...v3.38.2) (2021-12-01)


### Bug Fixes

* remove pipeline ID from custom query parameters ([1fe2e96](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1fe2e9685d72c2937e386ecf3db13bb49628bd6a))
* remove support for GitLab 10 and lower ([adef152](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/adef1525946ca5ad4f301c620ebecdc65a10f7ad))
* validating CI conig fails when there are multiple remtoes ([1bbac0d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1bbac0d0a34c034e91fbdcddd0e0ab9f7d07ca0d))



## [3.38.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.38.0...v3.38.1) (2021-11-22)


### Bug Fixes

* make Vue template rendering safer ([086dfbe](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/086dfbe24079b1b2aa80981b6daf2c6d2286263b))



# [3.38.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.37.0...v3.38.0) (2021-11-17)


### Bug Fixes

* rename Succeeded CI job status to Passed ([28c4864](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/28c4864b3c2ca7a221ba6f242714aa4d8a4c434b))
  * Implemented by [Justin Mai](https://gitlab.com/Justin.Mai) with [MR !361](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/361) 👍


### Performance Improvements

* reduce packaged extension size ([10334ac](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/10334ac57721431bc39dc07c9322f68b4ae9ee6f))
  * Big thanks to [Ethan Reesor](https://gitlab.com/firelizzard) who designed the original implementation in [Draft: Bundle with esbuild](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/334). He also helped with measuring performance and consulting the final implementation in [perf: reduce packaged extension size](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/368) 👍



# [3.37.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.36.1...v3.37.0) (2021-11-11)


### Features

* add 'view as tree' option ([#407](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/407)) ([dc11640](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/dc116408dbe67759091ce2fc8c1a24af0bd5d81c))
  * Implemented by [Liming Jin](https://gitlab.com/jinliming2) with [MR !346](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/346) 👍



## [3.36.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.36.0...v3.36.1) (2021-11-08)

* no extension changes, only upgrading release tooling

# [3.36.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.35.0...v3.36.0) (2021-11-08)


### Bug Fixes

* retry loading failed project ([15bb715](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/15bb7156d2bd16e1ea4c4c0bff07e859b1592417))


### Features

* use GitLab credentials from environment variables ([9f22adc](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9f22adc5dcd40f1317a92d2177d74242bfca8f95))



# [3.35.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.34.0...v3.35.0) (2021-11-02)


### Bug Fixes

* delayed job has unknown status in sidebar tree ([875a9c1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/875a9c1a83a35d1c3b13a56c20cba8ff686e6ea1))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !367](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/367) 👍
* images not working in MR/Issue comments ([16d03ff](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/16d03ff863c7962948c6bc534b743fa4748134e7))
* show user an error when project can't be found ([c6c7307](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c6c7307c0eac9f22e8d84d96e71a0704bda95618))


### Features

* change tree view to list repositories first ([3e26dad](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3e26dadf044a5ed9a85ebd4549a88981487c0c9c))



# [3.34.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.33.1...v3.34.0) (2021-10-26)


### Bug Fixes

* replace only fixed-size strings in rendered HTML ([c8f1116](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c8f11166578c1fa6f3476fa6dbc97a0e85ae4eb0))


### Features

* support multiple remotes ([f45c3ac](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f45c3acff78e74c70fcc981e7613e9e9e7694dce))



## [3.33.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.33.0...v3.33.1) (2021-10-19)


### Bug Fixes

* draft comments disappear after refresh ([b7553b8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b7553b8e6706f452265fc166c85eac6629a7c06e))



# [3.33.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.32.0...v3.33.0) (2021-10-08)


### Bug Fixes

* open repo on Windows ([83435cf](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/83435cf326815baa7c02acf46db65914360a7e29))
  * Implemented by [@firelizzard](https://gitlab.com/firelizzard) with [MR !354](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/354) 👍


### Features

* enable esModuleInterop ([ef702c7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ef702c7bcf9d811a7006af99ee7254f53e293e96))
  * Implemented by [@firelizzard](https://gitlab.com/firelizzard) with [MR !353](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/353) 👍
* refresh branch info when window gets focused or branch changed ([69096ce](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/69096ce702e02792504beb3b1d9111b8e1704e5c))



# [3.32.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.31.0...v3.32.0) (2021-10-06)


### Features

* add project/ref picker to open repo command ([5f84c2b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5f84c2bf7f229a16a3833c1806952d5b390fc5a8))
  * Implemented by [@firelizzard](https://gitlab.com/firelizzard) with [MR !338](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/338) 👍
* refresh MR only if it the refresh is user initiated ([428b28e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/428b28e7779f928fa5d112a186be94df45b5f74f))
* refresh tree view and status bar together ([e5da54a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e5da54a6a922f703739315a2b2df1a8543c8febf))



# [3.31.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.30.0...v3.31.0) (2021-09-22)


### Bug Fixes

* **remote fs:** tell user when token is invalid ([25489c2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/25489c2e7a9296a1ee906d0976cd002c0f0cd126))
  * Implemented by [@firelizzard](https://gitlab.com/firelizzard) with [MR !337](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/337) 👍


### Features

* disable ci validation and MR discussions for old GitLab versions ([1252c1b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1252c1bf5851b5c79286fe2188bff4a73835b3fd))
* remove the minimum version check and update readme ([0da2ba8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0da2ba81be56f8d987c9c53f76870cdc0e5ca2aa))
* use GraphQL to get snippet content ([b2090ab](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b2090ab4df3675418caba86cd550cb1eb61561d1))



# [3.30.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.29.1...v3.30.0) (2021-09-10)


### Features

* show markdown help for missing token ([e31aedd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e31aedd5225ed307eac95575c0a4c88f5053f160))
  * Implemented by [@firelizzard](https://gitlab.com/firelizzard) with [MR !333](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/333) 👍



## [3.29.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.29.0...v3.29.1) (2021-08-26)


### Bug Fixes

* enable extension for virtual workspaces ([aee6529](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/aee6529cfb46586ccb359a2d0d336de1f01b2ce6))



# [3.29.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.28.2...v3.29.0) (2021-08-26)


### Features

* remote repository filesystem provider ([4476be5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4476be5df94e6ce977480614a0938ee7aaad35cb))
  * Implemented by [@firelizzard](https://gitlab.com/firelizzard) with [MR !321](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/321) 👍



## [3.28.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.28.1...v3.28.2) (2021-08-18)


### Bug Fixes

* Merge request detail doesn't show for a large MR ([b0488d5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b0488d521144f68e1bac1c40108fd8f2149bbc16))
  * Implemented by [@PeterW-LWL](https://gitlab.com/PeterW-LWL) with [MR !329](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/329) 👍



## [3.28.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.28.0...v3.28.1) (2021-08-12)


### Bug Fixes

* ci stages not correctly sorted ([7b0c4fb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7b0c4fb8d7764a4f9bc51ee6ea73a18566df0a38))
* matching instance URL with token is too strict ([9be7eb4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9be7eb4566adfec9a07b3800dde48079b6f84c06))



# [3.28.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.27.1...v3.28.0) (2021-08-11)


### Bug Fixes

* **gitRemoteParser:** allow self hosted git remote with ssh on custom port ([23f73b6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/23f73b63ddcbd0968111795f5c8d93df27986059))
  * Implemented by [@PeterW-LWL](https://gitlab.com/PeterW-LWL) with [MR !319](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/319) 👍


### Features

* open local file during MR review ([0e05d42](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0e05d42e10c91e9f72607b419160b15d740ca4d2))



## [3.27.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.27.0...v3.27.1) (2021-08-02)


### Bug Fixes

* use namespace CI lint endpoint to handle includes ([b21d5ba](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b21d5baac35356295596d8a87316d571a7fb6c7e))
* web URL for file contains backwards slashes on windows ([118fc32](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/118fc322555db4944466d6ce4321c463f6016712))



# [3.27.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.26.0...v3.27.0) (2021-07-28)


### Bug Fixes

* error 400 when on a branch with special chars ([2645e0e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2645e0e85cf5689f0fab6c5ac1fc12bd65289d08))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !218](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/218) 👍


### Features

* improve UX when extension fails to create new comment ([4b3acbf](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4b3acbfb50e64c6884dd8ca8940838c41560ae07))
* show CI pipelines and jobs ([bba4609](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bba46099b6bb8aeabe2f76fb448a2aaf117669d9))


### Community contributions 👑 (not user-facing)

* Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull)
  * [chore(ci variables): update the ci\_variables.json](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/317)
  * [ci: run check-ci-variables job only on default branch](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/318)

# [3.26.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.25.0...v3.26.0) (2021-07-13)


### Features

* apply snippet patch ([2cc8a54](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2cc8a541665d1c9befa7ec0e9e5f24abcec7be00))

### Documentation

* **welcome:** Prefill token name and scopes on welcome screen ([4b9aa6c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/commit/4b9aa6c58a9f84a4f998ff86bf492b0df09bd52f))
  * Implemented by [@espadav8](https://gitlab.com/espadav8) with [MR !305](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/305) 👍


# [3.25.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.24.0...v3.25.0) (2021-07-08)


### Bug Fixes

* api calls fail when instance is on custom path ([0b487a6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0b487a62b76d160a95703080a89aea94694d6e3d))
  * Implemented by [@malinke](https://gitlab.com/malinke) with [MR !303](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/303) 👍
* inserting snippets not working for newly created snippets ([efaf1b7](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/efaf1b74acf42a6ab80a5f2a1d96e46da34722a0))


### Features

* create snippet patch ([750bae4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/750bae4b2b8616bdf424a96f248ee51439351a1a))
* **gitclone:** add wiki repo clone support for git clone command ([621c396](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/621c3968083a7626436bed5be83613c3a409d33f))
  * Implemented by [@tonka3000](https://gitlab.com/tonka3000) with [MR !292](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/292) 👍



# [3.24.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.23.3...v3.24.0) (2021-06-30)


### Features

* indicate which changed files have MR discussions ([47f244b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/47f244bc2252b9faacc31d1007d4c1e1d65c0e9d))
* **view issues-and-mrs:** checkout local branch for merge request ([174a955](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/174a95575ca85e9db054c3ddfbf882c755cc309a))
  * Big thanks to [@Musisimaru](https://gitlab.com/Musisimaru) who designed the implementation in [MR !229](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/229) 👍



## [3.23.3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.23.2...v3.23.3) (2021-06-22)


### Bug Fixes

* pipeline actions not working ([363ea1d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/363ea1dfaffc71488ec4736d7577843bd96897fb))



## [3.23.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.23.1...v3.23.2) (2021-06-17)


### Bug Fixes

* minimum version check ([a937eb3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a937eb3221b9537dca763507a07d08dd1af9b0fc))
* prevent duplicate comments and comment controllers ([bf0773e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bf0773e78f9dd337d1acdcd2225d815bf61e75c6))



## [3.23.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.23.0...v3.23.1) (2021-06-16)


### Bug Fixes

* temporarily disable version warning ([3252b73](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3252b739b31a89cbdac14998b20b12f0a2a678cc))



# [3.23.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.22.1...v3.23.0) (2021-06-16)


### Bug Fixes

* **readme:** correct link to PAT settings ([f86a61c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f86a61cbe18464fe13be3bc74ba533661850a2f4))
  * Implemented by [@Rexogamer](https://gitlab.com/Rexogamer) with [MR !278](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/278) 👍
* **welcome screen:** update link to personal access token settings ([e59b91d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e59b91dd237bd847b9dd1a38be40ab82ae2d2081))


### Features

* warn users about out of date GitLab version ([0337ad0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0337ad0e5dd2ee04626748d5dbd871e2c41c089d))



## [3.22.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.22.0...v3.22.1) (2021-06-10)


### Bug Fixes

* each overview tab gets opened only once ([b4f7b1c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b4f7b1c51d9b085762c7382b1ba7e704bfdd87e6))
* limit commenting only to GitLab MRs ([40d2f11](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/40d2f111a9f20f9100535a9d625ae092c39f78cf))



# [3.22.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.21.0...v3.22.0) (2021-06-08)


### Bug Fixes

*  comment controller can be disposed regardless of API failures ([28d322c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/28d322c6d693359e72a3089cd6b2932f5acb336f))
* validate CI command didn't show validation result ([21080d6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/21080d6c447c25ccd1a5f36720f93ec9766e7d03))


### Features

* **editor:** extend autocomplete glob pattern ([aa41067](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/aa41067666df5119ea8cd70669a35d68b04b3d7d))
  * Implemented by [@IAmMoen](https://gitlab.com/IAmMoen) with [MR !270](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/270) 👍

# [3.21.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.20.1...v3.21.0) (2021-06-04)


### Bug Fixes

* remove the broken code related to creating user snippets ([bb2b8a0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bb2b8a01af81ec66f6f6b76989e13020a119cab0))


### Features

* create new MR diff comments ([f4e6e86](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f4e6e8692865e3a6b9207eb6c7d615fbbf6fa235))



## [3.20.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.20.0...v3.20.1) (2021-05-19)


### Bug Fixes

* generating file link on windows uses backslash ([78f44f2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/78f44f238dc103e2565bb496011bb8da73afd2f2))



# [3.20.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.19.0...v3.20.0) (2021-05-06)


### Bug Fixes

* limit command availability ([f6b5607](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f6b5607d5ee9435fb729b97e20b05404e7e4bba1))
* **status bar:** status bar items couldn't open MRs and issues ([f41977e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f41977ece56cb288f4310c09d267e59b36587875))
* doesn't react to enabling git extension after it was disabled ([a999cc4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a999cc4c6edaaeccb803dfb395f0f3f6e5f5f4aa))


### Features

* **side panel:** use git repositories to look for GitLab projects ([3ee0a69](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/3ee0a696d1eb6e9ddcc782bc81945fd7e1956049))
* **status bar:** use repositories instead of workspaces ([bb9fed9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bb9fed950bb48a5518164166bb3da2c36e6a6723))

### Community contributions 👑 (not user-facing)

* Implemented by [@tnir](https://gitlab.com/tnir)
    * [Replace node-sass with sass](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/240)
    * [ci(eslint): update eslint from 6.8.0 to 7.25.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/241)
    * [ci(eslint): update @typescript-eslint from 3.10.1 to 4.22.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/242)

# [3.19.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.18.0...v3.19.0) (2021-04-30)


### Bug Fixes

* stop falsely logging that git extension isn't working ([b6cd7e6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b6cd7e6415d9eeae37e633e0970bc7f908431727))


### Features

* add commenting ranges for new file versions in diff ([6c22d3a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6c22d3a74300fbea98ab31a5e73c337acfb38583))
* show welcome view when there is no git repository ([ce9af7e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ce9af7e59b0b11cfb9af79b82460c43c2f1dcb60))

### Community contributions 👑 (not user-facing)

* Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull)
    * [Fix CI variables update script compares order of items](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/230)
    * [refactor: reduce eslint warnings](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/217)
    * [docs: update outdated sign up link](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/237)
    * [chore: update CI variables](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/238)
    * [docs: add notice to enable fork repo mirroring](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/236)
* [ci: add junit reports](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/183) implemented by [@haasef](https://gitlab.com/haasef)

# [3.18.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.17.1...v3.18.0) (2021-04-14)


### Bug Fixes

* **status bar:** hide all status items when there is no GitLab project ([6a5537e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6a5537ee9ac61abdd9b39e5d0944c282244c339d)), closes [#71](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/71)
* use project_id from the pipeline instead of the workspace project ([7b6f1ba](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7b6f1babd097ad994f08aceda6380b8cd805bddd))
* when fetching pipeline jobs fails, only log error, no notification ([fb75deb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/fb75debbfce0f4a3e1f598b7dae5d401287bbd10))


### Features

* add "Merge requests I'm reviewing" custom query ([740c37d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/740c37dc2370331811d2f62ee53965cc1ef121e7))
* only poll for new status bar information in focused window ([105afe9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/105afe9055377a579f99a162e9a8eb296c49838d))



## [3.17.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.17.0...v3.17.1) (2021-04-12)


### Bug Fixes

* ci variables links are broken ([040a881](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/040a881f0bd017db7147a164070ba4f681c9b1b4))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !215](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/215) 👍


# [3.17.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.16.0...v3.17.0) (2021-04-08)


### Features

* **mr review:** respond to an MR diff thread ([3182937](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/31829375987c55e1935d15d7a4b692365f4bc607))
* **mr review:** show change type for each changed file ([b9f5e12](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b9f5e120b7200b163a8e03a2490a60afe78058f0))



# [3.16.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.15.1...v3.16.0) (2021-04-07)


### Bug Fixes

* **instanceurl:** subpath in self-managed GitLab is not used [#319](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/319) ([7b0cba0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7b0cba0358a31e61776acc55aef08e75b418c7c5))
  * Implemented by [@amohoban](https://gitlab.com/amohoban) with [MR !206](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/206) 👍
* elliptic and y18n have vulnerabilities ([ba067e1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ba067e1b73b8a065a5fd82d9aa54303bebe14d9b))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !214](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/214) 👍


### Features

* rename 'Description' to 'Overview' in MR items ([ca1ad6e](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/ca1ad6e0fc4b606b90f150a370d1a3b8dee5c42c))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !219](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/219) 👍
* **sidebar:** show welcome view if there are no tokens set ([a0fbaee](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a0fbaee10780002f34dfe40200bd690fd02433a5))



## [3.15.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.15.0...v3.15.1) (2021-03-30)


### Security

* [CVE-2021-22195](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-22195) use the same git binary as VS Code ([0fe4c5f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0fe4c5fbcc947dee938635ca2a92a7d2deb6549b))



# [3.15.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.14.2...v3.15.0) (2021-03-17)


### Features

* **mr review:** editing comments on MR diffs ([fb7275a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/fb7275a22eaf6dc71d2c30726b0f755a204b9586))



## [3.14.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.14.1...v3.14.2) (2021-03-15)

* no additional features or fixes, we only fixed the release pipeline ([MR !202](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/202))

## [3.14.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.14.0...v3.14.1) (2021-03-11)


### Bug Fixes

* workspace in project subfolder breaks Open active file on GitLab ([78372e8](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/78372e8b0e78bff8ee3450496452aeeb9592644a))
  * Implemented by [@GrantASL19](https://gitlab.com/GrantASL19) with [MR !185](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/185) 👍



# [3.14.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.13.0...v3.14.0) (2021-03-08)


### Features

* **git:** implement git clone command ([eeedd25](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/eeedd25bffae50e5f60151753cfbcf5b95a50d84)), closes [#222](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/222)
  * Implemented by [@haasef](https://gitlab.com/haasef) with [MR !172](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/172) 👍
* **mr review:** deleting comments on MR diff ([d1d7446](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d1d744624080dea35d6a5d61b28239aafb67747a))
* **mr review:** display whether discussion is resolved or not ([89da179](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/89da17934ebeb560bf494b35c297a9cccc65a260))
* **mr review:** resolving and unresolving discussions ([c7edee6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/c7edee63f30d5d3ac1b637990ba5c0fcb6f61558))



# [3.13.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.12.1...v3.13.0) (2021-02-19)


### Features

* support detached pipelines ([4da4cba](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4da4cba24f9e8602b35def50041dd39eeb88cca2))


### Performance Improvements

* **pipeline status:** remove unnecessary API call for single pipeline ([0c55ab4](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0c55ab427740d67e1a4987b26e791f495e01939b))



## [3.12.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.12.0...v3.12.1) (2021-02-15)


### Bug Fixes

* support displaying users without avatars ([8e42065](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8e42065f135a02d2ced13be27d6a0bc730deafb0))



# [3.12.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.11.2...v3.12.0) (2021-02-10)


### Bug Fixes

* **side tree:** for current branch not working for multiroot projects ([4c5989a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4c5989a20a80513673b90116f6591f040bb25138))
* **sidebar:** log error when fetching items ([2f95666](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2f956665301cbb5cc98663245afcb31c79f3559d))


### Features

* try to get MR diff conent from local git before fetching from API ([b3c5f54](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b3c5f541e2cfd52277c500b27e915b1507279d96))



## [3.11.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.11.1...v3.11.2) (2021-01-29)


### Bug Fixes

* **gitlab-service:** do not fail if project could not be found ([a5a4211](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a5a421141e960e299167dad14587551e11f7f504))
  * Implemented by [@vymarkov](https://gitlab.com/vymarkov) with [MR !130](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/130) 👍
* some self-managed GitLab deployments not handling project URLs ([5c4e613](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5c4e61388a5701d1e7faadc62ca5c6a13b7b0e7e))
* **gitlab_service:** include request URL when logging error ([9d0c8be](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/9d0c8be3dcf04d08891ad9b8f900e45cf2716722))
* **instance_url:** heuristic now supports git remote URLs ([56dab86](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/56dab86117c109443a9422b85b58605fa5b774f1))



## [3.11.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.11.0...v3.11.1) (2021-01-25)


### Bug Fixes

* **publishing:** readme file has to contain absolute URLs ([2580ba3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/2580ba3387ff318483a626dc07633be66efd54aa))



# [3.11.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.10.0...v3.11.0) (2021-01-25)


### Bug Fixes

* **network:** new API logic supports custom certificates ([58c26f2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/58c26f20eabf15c6a7b74845d9e791be01b57c46))
* **webview:** issue/mr details not showing for VS Code 1.53.0 (insiders) ([35d6ecd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/35d6ecd1f5549364fd5376196f922d67026f3bfb))


### Features

* **editor:** auto completion for CI variables ([5c37266](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/5c37266f5bb3e21c3ae596fd7411973b4575986a))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !140](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/140) 👍



# [3.10.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.9.0...v3.10.0) (2021-01-19)


### Bug Fixes

* **mr review:** don't query position for webview discussions ([adc7706](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/adc7706d99c7ae471b939765ae4609b0d2846c72))
* avatars uploaded to GitLab don't show correctly ([6b51e4c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/6b51e4cab0f6444d30561b0118238356608684be))


### Features

* **mr review:** show comments on changed file diff ([cba961a](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/cba961a8953adc1eec2c24c38144e96267aedb7f))



# [3.9.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.8.0...v3.9.0) (2021-01-12)


### Bug Fixes

* **webview:** can't respond in comment thread in webview for MR/Issue ([32c38f5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/32c38f58c471fea2aafce55777bdfc29d4c980a2))
* **webview:** cosmetic fix of label note component ([7ce85cb](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/7ce85cba466ada35c1adb547296b5aeb4ef29fdc))
* **webview:** highlighting labels (including scoped) ([b30a7fd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b30a7fd3fdfd828a8a029c8fa61211d8a5a317b0))


### Features

* **statusbar:** create merge request when none exist for current branch ([33822ff](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/33822ff2a2a23d22a446d2fff3856fa1943aa47a)), closes [#291](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/291)
  * Implemented by [@jotoho](https://gitlab.com/jotoho) with [MR !155](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/155) 👍


### Performance Improvements

* **webview:** use GraphQL to load MR/Issue discussions ([bdcd20f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bdcd20fdb652f20a1eebffcdc001256860ac485f))
* reduce packaged extension size ([8d616d2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/8d616d2be2e010d98f6992fdc62c942e458e7307))
* replace moment with dayjs dependency ([4df1b48](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4df1b4838f1cb5608771ac1978cdb484daa4a7e5))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !141](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/141) 👍



# [3.8.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.7.0...v3.8.0) (2020-12-16)


### Bug Fixes

* **mr review:** showing MR Diff on Windows uses correct file path ([0dcd5e0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/0dcd5e0aa749f1d1e4e5b6ee14b08c867bfa9d03))
  * Implemented by [@Codekrafter](https://gitlab.com/Codekrafter) with [MR !144](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/144) 👍
* label notes disappear after submitting a comment ([89b1fee](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/89b1fee3f3e14e991d72d6f7805da1de876290a5))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !137](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/137) 👍


### Features

* **sidebar:** add avatar to merge request item ([126b4c9](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/126b4c93fb0113d0d6e2dbec047c2cf5c06aa9db))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !142](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/142) 👍
* **webview:** allow submitting comments with ctrl+enter ([fb93040](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/fb93040aad8e07000942a1ff4c9d8f680e8e02cc))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !138](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/138) 👍



# [3.7.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.6.2...v3.7.0) (2020-12-08)


### Bug Fixes

* handle disabled pipelines or MRs ([125af41](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/125af415403cdee697a6ecb19cd4a51f0feecdee))


### Features

* remove experimental features feature flag ([1370d8b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1370d8bb115fecb9ae6585bf84e91b1c21308309))
* **mr review:** show changed file diff (API-provided) ([1c82018](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/1c82018f8c3d6bc2d05dd404e52ec6379ea18415))
* show changed files for the MR ([a2b3f88](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a2b3f881f8de9c30bce5e423b51506a9935d6188))



## [3.6.2](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.6.1...v3.6.2) (2020-11-27)


### Bug Fixes

* custom queries don't work with scoped labels ([d9659c6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/d9659c6bc1213a41fa0dc6aee8ccb9f07a98c171))



## [3.6.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.6.0...v3.6.1) (2020-11-26)


### Bug Fixes

* don't double send message from issue detail ([b7e1ee3](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/b7e1ee30dd917efafae1118e21c7f68d089988ab))
* parse remotes with trailing slash ([12e091b](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/12e091b509ec6505ec0e7c41d3062e73a025dec6))



# [3.6.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.5.0...v3.6.0) (2020-10-26)


### Features

* enable experimental features by default ([eceebcd](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/eceebcda6fc018202481c0a16d863e04f627d7d7))
* include user-agent header in all API requests ([f4f7d48](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f4f7d48e200c168f6c6e9bc0d462168950a8c945))



# [3.5.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.4.0...v3.5.0) (2020-10-21)


### Features

* insert project snippets into the text editor ([a03468d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/a03468d9e525fa9c9835fa8466e48646b8369f18))
* warn user about deprecating custom certificate logic ([280275c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/280275c628904938f29e5d25c74189907402c596))



# [3.4.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.3.0...v3.4.0) (2020-10-19)


### Bug Fixes

* select project dialog gets stuck in a perpetual loop ([194be06](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/194be064912813fb16a5d0f3e9a1ca3fa2d8a4d2))
* **statusbar:** empty brackets show after pipeline status ([4a18c4c](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/4a18c4c23bb8cdbd531a72c24a3b957ef8aaafb5))
  * Implemented by [@KevSlashNull](https://gitlab.com/KevSlashNull) with [MR !102](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/102) 👍
* update extension project links to gitlab-org namespace ([f83b0f6](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/f83b0f6513e75f9fddf0e513be18d12080c5eeb6))
  * Implemented by [@salmanmo](https://gitlab.com/salmanmo) with [MR !109](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/109) 👍


### Features

* add project advanced search options ([bea5d9d](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/bea5d9dd1e4564b1fde3d0bbcde6e4bf081f5c62))



# [3.3.0](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.2.1...v3.3.0) (2020-09-21)


### Features

* better error reporting for fetching project and current user ([facb0e5](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/facb0e5426548e5407f28fffdf439e989be86519))
* detect instanceUrl from git remotes and GitLab access tokens ([457ca51](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/457ca510f1bb22a010d068300b53ad317e501b18))
  * Implemented by [@flood4life](https://gitlab.com/flood4life) with [MR !90](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/90) 👍
* every exception gets logged ([e286314](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/e2863142a8a9c0868c9d5dd116983fdfd1eba877))
* side panel error reporting ([eff8d2f](https://gitlab.com/gitlab-org/gitlab-vscode-extension/commit/eff8d2f8b365d4ab87587bfb412e5d0bd561dd93))



## [3.2.1](https://gitlab.com/gitlab-org/gitlab-vscode-extension/compare/v3.2.0...v3.2.1) (2020-08-31)

- No user facing changes. Release fixes `README.md` images [#226](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/226)

# v3.2.0 - 2020-08-03

- Publish GitLab Workflow extension to Open VSX Registry [#205](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/205)

### Fixed

- Command to create a new issue is not working [#218](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/218)

# v3.1.0 - 2020-07-28

- Copy GitLab link for the active file to the clipboard [#209](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/209)
  - Implemented by [@vegerot](https://gitlab.com/vegerot) with [MR !74](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/74) 👍

## v3.0.4 - 2020-07-03

- Increased interval for polling pipelines and merge requests for a branch [#211](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/211)

## v3.0.3 - 2020-06-29

- No user-facing changes.
- Fixed automated releasing of the extension [#206](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/206)

# v3.0.0 - 2020-06-25

- Support multi root workspaces.
- Enable custom queries in GitLab panel.
- Improvements to the issue and merge request webview.
- Adds gitlab icon as webview tab icon.
- Improve remote URL parsing to support non standard Gitlab usernames.
- Update Extension Icon to match the new vscode-codicons.

### Fixed

- Click on merge request "for current branch" doesn't do anything
- Unable to create Snippets [#195](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/195)
  - Fixed by [@massimeddu](https://gitlab.com/massimeddu) with [MR !62](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/merge_requests/62) 👍

## v2.2.2 - 2020-06-19

- Fix dependency issues caused by publishing the extension using `yarn`

## v2.2.1 - 2020-06-19

### Security

- [CVE-2020-13279](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13279) Prevent possible client side code execution, https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/170

# v2.2.0 - 2019-11-06

- [Experimental Feature](https://gitlab.com/fatihacet/gitlab-vscode-extension#experimental-features): View Merge Request details and comments in VSCode. Click a Merge Request link from the sidebar and VSCode will open a new tab to show the Merge Request details. You can also directly comment on the Merge Request.

## v2.1.1 - 2019-07-10

### Fixed

- Showing issue details and discussions in VSCode was not working properly. Extension was only showing loading screen.

# v2.1.0 - 2019-05-10

### Fixed

- Ensure that WebView is fully loaded before sending message
  - Fixed by [@Grafexy](https://gitlab.com/Grafexy) with [MR !39](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/39) 👍
- Create public snippet when there is no GitLab project in open workspace
  - Fixed by [@ttilberg](https://gitlab.com/ttilberg) with [MR !38](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/38) 👍

### Documentation updates

- [@renestalder](https://gitlab.com/renestalder) improved documentation for additional custom domain information with [MR !35](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/35) 👍
- [@jparkrr](https://gitlab.com/jparkrr) fixed some typos with [MR !36](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/36) 👍

# v2.0.0 - 2019-02-14

- [Experimental Feature](https://gitlab.com/fatihacet/gitlab-vscode-extension#experimental-features): View issue details and comments right in the VSCode. Click an issue link from the sidebar and VSCode will open a new tab to show the issue details. You can also comment to the issue from VSCode.

## v1.9.3 - 2019-02-05

### Fixed

- Fix broken v1.9.2 by including require package
  - Fixed by [@swiffer](https://gitlab.com/swiffer) with [MR !33](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/33) 👍

## v1.9.2 - 2019-02-05 (Please skip this version and upgrade to v1.9.3)

### Fixed

- Node 8.5/8.6 request bug, moved vscode to devDependencies and upgraded npm packages
  - Fixed by [@swiffer](https://gitlab.com/swiffer) with [MR !32](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/32) 👍

### Changed

- [#85](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/85) Print URLs in "No token found" warning
  - This was done for troubleshooting purposes. A lot of people are having hard time to configure the instance url and hopefully this will give them a clue to understand what's going wrong.

## v1.9.1 - 2019-01-18

### Fixed

- [#28](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/28) Creating a snippet doesn't work when only 2 lines selected
  - Fixed by by [@joshanne](https://gitlab.com/joshanne) with [MR !30](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/30) 👍

# v1.9.0 - 2019-01-17

### Added

- Support for crt/key pair certificates for users that may use a \*.p12 certificate
  - Implemented by [@joshanne](https://gitlab.com/joshanne) with [MR !29](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/29) 👍

# v1.8.0 - 2019-01-02

### Added

- A new panel in the GitLab sidebar to show all MRs in the current project
  - Implemented by [@jkdufair](https://gitlab.com/jkdufair) with [MR !27](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/27) 👍

# v1.7.0 - 2018-12-13

### Added

- Ability to work with the non-root domains for self hosted GitLab instances.
  - Implemented by [@tuomoa](https://gitlab.com/tuomoa) with [MR !11](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/11) 👍
  - Special thanks to [@Turmio](https://gitlab.com/Turmio) for helping to test this. 👍

# v1.6.0 - 2018-12-12

### Security

- Fixed NPM security issues

### Added

- Pipeline notification on the status bar will now include the list of running and failed jobs
  - Implemented by [@jduponchelle](https://gitlab.com/jduponchelle) with [MR !23](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/23) 👍

### Fixed

- Refresh buttons on the sidebar were visible for all panes and even for other extensions.
  - Fixed by [@Logerfo](https://gitlab.com/Logerfo) with [MR !26](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/26) 👍

## v1.5.1 - 2018-11-28

### Fixed

- View in GitLab button in the pipeline updated notification was not visible
  - Fixed by [@Clapfire](https://gitlab.com/Clapfire) with [MR !24](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/24) 👍

# v1.5.0 - 2018-11-08

### Added

- A new config option to fetch pipeline data from a different Git remote [Read more](https://gitlab.com/fatihacet/gitlab-vscode-extension#configuration-options)
  - Implemented by [@jduponchelle](https://gitlab.com/jduponchelle) with [MR !22](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/22) and closes [Issue [#59](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/59)](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/59) 👍

# v1.4.0 - 2018-11-06

### Added

- A new config option to toggle pipeline status change notifications [Read more](https://gitlab.com/fatihacet/gitlab-vscode-extension#configuration-options)

### Changed

- Pipeline notifications introduced in v1.3.0 will not be on by default with this version. You need to manually set the option to true.

# v1.3.0 - 2018-11-05

### Added

- A new config option to set remote name manually [Read more](https://gitlab.com/fatihacet/gitlab-vscode-extension#configuration-options)
  - Implemented by [@jduponchelle](https://gitlab.com/jduponchelle) with [MR !18](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/18) 👍
- Extension will show a notification after pipeline status changed
  - Implemented by [@Clapfire](https://gitlab.com/Clapfire) with [MR !21](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/21) and closes [Issue [#32](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/32)](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/32) 👍

### Changed

- Pipeline action will not open the pipeline on the default browser
  - Changed by [@Clapfire](https://gitlab.com/Clapfire) with [MR !20](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/20) and closes [#31](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/31) 👍

# v1.2.0 - 2018-10-03

### Added

- A new config option to toggle MR status on status bar [Read more](https://gitlab.com/fatihacet/gitlab-vscode-extension#configuration-options)
  - Implemented by [@robinvoor](https://gitlab.com/robinvoor) with [MR !15](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/15) 👍

## v1.1.1 - 2018-10-03

### Fixed

- Invalid date parsing for unfinished pipelines.

# v1.1.0 - 2018-10-02

### Added

- A new config option to toggle GitLab related links on the status bar [Read more](https://gitlab.com/fatihacet/gitlab-vscode-extension#configuration-options)
  - Implemented with [this commit](https://gitlab.com/fatihacet/gitlab-vscode-extension/commit/6318028f1d3959ee0f70d22bb31b68bcbc4a998c) closes [#58](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/58)

### Fixed

- [#57](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/57) Can't use extension with self-hosted gitlab - scope validity
  - Fixed with [this commit](https://gitlab.com/fatihacet/gitlab-vscode-extension/commit/cf2fafec91df042ada35609848f251b6ebb02aeb)

# v1.0.0 - 2018-09-26

### Added

- A new panel on the sidebar to see the list of your issues and MRs alongside with the links and informations for your current branch. [Read more](https://gitlab.com/fatihacet/gitlab-vscode-extension#sidebar)

### Fixed

- [#41](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/41) Extension not opening the pipeline from command pallete
  - Fixed with [this commit](https://gitlab.com/fatihacet/gitlab-vscode-extension/commit/080a8c609f57df19b093dcfd0ec44cf89e7f5790)
- Respect VSCode http.proxy settings
  - Implemented by [@martianboy](https://gitlab.com/martianboy) with [MR !13](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/13) 👍

# v0.6.0 - 2018-03-02

### Added

- A new config option named `gitlab.ca` to set self signed certificates. [Read more](https://gitlab.com/fatihacet/gitlab-vscode-extension#configuration-options)
- A new config option named `gitlab.ignoreCertificateErrors` to ignore certificate errors while connecting and fetching data from GitLab instance. [Read more](https://gitlab.com/fatihacet/gitlab-vscode-extension#configuration-options)

### Fixed

- [#26](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/26) Support for on-premises GitLab instances with self-signed
  - Fixed by [@piec](https://gitlab.com/piec) with [MR !8](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/8) 👍
  - Possibily fixes [#23](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/23) and [#10](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/10)
- [#29](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/29) Support for on-premises GitLab instances with no certification (http)

## v0.5.2 - 2018-03-01

### Added

- GitLab Workflow now supports multiple instances.
  - Implemented by [@csvn](https://gitlab.com/csvn) with [MR !5](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/5) 👍
- ESLint and Prettier integration for dev environment.
  - Added by [@alpcanaydin](https://gitlab.com/alpcanaydin) with [MR !6](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/6) 👍

### Changed

- Private Access Token set and remove flow changed. We automatically migrate existing keys so this change shouldn't break your existing workflow or you shouln't need to do anyhing. Read more [here](https://gitlab.com/fatihacet/gitlab-vscode-extension#setup) and [here](https://gitlab.com/fatihacet/gitlab-vscode-extension#multiple-gitlab-instances).

## v0.5.1 - 2018-02-27

### Added

- Add an option to turn off the issue link in the status bar

# v0.5.0 - 2018-02-25

### Added

- [#25](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/25) Create snippet from selection or entire file.
- [#22](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/22) Add support for .gitlab-ci.yml lint-ing
- [#20](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/20) Added Read more and Set token now buttons to token ask notification.

## v0.4.3 - 2018-02-19

### Fixed

- [#19](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/19) Can't add token

## v0.4.2 - 2018-02-18

### Added

- 🎉 [New logo](https://gitlab.com/fatihacet/gitlab-vscode-extension/raw/main/src/assets/logo.png) _Special thanks to [@ademilter](https://twitter.com/ademilter) for his amazing work_ 👍

### Fixed

- [#14](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/14) GitLab: Open active file on GitLab - workspace path not filtered out
  - Fixed by [@swiffer](https://gitlab.com/swiffer) with [MR !1](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/1) 👍
- [#16](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/16) Does not work witch projects in subgroup
  - Fixed by [@AmandaCameron](https://gitlab.com/AmandaCameron) with [MR !3](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/merge_requests/3) 👍

## v0.4.1 - 2018-02-10

### Fixed

- [#17](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/17) Cross project closing issue goes to wrong URL.

# v0.4.0 - 2018-02-02

### Added

- Added search feature for MRs and Issues. Supports basic and advanced search.
  - For basic search, just type anything and hit Enter. Extension will search in title and description fields of MRs and issues.
  - For advanced search, you can use multiple tokens to search issues and MRs where tokens can be `title`, `author`, `assignee`, `labels`, `label`, `milestone`, `state`, `scope`. Some example usages:
    - discussions refactor
    - title: discussions refactor author: fatihacet labels: frontend, performance milestone: 10.5
    - title: group labels author: annabeldunstone assignee: timzallmann label: frontend
- Added closing issue link of current MR to status bar and clicking it will open related issue on GitLab.
- Added compare current branch with master feature.
- Added MIT License

### Changed

- Pipeline not found text on status bar will be hidden if there is no GL project.
- Significantly reduced timing of opening current MR from status bar.

## v0.3.4 - 2018-02-01

### Fixed

- [#12](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/12) Fix fetching git remote and tracking branch names.

## v0.3.3 - 2018-02-01

### Fixed

- Fixed slient failing of status bar items and hide them on error.

## v0.3.2 - 2018-01-31

### Fixed

- Fixed fetching remote url. Thanks to @kushalpandya.

## v0.3.1 - 2018-01-30

### Changed

- Clicking the pipeline status text on status bar now opens Pipeline action picker.

# v0.3.0 - 2018-01-30

### Added

- Pipeline actions picker
  - View latest pipeline on GitLab.com
  - Create a new pipeline for your current branch
  - Retry last pipeline
  - Cancel last pipeline

## v0.2.2 - 2018-01-29

### Added

- Added a new command to open current pipeline on GitLab.
- Added click handler to pipeline status text on status bar to open pipeline on GitLab.
- Added refresh interval for MR link on status bar.

### Fixed

- [#9](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/9) Branch names with slashes appear to break URL generation

## v0.2.1 - 2018-01-28

### Fixed

- Update pipeline status on status bar.

# v0.2.0 - 2018-01-27

### Added

- Added a new service layer to opearate git commands.
- Added a new service layer to talk with GitLab API.
- Added new methods to get info from Git and GitLab.
- Added Personal Access Token flow providing menu options to save and delete GitLab PAT.
- Implemented MR link on status bar and add click handler to open MR on GitLab.
- Implemented pipeline status on status bar.
- Implemented open active file on GitLab including active line number and selection.
- Implemented open current MR on GitLab.
- Implemented open GitLab to create new merge request.
- Implemented open GitLab to create new issue.

### Changed

- Deprecated `gitlab.userId`.
- Show assigned Issues and MRs now work project specific.

### Fixed

- [#7](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/7) Remove hardcoded origin in fetchGitRemote method.
- [#3](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/3) Assigned MR and issues openers should be project specific
- [#1](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/1) Local branch name and tracking remote branch name may not be the same
- [#8](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/8) API URL is hardcoded
- [#4](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/4) Remove pipes `|` from git commands
- [#5](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/5) Pipeline info won't be visible in status bar if there is no MR
- [#2](https://gitlab.com/fatihacet/gitlab-vscode-extension/-/issues/4) Remove own MR requirement to find branch MR

## v0.1.1 - 2018-01-25

### Added

- Implemented show issues assigned to me.
- Implemented show merge requests assigned to me.
