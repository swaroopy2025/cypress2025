/*** WE Just Pass The Instructions Here ***/

A Study on XPath function text(), contains() and normalize-space()
What is this project for
A post in the Katalon Forum "XPath writing example" raised an interesting question. This post motivated me to study XPath functions text(), contains() and normalize-space() again.

How to see the demo
download this project, unzip it
open the project with Katalon Stduio
open Test Cases/TC1, and runit
check the console output
Research result
The message from the TC1 shows all I got.

tdWithMixedContent is '<td>Workflow <i class="icon-caret-right muted">::before</i> Record <i class="icon-caret-right muted">::before</i> New</td>'

# XPath text() functions returns a NodeList when applied to an HTML Element with mixed content
'count(//td/text())' returns 3.0
'//td/text()[1]' returns 'Workflow '
'//td/text()[2]' returns ' Record '
'//td/text()[3]' returns ' New'

# XPath contains(nodelist,pattern) function silently chooses only the 1st node of the nodelist given as 1st argument
'//td[contains(text(), "Workflow")]' returns true
'//td[contains(text(), "Record")]' returns false !!!
'//td[contains(text(), "New")]' returns false !!!

# you can choose a node out of the nodelist returned by text()
'//td[contains(text()[1], "Workflow")]' returns true
'//td[contains(text()[2], "Record")]' returns true
'//td[contains(text()[3], "New")]' returns true

# normalize-space() function scans the descendent nodes of the target element recursively for text contents, concatinates them to a string, normalizes white space characters
'normalize-space(//td)' returns 'Workflow ::before Record ::before New'

# it is convenient to call contains() with normalize-space() as the 1st argument
'//td[contains(normalize-space(), "Workflow")]' returns true
'//td[contains(normalize-space(), "Record")]' returns true
'//td[contains(normalize-space(), "New")]' returns true
'//td[contains(normalize-space(), "Workflow") and contains(normalize-space(), "Record") and contains(normalize-space(), "New")]' returns true
'//td[contains(normalize-space(.), "Workflow")][contains(normalize-space(.), "Record")][contains(normalize-space(.), "New")]' returns true
==================================================================================================================================================
========================================================================XPATHS(Using normalize-space())====================================================================

1. when to use normalize space in while writing XPath. can you please explain with DOM example?

Using normalize-space() in XPath is helpful when you want to remove leading, trailing, and multiple spaces between words in a string. It ensures a clean match when the text in the DOM contains irregular spacing.

SYNTAX: normalize-space(string)

It trims leading and trailing whitespace. Replaces multiple internal spaces with a single space.

When to Use normalize-space()?????

When text nodes have extra/multiple spaces.
When text might contain newline or tab characters.
When matching text without exact formatting.

DOM:
<div>
  <span id="ex1">   Hello     World   </span>
  <span id="ex2">Hello World</span>
</div>

XPATH:

//span[normalize-space(text())='Hello World']  ← matches both spans


Another Example: Whitespace + Tabs + Newlines
DOM:

<p id="example">   Welcome
    to      QA   Automation   </p>
XPath with normalization:

//p[normalize-space(.)='Welcome to QA Automation']

normalize-space(.) cleans all text inside the element, including child text nodes.

Difference: text() vs .
text() → Gets a single text node (useful for short inline elements).

. → Gets all text content of the node (useful when the element has mixed content).

Real-World Use Case in Test Automation:
Let’s say you want to click a button with label:

<button>   Submit   Form </button>

Reliable XPath:
//button[normalize-space(text())='Submit Form']
===============================================================By Attribute=============================================
1. By Attribute
xpath
//tagname[@attribute='value']
Example:

xpath

//input[@name='email']
//button[@type='submit']
=========================================================Using contains()==============================================
2. Using contains()

Used when the value is partial or dynamic.

xpath

//tag[contains(@attribute, 'value')]

Example:

xpath

//input[contains(@id, 'user')]
//a[contains(text(), 'Login')]
==========================================================Using starts-with()==================================================
3. Using starts-with()
Used to match the starting characters of an attribute or text.

xpath
//tag[starts-with(@attribute, 'value')]

Example:

xpath
//div[starts-with(@class, 'alert')]

===========================================================Using text()===========================================================
4. Using text()
Used when you want to match the exact visible text.

xpath
//tag[text()='ExactText']

Example:

xpath
//a[text()='Logout']
=================================================================Using normalize-space()=============================================
5. Using normalize-space()
Ignores leading/trailing spaces and multiple spaces between words.

xpath

//tag[normalize-space(text())='Exact Text']

Example:

xpath

//span[normalize-space()='Welcome Admin']
===================================================================



