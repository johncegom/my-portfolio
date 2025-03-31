# Contributing Guidelines

Thank you for your interest in contributing to my portfolio project! This document outlines the conventions we follow for git operations to maintain a clean and organized repository.

## Git Workflow

We follow a simplified Git Flow approach with the following branches:

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - Feature branches for new additions
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Emergency fixes for production

## Branch Naming Conventions

Follow these naming patterns for branches:

- `feature/descriptive-feature-name`
- `bugfix/issue-short-description`
- `hotfix/critical-issue-name`
- `refactor/component-or-section-name`

Examples:

- `feature/add-dark-mode`
- `bugfix/fix-mobile-navigation`
- `refactor/firebase-hooks`

## Commit Message Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

### Examples

```
feat(projects): add filtering by technology

Users can now filter projects by clicking on technology tags.

Resolves: #123
```

```
fix(mobile): correct navigation menu overflow on small screens
```

```
docs(readme): update installation instructions
```

## Pull Request Process

1. Ensure your code follows the project's coding standards
2. Update documentation if necessary
3. Add tests for new features
4. Make sure all tests pass
5. Use a descriptive title following the commit convention format
6. Reference any relevant issues in the description

## Development Setup

Please refer to the [Setup and Installation](README.md#setup-and-installation) section in the README for instructions on setting up the development environment.

## Code Style

- Follow the existing code style in the project
- Use meaningful variable and function names
- Write comments for complex logic
- Keep functions small and focused on a single task

Thank you for contributing!
