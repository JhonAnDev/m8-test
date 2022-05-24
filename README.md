- First unzip the folder, place your command prompt or console in root and run

npm i
# or
npm install

- Run the development server:

npm run dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Mach Eight Sample Project

Thank you for taking the time to complete this sample project. We're a tech
first company and we value our engineers tremendously. We're are looking for
hard working, smart engineers with either excellent experience or lots of
potential.


## Project

The project is to write a function that searches through NBA player heights
based on user input. The raw data is taken from
[here](https://www.openintro.org/data/index.php?data=nba_heights).  The data is
served in json format by the endpoint
[here](https://mach-eight.uc.r.appspot.com/).

The task is to create an application that takes a single integer input. The
application will download the raw data from the website above
(https://mach-eight.uc.r.appspot.com) and print a list of all pairs of players
whose height in inches adds up to the integer input to the application. If no
matches are found, the application will print "No matches found"

Sample output is as follows:
```
> app 139

- Brevin Knight         Nate Robinson
- Nate Robinson         Mike Wilks
```

The algorithm to find the pairs must be faster than O(n^2). All edge cases
should be handled appropriately. This is _not_ a closed book test. You are
encouraged to reach out with any questions that you come across.

## Evaluation

All candidates who submit an algorithm that is efficient and correct will pass
to the next step of the interview process. We define "efficient" as faster than
O(n^2) and "correct" as returning the correct results for all possible inputs.
Any assignment that doesn't return the correct answer for the sample input
above (139) will fail.

If you feel the need to impress us by going above and beyond, we're impressed
by good unit tests as well as clean and readable code. We're less interested in
your knowledge of any particular framework (react, django, etc.). You're
welcome to create a full featured web app with pretty graphics if you want, but
that will not improve your chances of passing. There have been passing
assignments written in under 30 lines of python.


## Submission

The preferred form of submission is by publishing a public repo on github with
your code and a README file explaining how to run the code. We can also accept
an emailed zip file with the same contents.
