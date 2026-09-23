**Box Office Sync: Reconciling 3-Way Divergent Work on the Event Ticket**



**Final calculateTicketPrice Walkthrough**



The final calculateTicketPrice combines the changes made by the different contributors:



1\. Base ticket price — The original implementation calculates the total using quantity \* basePrice.



2\. 10% group discount — Clone A added the 10% discount when the order has 5 or more tickets.



3\. 50% VIP surcharge — Clone C added the 50% surcharge when the order is for VIP tickets.



4\. Flat $10 discount — Clone A later added a flat $10 discount to the order.



5\. Rounding — Clone B changed the final calculation from Math.floor() to Math.round().



The final calculation applies the group discount first, then the VIP surcharge when applicable, then the flat $10 discount, and finally rounds the result.



**Task 3: Two-Way Conflict vs. Task 5: Three-Way Conflict**



The conflict in Task 3 was a two-way conflict because Clone B had changed the rounding behavior while Clone A had added the group discount. Both changes were made from the original version of the same function, so the conflicting lines had to be combined. The final solution kept both the 10% group discount and Math.round().



The conflict in Task 5 was more complex because Clone C had its VIP surcharge change while the remote branch already contained the group discount and rounding changes. With three lines of work, I had to make sure that the VIP surcharge was not accidentally removed while combining the group discount and rounding. The merge also affected test.js because both branches had added different tests. The conflict had to be resolved by keeping all three behaviors: the group discount, rounding, and VIP surcharge.



**Task 6: Effect of the Flat $10 Discount**



The flat $10 discount changed the expected results of the existing group and VIP tests because all of these calculations use the same calculateTicketPrice function. For example, the VIP price changed from $60 to $50 after the $10 discount was applied. The group price also changed from $90 to $80.



This shows that a change that seems isolated can still affect other features when they share the same function or code. Changes in shared code can interact with previous features, so their effects need to be tested together.



**Process Change to Prevent Rejected Pushes**



One process change that could prevent these rejected pushes is to require every contributor to fetch and synchronize with the shared remote branch before pushing. For example, the team could make it a rule to run git fetch and then merge or rebase the latest remote changes before every push. This would reduce the chance of pushing from an outdated local branch.

**Screenshot Evidence**



Task 1

!\[Task 1 Screenshot](screenshots/task-1.png)



Task 2

!\[Task 2 Screenshot](screenshots/task-2.png)



Task 3

!\[Task 3 Screenshot](screenshots/task-3.png)



Task 4

!\[Task 4 Screenshot](screenshots/task-4.png)



Task 5

!\[Task 5 Screenshot](screenshots/task-5.png)



Task 6

!\[Task 6 Screenshot](screenshots/task-6.png)



Task 7

!\[Task 7 Screenshot](screenshots/task-7.png)

