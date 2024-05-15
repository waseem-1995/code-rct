# JS-Online-Inventory

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Add product data is working properly - 2 mark
 ✅ Adding product data is working properly and storing in local storage - 2 mark
 ✅ All data in Local-Storage is showing properly on DOM - 1 marks
 ✅ Clicking remove button should remove product from Local-Storage - 1 marks
 ✅ Clicking remove button should remove product from DOM - 1 mark
 ✅ Clicking Filter Price > 1000 is working properly on DOM - 2 mark
 ✅ Clicking Filter Price < 1000 is working properly on DOM - 2 mark
```

## Folder structure

- index.html
- inventory.html
- src
  - `scripts`
    - index.js
    - inventory.js
- cypress (overlook the files inside this folder)
- README.md
- package.json

### You haven't taught cypress to run the testcases locally , you can see the passed/ failed test cases and test errors on CP itself.

## Description

Create an online inventory system where a user can add products on one page, maintain the data in local storage and and see list of products on a different page. The user should also be able to delete any product, and filter on the basis of price from the list

- index.html

  - A navbar needs to be present at the top to navigate among index page and inventory page
  - index link should have href as index.html and id = home
  - inventory link should have href inventory.html and id = inventory
  - Create a form and it should have an id `product_data`
  - it should have the following input fields and corresponding ids
    - name - `product_name` , type should text
    - brand - `product_brand` , type should be text
    - price - `product_price` type should be a number
    - image - `product_image` type should be text
  - input for button should have type as `submit` (make sure you are using event.preventDefault() to prevent the default behaviour of the form)
  - Also, the input tags values should become null as soon as form is submitted. (reset the form)
  - Take the form data and store the data in local storage as array of items with key `data`
  - follow the below schema to store the data in local storage
  - Store price as Number not string.
    ```
    {
     name
     brand
     price
     image
    }
    ```

  ### This is how the Home page looks like

  <img width="1717" alt="Screenshot 2022-11-18 at 11 17 52 PM" src="https://user-images.githubusercontent.com/74458714/202769525-eecc6554-161a-48f5-a77e-f9f7f0dabfe9.png">

- inventory.html

  - This page should show all the products present from the local storage.
  - The products should be appended to the div with id = `container`
  - Each product itself should have a container div with class = `card`
  - Each product div should have the following information
  - image
  - brand
  - name
  - price
  - Give price value tag `classname = price`
  - The price value will be the number only do not add any extra text.
  - a button with `classname = remove` and Remove as button text
  - The user should be able to remove products. (use index of the product added to identify which product needs to be deleted)
  - There are two buttons given
  - `Filter Price > 1000` with id `filterGreater`
  - `Filter Price < 1000` with id `filterLess`

  - The user should be able to filter the data displayed on DOM by clicking on `Filter Price > 1000` , and `Filter Price < 1000` buttons respectively

  ### This is how the inventory page looks like

  <img width="1718" alt="Screenshot 2022-11-20 at 8 01 19 PM" src="https://user-images.githubusercontent.com/74458714/202908068-120f78a3-6c5a-4c5e-b1d9-2f102da3a78b.png">


  **Note:- Do not use any other classes or Ids other than mentioned.**

####

## Boilerplate

- Do not change the given folder structure
- index.html
- inventory.html
- You can find JS code under src/scripts folder in a filename inventory.js & index.js
- you can find the testcases under cypress/e2e folder

**Note:- Do not use any other names for the methods other than mentioned.**

####

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
