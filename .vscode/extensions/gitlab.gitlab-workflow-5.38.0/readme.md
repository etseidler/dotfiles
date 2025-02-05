# GitLab Workflow

The GitLab Workflow extension integrates GitLab into Visual Studio Code.

If you face an issue, check out our [troubleshooting page](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/troubleshooting.html) and if it's not listed, please [report it](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/blob/main/CONTRIBUTING.md#reporting-issues).

## Minimum supported version

- GitLab versions 16.1 and later. While many extension features might work with earlier versions, they are unsupported.
- [GitLab Duo Code Suggestions](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/) requires both:
  1. GitLab version 16.8 or later.
  1. VS Code 1.82.0 or later.
- [Security Findings](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/#view-security-findings) requires GitLab Workflow version 3.74.0 or later, and GitLab Ultimate.

To find your GitLab version, visit `/help` (like `https://gitlab.com/help`).

## Features

After you [set up the extension](#setup), this extension adds GitLab features to your preferred IDE:

### Manage projects and code

- [Clone a Git project](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/remote_urls.html#clone-a-git-project).
- [Browse a GitLab repository without cloning it](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/remote_urls.html#browse-a-repository-in-read-only-mode).

### Manage issues and merge requests

- [View GitLab issues and merge requests](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/#view-issues-and-merge-requests).
  View issues, comments, merge requests, and changed files in the VS Code sidebar.
- Build [custom, saved searches](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/custom_queries.html)
  to meet your needs.
- [Create and review merge requests](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/#review-a-merge-request).

### Manage CI/CD pipelines

- [Manage your pipelines](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/cicd.html).
  View your pipeline status and open the related merge request. Use advanced pipeline actions to create, retry, or cancel a pipeline.
- [View CI/CD job output](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/cicd.html#view-cicd-job-output).
  View the output of a running or finished job in an editor tab.
- [Test your GitLab CI/CD configuration](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/cicd.html#test-gitlab-cicd-configuration) locally.
- [Auto-complete GitLab CI/CD variables](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/cicd.html#cicd-variable-autocompletion)
  in your `.gitlab-ci.yml` pipeline file.

### AI-assisted features

- [GitLab Duo Chat](https://docs.gitlab.com/ee/user/gitlab_duo_chat/#use-gitlab-duo-chat-in-vs-code):
  Interact with an AI assistant directly in VS Code.
- [GitLab Duo Code Suggestions](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/):
  Suggest completions to your current line of code, or write natural-language code comments to get
  more substantive suggestions.

### Other features

- [View security findings in your current branch](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/#view-security-findings)
- [Manage snippets](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/#create-a-snippet). Create and insert snippets, and create [snippet patches](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/#create-a-patch-file).

## Setup

This extension requires you to create a GitLab personal access token, and assign it to the extension:

1. [Install the extension](https://marketplace.visualstudio.com/items?itemName=GitLab.gitlab-workflow) from the Visual Studio Marketplace and enable it. If you use an unofficial version of VS Code, install the extension from the [Open VSX Registry](https://open-vsx.org/extension/GitLab/gitlab-workflow).
1. To sign in to your GitLab instance, run the command **GitLab: Authenticate**.
   1. Open Visual Studio Code, then open the command palette by pressing <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>.
   1. In the command palette, search for **GitLab: Authenticate** and press <kbd>Enter<kbd>.
   1. Select your GitLab instance URL from the offered options, or enter one manually.
      - When manually adding an instance to **URL to GitLab instance**, paste the full URL to your
        GitLab instance, including the `http://` or `https://`. Press <kbd>Enter</kbd> to confirm.
   1. For GitLab.com, you can use the OAuth authentication method.
   1. If you don't use OAuth, use a Personal Access Token to log in.
      - If you have an existing personal access token with `api` scope, select **Enter an existing token** to enter it.
      - If you don't, select **Create a token first**, and the extension opens the PAT settings page for you.
        If this method fails, follow the instructions [in the GitLab documentation](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token).
   1. Copy the token. _For security reasons, this value is never displayed again, so you must copy this value now._
   1. Paste in your GitLab personal access token and press <kbd>Enter</kbd>. The token is not displayed, nor is it accessible to others.

The extension automatically matches your Git repository remote URL with the GitLab instance URL you specified for your token. If you have multiple accounts or projects, you can choose the one you want to use. For more information, see [Switch GitLab accounts in VS Code](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/#switch-gitlab-accounts-in-vs-code).

The extension is ready to use. If your project has a pipeline for the last commit, and a merge request from your current branch, information about both is displayed in the Visual Studio Code status bar.

### Commands and extension settings

For a full list of GitLab commands you can run from the VS Code Command Palette, see:

- [Command Palette commands](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/settings.html#command-palette-commands).
- [Extension settings you can configure](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/settings.html#extension-settings).

### Browse a repository without cloning

See [Browse a repository in read-only mode](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/remote_urls.html#browse-a-repository-in-read-only-mode) in the GitLab documentation.

## Roadmap

To learn more about this project's team, processes, and plans, see
the [Create:Editor Extensions Group](https://handbook.gitlab.com/handbook/engineering/development/dev/create/editor-extensions/)
page in the GitLab handbook.

For a list of all open issues in this project, see the
[issues page](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/)
for this project.

---

## Contribution

This extension is open source and [hosted on GitLab](https://gitlab.com/gitlab-org/gitlab-vscode-extension). Contributions are more than welcome. Feel free to fork and add new features or submit bug reports. See [CONTRIBUTING](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/blob/HEAD/CONTRIBUTING.md) for more information.

[A list of the great people](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/blob/main/CONTRIBUTORS.md) who contributed this project, and made it even more awesome, is available. Thank you all! 🎉
