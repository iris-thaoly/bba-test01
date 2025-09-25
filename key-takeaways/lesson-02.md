# Version Control System
- VCS stands for Version Control System
- Is a tool that helps to manage changes to source code or documents
- Types:
    1. Local – stores versions on local machine only
    2. Centralized VCS (CVCS) – one central server, other people can work together on that (eg. Google drive)
    3. Distributed VCS (DVCS) – stores in different machine (eg. Git)

# GIT
- Is a Distributed VCS
- Is a software and install on local machine
- Is a command line tool
- Easy to use with other VCS
- To manage versions, put file into repository

Three states:
1. Working Directory:
    Store new files or changes
2. Staging Area:
    Store files want to commit
3. Repository:
    Store the commits
    ## Command lines:
- Initialize a new local Git repository in the current folder
- git init
- Configuration
- Purpose: Tell Git who you are (shows up in commit history)
1. For a local machine (first time setup):
    - git config --global user.name "Your Name"
    - git config --global user.email "your@email.com"
2. For single repo (at the current repo):
    - git config user.name "Your Name"
    - git config user.email "your@email.com"
    - Show current branch, staged/unstaged files, untracked files

    Git status
    - Stage a file for commit
    - git add <file_name>
    - Stage all changes
    - git add .
    - Show commit history
    - git log
    - Save (commit) the staged changes
    - git commit -m "message"

    ##  Commit Convention
    -Syntax:
    ```typescript
    <type>: <short_description>
    ```
    - type: type of commit
        - chore: minor changes, typo, remove unuse files
        - feat: add new feature/new testcase
        - fix: fix issue of existed testcases
    - short_description: maximumn 50 chars, description what did in the commit
    
    eg.
    ```typescript
    - “chore: remove unused file”
    - “feat: add code for exercises 2”
    - “fix: fix automation for case 1”
    ```

# Javascript
- Run the js file and show result in terminal
```typescript
node <file_name>
```
- Print message by string/value of variable
```typescript
console.log("message");
console.log(<variable_name>);
```
- Comment single line/block:
```typescript
- Add // at first of a line (ctrl + /)
- Add /* */ at begin and end of a block
```
- Declare a variable/constant:
```typescript
- <keyword> <variable_name> = <value>;
- <const> <constant_name> = <value>;
```
- Note: 
    - variable name is not allowed included keyword and space, should begin by character, underscore or $
    - use constant as defaut instead of variable, help code is easy to read and safe
    - only use let when make sure to need re-assign value
    - do not use var, only use let
- Condition:
```typescript
if (condition){
    //code to execute
}
```
- Loop:
```typescript
for (initialization; condition; increment/decrement) {
    // code to execute
}
```

## Datatype

- Prime type:
    1. Number
    2. String
    3. Boolean
    4. Undefined
    5. Null
    6. Symbol
    7. BigInt
- Reference type: Object
## Math
- Loose equality (==): Compare value after change type
- Strict equality (===): Compare value and datatype - no change type (should use)
- Loose inequality (!=)
- Strict inequality (!==)
- And (&&)
- Or ( || )
- Prefix: ++x/--x
    - Increases/decrease the value of x by 1 first,
    - Then returns the new value.
- Postfix: x++/x--
    - Returns the current value of x first,
    - Then increases/decrease the value of x by 1 after.