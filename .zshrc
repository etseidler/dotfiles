# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
#ZSH_THEME="robbyrussell"
ZSH_THEME="powerlevel10k/powerlevel10k"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"
export SAVEHIST=1000000

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

## [everything above is oh-my-zsh]


## nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

## pure zsh prompt
#fpath+=("$(brew --prefix)/share/zsh/site-functions") # default zsh is /bin/zsh
#autoload -U promptinit; promptinit
#prompt pure
#zstyle :prompt:pure:path color magenta # change the path color

autoload -U zmv # for bulk move

## pyenv
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

## poetry
export PATH=$PATH:~/.local/bin

# openJDK 20 via homebrew
#export JAVA_HOME=`/usr/libexec/java_home -v 20`

## use vi bindings for shell command editing, may not be worth it
#set -o vi

## janky-fix gitk
# https://stackoverflow.com/a/66067227/1113872
#alias gitk="sed -i .bak 's/zoomed/normal/g' ~/.config/git/gitk && /opt/homebrew/bin/gitk"

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# fix docker default platform on Mac Silicon? not sure how/when this works
export DOCKER_DEFAULT_PLATFORM=linux/amd64

# 1password shell completion
#eval "$(op completion zsh)"; compdef _op op

## aliases, including tools: bat, direnv, ghq, gitui, docker
alias awswhoami="aws sts get-caller-identity"
alias cat=bat
alias da="direnv allow"
alias dall=da
alias dcls="docker container ls"
alias dlogs="docker logs"
alias dockermdk='docker stop $(docker ps -q) ; docker rm $(docker ps -aq) ; docker system prune -a --volumes -f; docker volume rm $(docker volume ls -q)'
alias gi=gitui
alias gg="ghq get"

# kubectl stuff, including tools: kubie, k9s, kubectl-view-allocations
alias cx="kubie ctx"
alias icx="kubie info ctx"
alias k=kubectl
alias k9=k9s
alias kd="kubectl describe pod"
alias kl="kubectl logs"
alias kp="kubectl get pods"
alias kv=kver
alias kva=kubectl-view-allocations
alias kver="kubectl version"
alias kx=cx
alias ikx=icx
alias ns="kubie ns"
alias ins="kubie info ns"

# flux
alias fgsa="flux get sources all"
alias fgsg="flux get sources git"
alias fgsh="flux get sources helm"
alias fgsc="flux get sources chart"
alias fgkz="flux get kustomizations"
alias fghr="flux get helmreleases"
alias fdkz="flux describe kustomization "
alias fdhr="flux describe helmrelease "
alias frsg="flux reconcile source git"
alias frkz="flux reconcile kustomization"
alias frhr="flux reconcile helmrelease"
command -v flux >/dev/null && . <(flux completion zsh) # flux completion

# Python
alias pu="pip install --upgrade pip"
alias venva="source ./venv/bin/activate"

#Pre-Commit Alias
alias pcra="pre-commit run --all-files"
alias pcin="pre-commit install"

# repo signing
# alias setupsigned="git config user.name 'Eric Seidler' && git config user.email '<aidn email>' && git config commit.gpgsign true"
# alias setupsignedwwt="git config user.name 'Eric Seidler' && git config user.email '<wwt email>' && git config commit.gpgsign true && git config user.signingkey ~/.ssh/id_ed25519.pub && git config gpg.ssh.allowedSignersFile ~/.ssh/allowed_signers && git config gpg.format ssh"

# TF stuff
alias tf=terraform
alias tfap="terraform apply plan.tfplan"
alias tfaro="terraform apply -refresh-only"
alias tfd="terraform destroy"
alias tff="terraform fmt -recursive"
alias tfin="terraform init"
alias tfinr="terraform init -reconfigure"
alias tfim="terraform import"
alias tfp="terraform plan"
alias tfpo="terraform plan -out=plan.tfplan"
alias tfpov="terraform plan -out=plan.tfplan -var-file=variables.tfvars"
alias tfup="terraform init --upgrade"
# needed to set custom TF_PLUGIN_CACHE_DIR to replace default of /tmp which requires admin to run init
# this may have been needed for a udacity project
# export TF_CLI_CONFIG_FILE=$HOME/.terraformrc

# auto-expand aliases? NOTE: i didn't really like using this
# this can have small unexpected effects. only use when pairing and aliases are an issue.
function expand-alias() {
  zle _expand_alias
  zle self-insert
}
# uncomment below to get this to work again
#zle -N expand-alias
#bindkey ' ' expand-alias

# reading direnv
eval "$(direnv hook zsh)"

# mise
# location of mise to beginning of path
export PATH=~/.local/bin:$PATH
# activate
eval "$(mise activate)"
