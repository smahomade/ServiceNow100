# TOPIC 1: Steps to Configure "Type" Field and Add UI Policy for Sparta Global Group

## 1. Add the "Type" Field to the Group
*(If the "Type" field is already visible, skip this step)*

1. Go to **`All` > Type `sys_user_group.list` > Press Enter**.
2. Click **New**.
3. Navigate to **Configuration > Form Layout**.
4. From the **Available** list, add the **Type** field to the **Selected** list.
5. Press **Save**.

---

## 2. Add the "Sparta Global" Option in the Type Field

1. Click the **magnifying glass icon** next to the **Type** field.
2. A pop-up of all group type records will appear. Click **New**.
3. Enter the following:
   - **Name:** `Sparta Global`
4. Click **Submit**.
5. Ensure the group type **Sparta Global** is now available in the **Type** field. If not, manually add it.

---

## 3. Adding UI Policy and Conditions

1. From **Step 2**, you should see a blank group record. Navigate to **Configuration > UI Policies**.
2. Click **New**.
3. Fill in the UI Policy details:
   - **Table:** `Group [sys_user_group]`
   - **Short Description:** `Make Manager Mandatory for Sparta Global Group Type`
   - **Active:** `Checked`
   - **Order:** `100`
   - **Condition:** `Type | contains | Sparta Global`
   - **Global:** `Checked`
   - **On Load:** `Checked`
   - **Reverse if false:** `Checked`
   - **Script - Execute if true:**
     ```javascript
     function onCondition() {
         g_form.addInfoMessage("The Sparta Global group must have a manager.");
     }
     ```
   - **Script - Execute if false:**
     ```javascript
     function onCondition() {
         g_form.clearMessages();
     }
     ```
4. Right-click the **Top Bar** and click **`Save`**.

---

## 4. Adding UI Policy Actions to Make Manager Field Mandatory

1. Scroll to the bottom of the UI Policy form where the **UI Policy Actions** section appears.
2. Click **`New`** to add a new UI Policy Action.
3. Fill in the following details:
   - **Field Name:** `Manager`
   - **Mandatory:** `True`
4. Click **Submit**.

---

## 5. Test the UI Policy

1. Go to **`All` > Type `sys_user_group.list` > Press Enter**.
2. Click **`New`**.
3. Change the **Type** field to `Sparta Global` and verify that:
   - The **Manager** field is now mandatory.
   - The message "The Sparta Global group must have a manager" appears.
