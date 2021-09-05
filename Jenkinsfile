pipeline {
    //untuk define dimana mau ngerun
    agent{
        node{
            label'docker-chrome'
        }
    }
    //kumpulan task yang diassign di job tersebut
    //clone source code, masuk ke project -> skipped karena otomatis
    //install dependencies
    //run test
    //generate report
    stages{
        stage('install dependencies'){
            steps{
                sh "npm ci"
            }
        }
        stage('run test'){
            steps{
                sh "npm test"
            }
        }
        stage('generate report'){
             steps{
                sh "npm run reporter"
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: true, 
                    keepAll: true, 
                    reportDir: 'cypress/reports/', 
                    reportFiles: 'index.html', 
                    reportName: 'BDD Atlas MultiCucumber Reporter', 
                    reportTitles: ''])
            }
        }
    }

    //yang di excecute
    post{
        always{
            echo "Ini adalah post"
        }
    }
}