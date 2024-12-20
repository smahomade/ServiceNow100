# TOPIC 2: Create a ScratchPad for Manager Info, using ClientScript and Business Rule

## 1. Create a Client Script for the Scratch Pads

1. Go to **`All` > `System Definition` > `Client Scripts` > Press Enter**.
2. Click **`New`**.
3. Fill in Client Script details
   - **Name:** `Name of your Choice`
   - **Table:** `Group [sys_user_group]`
   - **Type:** `onLoads`
   - **Global:** `Checked`
   - **Active:** `Checked`
   - **Script - onLoad**
    ```javascript
    function onLoad() {

        var title = g_scratchpad.title || "Not Available";
        var email = g_scratchpad.email || "Not Available";
        var city = g_scratchpad.city || "Not Available";
        var phone = g_scratchpad.phone || "Not Available";

        g_form.showFieldMsg('manager','Title: ' + title, 'info');
        g_form.showFieldMsg('manager','Email: ' + email, 'info');
        g_form.showFieldMsg('manager','City: ' + city, 'info');
        g_form.showFieldMsg('manager','Phone: ' + phone, 'info');
        }
    ```
4.  Click `Submit`

---

## 2. Grab Infomation from the Scratch Pad by Creating a Business Rule

1. Go to **`All` > `System Definition` > `Business Rules` > Press Enter**.
2. Click **`New`**.
3. Fill in Business Rules details
   - **Name:** `Name of your Choice`
   - **Table:** `Group [sys_user_group]`
   - **Active:** `Checked`
   - **Advanced:** `Checked`
   - **When to run - When** `Display`
   - **When to run - Order** `100`
   - **Advanced (Script)** 
     ```javascript
        (function executeRule(current, previous /*null when async*/) {

            var manager = current.manager;

            if(manager) {
                g_scratchpad.title = manager.title;
                g_scratchpad.email = manager.email;
                g_scratchpad.city = manager.city;
                g_scratchpad.phone = manager.phone;
            }
            else{
                gs.info("Manager is undefined");
            }

        })(current, previous);
     ```
4.  Click `Submit`

---

## 3. Test Both Business rule and Client Script
*(All the USERS in the ServiceNow Application have EMPTY DATA on fields: Business Phone,  City)*

1. Go to **`All` > Type `sys_user_group.list` > Press Enter**.
2. Click **`New`**.
3. Input a manager e.g. `Andrew Och` 
4. If you cannot see the Scratch Pads updated, **Right click the top bar** and **Click `Save`**

*You will have noticed that City and Phone are `Not Available` for most Managers, Complete the Bonus Task to Fix this issue* 

---

## Bonus Task - Add data for both Business Phone and City fields to test your Business Script and Client Script

**TODO:** *Go to the Users List and input Data for the Business Phone field and input data for the City field*

*Prefered User: Andrew Och, Ashley Parker, Bushra Akhtar*
