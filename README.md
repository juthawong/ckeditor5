CKEditor 5 – development repository
===================================

[![Build Status](https://travis-ci.org/ckeditor/ckeditor5.svg?branch=master)](https://travis-ci.org/ckeditor/ckeditor5)
[![Dependency Status](https://david-dm.org/ckeditor/ckeditor5.svg)](https://david-dm.org/ckeditor/ckeditor5)
[![devDependency Status](https://david-dm.org/ckeditor/ckeditor5/dev-status.svg)](https://david-dm.org/ckeditor/ckeditor5?type=dev)

## Project Status (December 2016)

Version 0.5.0 was released on November 29, 2016. This is the 5th developer preview of the new CKEditor 5.

**It is not production ready** and will be followed by several releases before it reaches its first stable 1.0.0 version.

Read more in the [CKEditor 5 v0.5.0 release blog post](http://ckeditor.com/blog/5th-developer-preview-of-CKEditor-5-available).

Check the basic CKEditor 5 sample on the [GitHub.io page](https://ckeditor5.github.io/).

[Periodic news and updates](https://github.com/ckeditor/ckeditor5-design/labels/announcement) about the project can be found in the [CKEditor 5 design repository](https://github.com/ckeditor/ckeditor5-design).

## Project Organization

### Design and discussions

[https://github.com/ckeditor/ckeditor5](https://github.com/ckeditor/ckeditor5) is the CKEditor 5 main development repository. This is the best place for bringing opinions and contributions. Letting the core team know if they are going in the right or wrong direction is great feedback and will be much appreciated!

(Note: At the early stage, most of the high-level discussions were lead in [ckeditor5-design](https://github.com/ckeditor/ckeditor5-design/issues) repository.)

### Development

CKEditor 5 is a modular, multi-package, multi-repository project. It consists of a several packages which create the editing framework, based on which the feature packages are implemented.

The [ckeditor5](https://github.com/ckeditor/ckeditor5) repository is the place that centralizes the development of CKEditor 5. It bundles different packages into a single place, adding the necessary helper tools for the development workflow, like the builder and the test runner. [Basic information on how to set up the development environment](https://github.com/ckeditor/ckeditor5/wiki/Development-Environment) can be found in the wiki pages.

### Reporting issues and feature requests

Each repository independently handles its issues. However, it's recommended to report issues in [this repository](https://github.com/ckeditor/ckeditor5/issues) unless you know to which specific repository the issue belongs.

## Packages

### Editing framework

<table>
<thead>
	<tr>
		<th>Package</th>
		<!-- <th>Version</th> -->
		<th>Build</th>
		<th>Dependencies</th>
	</tr>
</thead>
<tbody>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-engine"><code>ckeditor5-engine</code></a>
		<br>
		The editing engine.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-engine"><img src="https://img.shields.io/npm/v/ckeditor5-engine.svg" alt="ckeditor5-engine npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-engine"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-engine/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-engine/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-engine.svg" alt="ckeditor5-engine coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-engine"><img src="https://david-dm.org/ckeditor/ckeditor5-engine/status.svg" alt="ckeditor5-engine dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-engine?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-engine/dev-status.svg" alt="ckeditor5-engine devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-core"><code>ckeditor5-core</code></a>
		<br>
		The core editor architecture.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-core"><img src="https://img.shields.io/npm/v/ckeditor5-core.svg" alt="ckeditor5-core npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-core"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-core/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-core/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-core.svg" alt="ckeditor5-core coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-core"><img src="https://david-dm.org/ckeditor/ckeditor5-core/status.svg" alt="ckeditor5-core dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-core?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-core/dev-status.svg" alt="ckeditor5-core devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-ui"><code>ckeditor5-ui</code></a>
		<br>
		The editor UI library.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-ui"><img src="https://img.shields.io/npm/v/ckeditor5-ui.svg" alt="ckeditor5-ui npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-ui"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-ui/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-ui/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-ui.svg" alt="ckeditor5-ui coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-ui"><img src="https://david-dm.org/ckeditor/ckeditor5-ui/status.svg" alt="ckeditor5-ui dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-ui?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-ui/dev-status.svg" alt="ckeditor5-ui devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-utils"><code>ckeditor5-utils</code></a>
		<br>
		The editor utils library.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-utils"><img src="https://img.shields.io/npm/v/ckeditor5-utils.svg" alt="ckeditor5-utils npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-utils"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-utils/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-utils/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-utils.svg" alt="ckeditor5-utils coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-utils"><img src="https://david-dm.org/ckeditor/ckeditor5-utils/status.svg" alt="ckeditor5-utils dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-utils?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-utils/dev-status.svg" alt="ckeditor5-utils devDependencies status badge"></a>
	</td>
</tr>

</tbody>
</table>

### Editors

<table>
<thead>
	<tr>
		<th>Package</th>
		<!-- <th>Version</th> -->
		<th>Build</th>
		<th>Dependencies</th>
	</tr>
</thead>
<tbody>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-editor-classic"><code>ckeditor5-editor-classic</code></a>
		<br>
		The classic editor implementation.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic"><img src="https://img.shields.io/npm/v/ckeditor5-editor-classic.svg" alt="ckeditor5-editor-classic npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-editor-classic"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-editor-classic/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-editor-classic/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-editor-classic.svg" alt="ckeditor5-editor-classic coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-editor-classic"><img src="https://david-dm.org/ckeditor/ckeditor5-editor-classic/status.svg" alt="ckeditor5-editor-classic dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-editor-classic?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-editor-classic/dev-status.svg" alt="ckeditor5-editor-classic devDependencies status badge"></a>
	</td>
</tr>

</tbody>
</table>

### Features

<table>
<thead>
	<tr>
		<th>Package</th>
		<!-- <th>Version</th> -->
		<th>Build</th>
		<th>Dependencies</th>
	</tr>
</thead>
<tbody>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-autoformat"><code>ckeditor5-autoformat</code></a>
		<br>
		Introduces the autoformatting feature. Replaces predefined characters with corresponding format (e.g. <code>**foo**</code> becomes bolded <code>&lt;strong&gt;foo&lt;/strong&gt;</code>).
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat"><img src="https://img.shields.io/npm/v/ckeditor5-autoformat.svg" alt="ckeditor5-autoformat npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-autoformat"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-autoformat/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-autoformat/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-autoformat.svg" alt="ckeditor5-autoformat coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-autoformat"><img src="https://david-dm.org/ckeditor/ckeditor5-autoformat/status.svg" alt="ckeditor5-autoformat dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-autoformat?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-autoformat/dev-status.svg" alt="ckeditor5-autoformat devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-basic-styles"><code>ckeditor5-basic-styles</code></a>
		<br>
		Introduces the bold and italic features.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles"><img src="https://img.shields.io/npm/v/ckeditor5-basic-styles.svg" alt="ckeditor5-basic-styles npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-basic-styles"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-basic-styles/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-basic-styles/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-basic-styles.svg" alt="ckeditor5-basic-styles coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-basic-styles"><img src="https://david-dm.org/ckeditor/ckeditor5-basic-styles/status.svg" alt="ckeditor5-basic-styles dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-basic-styles?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-basic-styles/dev-status.svg" alt="ckeditor5-basic-styles devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-clipboard"><code>ckeditor5-clipboard</code></a>
		<br>
		Introduces the clipboard integration.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard"><img src="https://img.shields.io/npm/v/ckeditor5-clipboard.svg" alt="ckeditor5-clipboard npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-clipboard"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-clipboard/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-clipboard/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-clipboard.svg" alt="ckeditor5-clipboard coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-clipboard"><img src="https://david-dm.org/ckeditor/ckeditor5-clipboard/status.svg" alt="ckeditor5-clipboard dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-clipboard?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-clipboard/dev-status.svg" alt="ckeditor5-clipboard devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-enter"><code>ckeditor5-enter</code></a>
		<br>
		Introduces the enter key feature.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-enter"><img src="https://img.shields.io/npm/v/ckeditor5-enter.svg" alt="ckeditor5-enter npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-enter"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-enter/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-enter/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-enter.svg" alt="ckeditor5-enter coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-enter"><img src="https://david-dm.org/ckeditor/ckeditor5-enter/status.svg" alt="ckeditor5-enter dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-enter?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-enter/dev-status.svg" alt="ckeditor5-enter devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-heading"><code>ckeditor5-heading</code></a>
		<br>
		Introduces the heading feature.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-heading"><img src="https://img.shields.io/npm/v/ckeditor5-heading.svg" alt="ckeditor5-heading npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-heading"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-heading/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-heading/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-heading.svg" alt="ckeditor5-heading coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-heading"><img src="https://david-dm.org/ckeditor/ckeditor5-heading/status.svg" alt="ckeditor5-heading dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-heading?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-heading/dev-status.svg" alt="ckeditor5-heading devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-image"><code>ckeditor5-image</code></a>
		<br>
		Introduces the image feature. Supports image styles and captioning.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-image"><img src="https://img.shields.io/npm/v/ckeditor5-image.svg" alt="ckeditor5-image npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-image"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-image/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-image/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-image.svg" alt="ckeditor5-image coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-image"><img src="https://david-dm.org/ckeditor/ckeditor5-image/status.svg" alt="ckeditor5-image dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-image?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-image/dev-status.svg" alt="ckeditor5-image devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-link"><code>ckeditor5-link</code></a>
		<br>
		Introduces the link feature.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-link"><img src="https://img.shields.io/npm/v/ckeditor5-link.svg" alt="ckeditor5-link npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-link"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-link/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-link/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-link.svg" alt="ckeditor5-link coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-link"><img src="https://david-dm.org/ckeditor/ckeditor5-link/status.svg" alt="ckeditor5-link dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-link?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-link/dev-status.svg" alt="ckeditor5-link devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-list"><code>ckeditor5-list</code></a>
		<br>
		Introduces numbered and bulleted lists feature.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-list"><img src="https://img.shields.io/npm/v/ckeditor5-list.svg" alt="ckeditor5-list npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-list"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-list/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-list/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-list.svg" alt="ckeditor5-list coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-list"><img src="https://david-dm.org/ckeditor/ckeditor5-list/status.svg" alt="ckeditor5-list dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-list?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-list/dev-status.svg" alt="ckeditor5-list devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-markdown-gfm"><code>ckeditor5-markdown-gfm</code></a>
		<br>
		Introduces GitHub flavored Markdown data processor.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm"><img src="https://img.shields.io/npm/v/ckeditor5-markdown-gfm.svg" alt="ckeditor5-markdown-gfm npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-markdown-gfm"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-markdown-gfm/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-markdown-gfm/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-markdown-gfm.svg" alt="ckeditor5-markdown-gfm coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-markdown-gfm"><img src="https://david-dm.org/ckeditor/ckeditor5-markdown-gfm/status.svg" alt="ckeditor5-markdown-gfm dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-markdown-gfm?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-markdown-gfm/dev-status.svg" alt="ckeditor5-markdown-gfm devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-paragraph"><code>ckeditor5-paragraph</code></a>
		<br>
		Introduces the paragraph feature.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph"><img src="https://img.shields.io/npm/v/ckeditor5-paragraph.svg" alt="ckeditor5-paragraph npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-paragraph"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-paragraph/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-paragraph/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-paragraph.svg" alt="ckeditor5-paragraph coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-paragraph"><img src="https://david-dm.org/ckeditor/ckeditor5-paragraph/status.svg" alt="ckeditor5-paragraph dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-paragraph?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-paragraph/dev-status.svg" alt="ckeditor5-paragraph devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-typing"><code>ckeditor5-typing</code></a>
		<br>
		Introduces typing and deleting features.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-typing"><img src="https://img.shields.io/npm/v/ckeditor5-typing.svg" alt="ckeditor5-typing npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-typing"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-typing/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-typing/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-typing.svg" alt="ckeditor5-typing coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-typing"><img src="https://david-dm.org/ckeditor/ckeditor5-typing/status.svg" alt="ckeditor5-typing dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-typing?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-typing/dev-status.svg" alt="ckeditor5-typing devDependencies status badge"></a>
	</td>
</tr>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-undo"><code>ckeditor5-undo</code></a>
		<br>
		Introduces the undo feature.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-undo"><img src="https://img.shields.io/npm/v/ckeditor5-undo.svg" alt="ckeditor5-undo npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-undo"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-undo/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-undo/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-undo.svg" alt="ckeditor5-undo coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-undo"><img src="https://david-dm.org/ckeditor/ckeditor5-undo/status.svg" alt="ckeditor5-undo dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-undo?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-undo/dev-status.svg" alt="ckeditor5-undo devDependencies status badge"></a>
	</td>
</tr>

</tbody>
</table>

### Themes

<table>
<thead>
	<tr>
		<th>Package</th>
		<!-- <th>Version</th> -->
		<th>Build</th>
		<th>Dependencies</th>
	</tr>
</thead>
<tbody>

<tr>
	<td>
		<a href="https://github.com/ckeditor/ckeditor5-theme-lark"><code>ckeditor5-theme-lark</code></a>
		<br>
		The lark theme.
	</td>
	<!-- <td>
		<a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark"><img src="https://img.shields.io/npm/v/ckeditor5-theme-lark.svg" alt="ckeditor5-theme-lark npm package badge"></a>
	</td> -->
	<td>
		<a href="https://travis-ci.org/ckeditor/ckeditor5-theme-lark"><img src="https://img.shields.io/travis/ckeditor/ckeditor5-theme-lark/master.svg" alt="build status badge"></a>
		<a href="https://codeclimate.com/github/ckeditor/ckeditor5-theme-lark/coverage"><img src="https://img.shields.io/codeclimate/coverage/github/ckeditor/ckeditor5-theme-lark.svg" alt="ckeditor5-theme-lark coverage badge"></a>
	</td>
	<td>
		<a href="https://david-dm.org/ckeditor/ckeditor5-theme-lark"><img src="https://david-dm.org/ckeditor/ckeditor5-theme-lark/status.svg" alt="ckeditor5-theme-lark dependencies status badge"></a>
		<a href="https://david-dm.org/ckeditor/ckeditor5-theme-lark?type=dev"><img src="https://david-dm.org/ckeditor/ckeditor5-theme-lark/dev-status.svg" alt="ckeditor5-theme-lark devDependencies status badge"></a>
	</td>
</tr>

</tbody>
</table>

## License

Licensed under the GPL, LGPL and MPL licenses, at your choice. For full details about the license, please check the LICENSE.md file.
