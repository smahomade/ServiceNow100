# TOPIC 3: 

## 1. Create a Bussiness Rule 

1. Go to **`All` > `System Definition` > `Business Rules` > Press Enter**.
2. Click **`New`**.
3. Fill in Business Rule details
   - **Name:** `Name of your Choice`
   - **Table:** `User [sys_user]`
   - **Active:** `Checked`
   - **Advanced:** `Checked`
   - **When to run - When** `Before`
   - **When to run - Order** `100`
   - **When to run - Update** `Checked`
   - **Advanced (Condition)**
    ```javascript
        current.active==false 
    ```
   - **Advanced (Script)** 
    ```javascript
        (function executeRule(current, previous /*null when async*/) {

        try{
            //Log the user and the ID of the user when deactivation occurs
            gs.info(current.name + ' (' + current.sys_id + ') is being deactivated.');

            // returns manager sys_ID
            var manager = current.manager; 

            // Grab incident record and Add queries 
            var incidentGR = new GlideRecord('incident');
            incidentGR.addQuery('assigned_to',current.sys_id); 
            incidentGR.addQuery('active',true); 
            incidentGR.query();

            if(incidentGR.hasNext){
                if(!manager){
                gs.addErrorMessage(current.name + ' has active incidents but no manager, give them a manager to pass incidents onto');
                current.setAbortAction(true); 
                return;
                }
            }

            //amount of incidnts reassigned
            var reassignedCount = 0;

            // loop through all incidents
            while(incidentGR.next()){
                //assign each one to the manager
                incidentGR.assigned_to = manager; 
                incidentGR.update();
                reassignedCount++;
            }
            gs.info(reassignedCount + ' incidents reassigned from ' + current.name + ' to their manager ' + managerGR.name + '.');
            
        }
        catch(e){
            gs.error('Error reassigning incidents for user ' + current.name + ': ' + e.message);
        }

        })(current, previous);
    ```
4. Click `Submit`

---

## 2. Confirm User has a Manager and has Incidents

1. Create Two Incidents each Assigned to different Users
   1. Go to **`All` > `Incident` > `All` > Press Enter**.

   <ins>***OPTIONAL TASK:***</ins><br>
   *Create a filter: `Updated` | `on` | `Today`* <br>
   *Click the `List Menu` > `Create Favorites` > Press `Done`*


   2. Click `New` 
   3. Fill the mandatory Fields `Caller` & `Short Description` with anything, fill `Assigned to` Field with a User of your choice (example: `Andrew Och`) once chosen, Click `Submit`
   4. Repeat step 3 and replace the `Assigned to` Field with a different user (example: `Anotony Alldis`) once chosen, Click `Submit`
   5. You should have created 2 new Incidents each Assigned To a different User<br>
   
2. Find First User and make the Manager Field Visable
   1. Go to **`All` > `sys_user.list` > Press Enter**.
   2. Find the User who was Assigned to your First Incident
   3. Confirm that they have no manager:
      1. Right Click the Top Bar > `Configure` > `Form Layout`
      2. from the `Available` List move the Manager Field to `Selected` List
      3. Click `Save`
   4. Manage Field should be visable but should be empty
   5. Click `Update` <br>

3. Find Second User and Add a Manager for that User
   1. Should already be in the Users Table if not *(Go to **`All` > `sys_user.list` > Press Enter**.)*
   2. Find the User who was Assigned to your Second Incident
   3. Confirm that you can see the Manager field, Add a manager (example: `Abel Tuter`)
   4. Click `Update`

## 3. Test if the Business Rule works

1. Go to **`All` > `Incident` > `All` > Press Enter**.
2. Find the User who was Assigned to your First Incident
3. Make sure the **Active** `Unchecked`
4. Click `Update`
5. An Error Popped up? If so look at your code and see why. <br> *Hint: The User is still Active even if the checkbox looks unchecked!*
6. Do Step 2 and 3 but the User who was Assigned to your Second Incident
7. Click `Update`
8. Check your Second Incident, Who was it assigned to?

