pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        echo 'GitHub checkout completed!'
      }
    }

    stage('Build') {
      steps {
        echo 'Building application...'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy completed!'
      }
    }
  }

  post {
    success {
      echo 'Pipeline completed successfully!'
    }
    failure {
      echo 'Pipeline failed!'
    }
  }
}
