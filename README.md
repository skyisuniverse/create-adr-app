# create-adr-app

is a tool for scaffolding projects that aim to help implement vision and products from [Sky Universe's](https://github.com/skyisuniverse) research - [Architecture Decision Records](https://architecture-decision-records.vercel.app/en).

<!--Github:

- [skyisuniverse/architecture-decision-records](https://github.com/skyisuniverse/architecture-decision-records)
- [skyisuniverse/simulation-tool](https://github.com/skyisuniverse/simulation-tool)-->

## Scaffold the project structure

To scaffold the project, run:

```bash
npx create-adr-app <project-directory>
```

e.g.:

```bash
npx create-adr-app mytest-adr-simtool-app
```

The scaffolded project structure should look like:

```
<project-directory>/
├── architecture-decision-records/
└── simulation-tool/
```

The scaffolded file structures are copied from github repos:

- [skyisuniverse/architecture-decision-records](https://github.com/skyisuniverse/architecture-decision-records)
- [skyisuniverse/simulation-tool](https://github.com/skyisuniverse/simulation-tool)


## Development documentation

- [Changelog generation](./development-docs/changelog-generation.md)
- [Release strategy](./development-docs/release-strategy.md)
