pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t amirmohammadi60/test-backend:APBE-${BUILD_NUMBER} .'
            }
        }
        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'backend', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    
                    sh '''
                      docker login -u $USERNAME -p $PASSWORD
                      docker push amirmohammadi60/test-backend:APBE-${BUILD_NUMBER}
                   '''  
                }
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                docker stop backy || true 
                docker run -d -p8080:80 --name backy amirmohammadi60/test-backend:latest
                '''
            }
        }
    }
}
