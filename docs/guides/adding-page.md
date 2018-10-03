# Adding a New Page

If the specific page you need doesn't exist, follow the steps below to add a new page. Much of the page configuration is unique to the template you choose, so be sure to follow the steps for your specific template closely.

## Selecting the Location in the Content Tree

Each page should carefully live in a specific layer within the content tree. For example, all primary landing pages are meant to be in the first level, followed by secondary landing pages under those, etc. Once you have found the existing page that your new one should "live under" (eg. the "State and Federal Issues" page lives under the "Advocacy" page), right click on it and select `New > Page (menu item)`

::: warning TODO
Add screenshot of right clicking and adding new page from an existing page
:::

::: warning
Unless you're adding a new primary landing page, you should always be right clicking and adding a new page from an existing page. It's important that it's not a folder (eg. a "Feature" folder that should only contain OHA Feature items), so that it maintains the page hierarchy.
:::

## Choosing a Page Name

Once you've added a new page, you should now be presented with a form to specify a page name and select a template.
::: warning TODO
Add screenshot of new page form
:::
Type in the name of the page using standard grammatical rules for titles. The default URL for the page will be automatically generated based on the name you type, but that can be changed later. **Do not press save until you read the section below on selecting a template!**

## Selecting a Template

The next step is to choose the template that you'd like to use for the page. Each template has a well-defined use case, so take a look at the [Template Doumentation](/templates/) for more information on the available templates. All of them can be found in the "OHA" folder on the left side of the popup. Click on the template you'd like, and make sure the "Use existing template" option is selected at the top of the popup. Click save and move on to the next step. **Make sure the "Use page template settings" option is selected in the "Page nesting" section at the bottom of the page.**
::: warning TODO
Add screenshot of selecting OHA template with option chosen
:::

## Updating the URL <Badge text="Under Construction" type="warn"/>

Currently all of the page URL's are camel cased by default (eg. Patient-Safety-Quality). We'd like to begin moving to lowercase URL's for a couple reasons:
- The user is more likely to type it in correctly.
- Google doesn't handle SEO for camel cased URL's as well

## Configure the Page Metadata

The next step in the configuration process is setting the page metadata. This is especially important for accessiblity and SEO purposes. Take a look at [this page](/guides/page-metadata.md) for detailed steps on setting the page metadata. Once you've completed those steps, return to this page and complete the remaining items below.

## Add the Page to the Mega Menu

If you'd like for the page to show up in the mega menu, navigate over to the "Form" tab for the page. Scroll down to the very bottom of the page to the field called "Menu group". Select the "Top menu" option. Once your page has been saved and checked-in, it will appear in the mega menu in the correct level of the site hierarchy.
::: warning TODO
Add screenshot of form tab selected and top menu option chosen
:::

## Final Configuration

At this point all of the general settings for the page have been configured. From here, you'll follow the specific steps for the page template you have chosen. For example, you might have to add a "Feature" folder and add an "OHA Feature" to it, or edit the heading above the cards section. Head over to the [Template Doumentation](/templates/) to configure the page for your chosen template.
