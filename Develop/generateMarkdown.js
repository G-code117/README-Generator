function generateMarkdown(data){
    return `
     # ${data.title}


     ## Description

    ${data.description}

    ## Table of Contents

    find what you need here.

    - [Installation]${data.installation}
    - [Usage]${data.usage}
    - [Credits]${data.contributors}
    - [License]${data.license}

    ## Installation
    these are the steps required to install the project:
    ${data.installation}

    ## Usage

    examples for use. Screenshots as needed.
    ${data.usage}

    

    ## Credits

    List of collaborators, with links to their GitHub profiles.

    ${data.contributors}



    ## License

    ${data.license}
     refer to [https://choosealicense.com/](https://choosealicense.com/).

    ---

    🏆

    ## Badges

    
    ## Features

    features listed here.

    ## How to Contribute



    ## Questions
    ${data.email}

    
    ## Tests

    ${data.test}
        
    `
}
module.exports = generateMarkdown;