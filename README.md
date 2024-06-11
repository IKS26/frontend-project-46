# Generator of Difference

### Code Climate Badges:

[![Maintainability](https://api.codeclimate.com/v1/badges/28949565428f6e0206f2/maintainability)](https://codeclimate.com/github/IKS26/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/28949565428f6e0206f2/test_coverage)](https://codeclimate.com/github/IKS26/frontend-project-46/test_coverage)

### CI Status:

[![Actions Status](https://github.com/IKS26/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/IKS26/frontend-project-46/actions)
[![Node.js CI](https://github.com/IKS26/frontend-project-46/actions/workflows/nodejs-checks.yml/badge.svg)](https://github.com/IKS26/frontend-project-46/actions/workflows/nodejs-checks.yml)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Comparison of two JSON files](#comparison-of-two-json-files)
  - [Comparison of two YAML files](#comparison-of-two-yaml-files)
  - [Recursive comparison in Stylish format](#recursive-comparison-in-stylish-format)
  - [Recursive comparison in Plain format](#recursive-comparison-in-plain-format)
  - [Recursive comparison in JSON format](#recursive-comparison-in-json-format)

## Description

The Generator of Difference is a CLI application that compares two configuration files and shows the differences in a formatted text. It supports JSON, YAML, and YML file formats, and provides output in stylish, plain, or JSON formats.

## Installation

To install the application, run the following command in the terminal:

```bash
make install
```

## Usage

To run the application, use the following command in the terminal:

```bash
make gendiff format=<format> filepath1=./__fixtures__/<filename1> filepath2=./__fixtures__/<filename2>
```

Replace `<format>` with one of the supported formats (stylish, plain, json), and `<filename1>` and `<filename2>` with the paths to your files.

## Examples

### Comparison of two JSON files

[![asciicast](https://asciinema.org/a/vkMV8okwiUKogNjCx6bzmycIg.svg)](https://asciinema.org/a/vkMV8okwiUKogNjCx6bzmycIg)

### Comparison of two YAML files

[![asciicast](https://asciinema.org/a/cjeu3u7ejjyIn5i6rKtn2Mi2c.svg)](https://asciinema.org/a/cjeu3u7ejjyIn5i6rKtn2Mi2c)

### Recursive comparison in Stylish format

[![asciicast](https://asciinema.org/a/SntNGwhCCzbbibc1m6KPqUwmu.svg)](https://asciinema.org/a/SntNGwhCCzbbibc1m6KPqUwmu)

### Recursive comparison in Plain format

[![asciicast](https://asciinema.org/a/ZTxu47rnl4nnOcDnFsqNVsm3d.svg)](https://asciinema.org/a/ZTxu47rnl4nnOcDnFsqNVsm3d)

### Recursive comparison in JSON format

[![asciicast](https://asciinema.org/a/bsZY2NcsYVnWjlQQO2W1qZJHV.svg)](https://asciinema.org/a/bsZY2NcsYVnWjlQQO2W1qZJHV)
