# KTH Style - React Components

![Travis status](https://api.travis-ci.org/KTH/kth-style-react-components.svg?branch=master)

## Description

This project is a work in progress.

**As of 2021-02-12 we shall reboot this project. The new version (2.0) will do a new take on the components and also support Formik.**

The purpose is to create an easy to use library in React with common components implemented with KTH style.

## Get started

Install @kth/kth-style-react-components

```
npm i @kth/kth-style-react-components
```

Import the component in the file where you want to use it, in this example, we want to import Header

```
import { Header } from '@kth/kth-style-react-components'
```

Use it just like any React component

Example:

```
import React from 'react'
import { Header } from '@kth/kth-style-react-components'

export const App = () => {
  return <div>
    <Header />
    ...
  </div>
}
```
