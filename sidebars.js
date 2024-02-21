/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "介绍",
    {
      type: 'category',
      label: 'Git',
      items: [
        'Git/如何忽略.idea文件'
      ],
    },
    {
      type: 'category',
      label: 'Vue',
      items: [
        'Vue/模板语法',
        'Vue/数据绑定',
      ],
    },
    {
      type: 'category',
      label: 'Spring',
      items: [
        'Spring/什么是IOC'
      ],
    },
    {
      type: 'category',
      label: 'MySQL',
      items: [
        'MySQL/数据库驱动是如何加载的'
      ],
    },
  ]
};

module.exports = sidebars;
