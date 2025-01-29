# bankit-test

Answers to general knowledge questions:

SECTION A

1. What are the most important security factors to take into account while creating financial applications?

. Encrypt sensitive user data such as card details and password while it is in transit HTTPS Aand while at rest.

. Enable multifactor authentication and authorization to grant only authorized and authenticated users gain access to their private data.

. Verify user input to avoid injection attacks such as XSS and SQL injwection

. Enable secure session management to prevent session hijack

. Regular penetration test and security audits

. Compliance with GDPR and PCI-DSS

2. Describe the importance of compliance standards such as PCI-DSS and GDPR in
   financial applications

   . Payment Card Industry Data Security Standard ensure that businesses that handles credit card data have a safe environment. Non compliance would result to fines and customer decline.

   . General Data Protection Regulation helps to safeguard the privacy and personal information of EU people. Non compliance would result to fine

3. Explain the concept of "idempotency" in financial transactions and why it's crucial.

   . Idempotency operations are operations that can be carried out again without affecting the first the outcome after it has been first applied. in other words, repeated transactions in the financial domain should not lead to numerous debit or credit.

   This would prevent unintentional duplicate request from a user or network error which would result in disparities in financies.

4. What are the potential risks of handling sensitive customer data, and how can they be mitigated?

   . Identity theft, menetary loss and harm to one's reputation can result from unauthorised access to private data.

   . Ensure frequent security audits, access control and robust encryption.

   . Apply role base access constraints

SECTION B

1.  How would you ensure the UI/UX of a banking web application is both user-friendly and secure?

    . I ensure the application has a logical flow and clear labels for ease of use.

    . I make sure the application is reponsive across all platforms including mobile, desktop and table

    . I use proper authentication and strong password passsword requirements where neccessary.

    . I hide private and sensitive datas such as account details and BVN

    . I use session timeout to reduce unwanted access.

2.  Explain the role of form validation and data masking in financial applications.

    . To give prompt feedback, i make sure user inputs are evaluated on the client side, inputs such as email format and password strength.

    . To avoid processing fraudulent data, i always validate user inputs on the server side.

    . In order to avoid exposure, hide private information such as account numbers and card details.

3.  Discuss strategies for handling real-time data updates (e.g., account balance
    changes) in a React application.

. WebSockets allows the client and server to communicate in real time.

. when retriving regular changes from the server, it's also recommened to use preiodic polling.

. To maintain and update the chnages on the application real time we can use Redux or context API to manage large state.

    . we can also use optimistic updates to update the user interface while waiting for the serverr confirmation.

4.  What are Progressive Web Apps (PWAs), and how can they benefit a financial
    institution?

    . PWAs are perfect for users who experience poor connectivity because they can function offline

    . Using PWAs, it helps with quick loading even with a poor network connection.

    . with PWAs we can send push notifications which can be use in sending transaction alert to users.

    PWAs functions on any device with web browser so it works well on both IOS and Andriod devices.
