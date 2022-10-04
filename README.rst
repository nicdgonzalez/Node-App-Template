NodeJS Project Template
========================

.. contents:: Table of Contents

Introduction
-------------

This project is currently in **development**. I am still learning
NodeJS (and JavaScript in general) so I am still trying to figure out
what I consider to be the best practices for NodeJS projects that are
scalable, yet intuitive to read and browse through clean code.

This is a template for NodeJS projects. It includes:

+-------------------+----------------+
| Project Structure | NodeJS         |
+-------------------+----------------+
| Web Framework     | ExpressJS      |
+-------------------+----------------+
| Template Engine   | EJS            |
+-------------------+----------------+
| CSS preprocessor  | Sass           |
+-------------------+----------------+
| Language          | TypeScript     |
+-------------------+----------------+


Technologies Used
------------------

- Windows 10 (x64)
- Visual Studio Code


Version Naming
---------------

This library uses *semtantic versioning*::

  MAJOR.MINOR.PATCH

Where an increment in:

- ``MAJOR`` = Incompatible changes (may require code to be updated).
- ``MINOR`` = Backwards compatible feature changes.
- ``PATCH`` = Backwards compatible bug fixes.


Getting Started
----------------

..
  #. Install `NodeJS <https://nodejs.org/en/download>`_.
  #. Install `TypeScript <https://www.typescriptlang.org/#download-links>`_.
  #. Install `Sass <https://sass-lang.com/install>`_.

- Install dependencies.

.. code:: console

  $ npm install

- Build the TypeScript files.

.. code:: console

  $ tsc

- Run the emitted JavaScript file.

.. code:: console

  $ node .


Bug/Feature Request
--------------------

If you find a bug (program failed to run and/or gave undesired results)
or you just want to request a feature, kindly open a new issue
`here <>`_.


Contributing
-------------

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- `Fork <>`_ the repository and create a new branch.

.. code:: console

  $ git clone "https://github.com/:username/:respository.git"
  $ cd :respository
  $ git checkout -b "improve-feature"

- Make the appropriate changes and stage the modified files.

.. code:: console

  $ git add <changed file(s)>

- Commit the changes.

.. code:: console

  $ git commit -m "Improve feature."

- Push to the new branch.

.. code:: console

  $ git push "origin" "improve-feature"

- Create a `Pull Request <>`_.
