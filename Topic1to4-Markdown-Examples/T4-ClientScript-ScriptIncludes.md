# TOPIC 4: 

## 1. Create a Client Script Similar to the Topic 2

1. Go to **`All` > `System Definition` > `Client Script` > Press Enter**.
2. Click **`New`**.
3. Fill in Client Script details
   - **Name:** `Name of your Choice`
   - **Table:** `Group [sys_user_group]`
   - **Type:** `onChange`
   - **Field Name:** `Manager`
   - **Global:** `Checked`
   - **Active:** `Checked`
   - **Script - onChange**
       ```javascript
        function onChange(control, oldValue, newValue, isLoading, isTemplate) {
            if (isLoading || newValue === '') {
                return;
            }
                var ga = new GlideAjax('ManagerDetailsAjax'); 
                ga.addParam('sysparm_name', 'getManagerDetails'); 
                ga.addParam('sysparm_manager_id', newValue);
                ga.getXMLAnswer(function(response) {
                    var details = JSON.parse(response);

                    g_form.clearMessages();
                    g_form.showFieldMsg('manager', 'Title: ' + (details.title || "Not Available"), 'info');
                    g_form.showFieldMsg('manager', 'Email: ' + (details.email || "Not Available"), 'info');
                    g_form.showFieldMsg('manager', 'City: ' + (details.city || "Not Available"), 'info');
                    g_form.showFieldMsg('manager', 'Phone: ' + (details.phone || "Not Available"), 'info');
                });
            
        }
        ```
4. Click **Submit**

---

## 2. Create a Script Include 
1. Go to **`All` > `System Definition` > `Script Includes` > Press Enter**.
2. Click **`New`**.
3. Fill in Script Include details
   - **Name:** `Name of your Choice`
   - **Client Callable** `Checked`
   - **Active:** `Checked`
   - **Script**
          ```javascript
            var ManagerDetailsAjax = Class.create();
            ManagerDetailsAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {
            getManagerDetails: function() {
                    var managerId = this.getParameter('sysparm_manager_id');
                    var response = {
                        title: "Not Available",
                        email: "Not Available",
                        city: "Not Available",
                        phone: "Not Available"
                    };

                    
                    if (managerId) {
                        var manager = new GlideRecord('sys_user');
                        if (manager.get(managerId)) {
                            response.title = manager.getValue('title') || "Not Available";
                            response.email = manager.getValue('email') || "Not Available";
                            response.city = manager.getValue('city') || "Not Available";
                            response.phone = manager.getValue('phone') || "Not Available";
                        }
                    }

                    return JSON.stringify(response);
                },
                type: 'ManagerDetailsAjax'
            });
        ```
4. Click **Submit**

---

## 3. Test both Client Script and Script Include
1. Go to **`All` > Type `sys_user_group.list` > Press Enter**.
2. Click **`New`**.
3. Input a manager e.g. `Andrew Och` 
4. You should see 4 Fields under the manager.
5. Input a different manager
6. The 4 Fields should be dynamic and should change when the manager is changed
