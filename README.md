# work-day-scheduler05

* This code contains a day planner. When the user opens the day planner they are presented with a current day with rows from 9am -5pm. The user can add events in each row and click the save button. If the user returns to the site their original changes will still be there. In additon, there is color shading for the hours that corresponds to the current time, and if hours in the day are in the past or in the future.

*  This code solves the problem of users losing any information that they add to a website and leave the page. The content the user adds to this day planner will be stored in local storage, and when they come back to the site their information will be retieved from local storage and still show on the page. This means that the user now does not have to worry about losing any changes they make to the day planner. 

* Pseudo Code

    * User opens the browser to the day planner
        * Current date is displayed at the top

            * Time blocks are on the screen from 9am to 5pm
                * color shading 
                * blocks past current time are grey
                * block on current hour is green
                * blocks in future are red

