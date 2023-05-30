# SIT323_10.2D
Steps taken

#Open a Command Prompt on the System
`gcloud init`

#Install GCloud-Auth-Plugin
`gcloud components install gke-gcloud-auth-plugin`

#Open a Command Prompt 
#Migrate to the folder where you have all the source and Dockerfile
cd <path-to-folder>

#Build the Dockerfile
`docker build -t gcr.io/nichollsb/cicd:latest .`

#Push Docker Image to gcr
`docker push gcr.io/nichollsb/cicd:latest`

#Install Kubectl just In Case (Might be Good)
`gcloud components install kubectl`

#Create The cluster
`gcloud container clusters create-auto continueous-cluster --region=us-west1`

#Connect to the Cluster
`gcloud container clusters get-credentials continueous-cluster  --region=us-west1`

#Create the Deployment on the cluster
`kubectl apply -f createDeployment.yaml`


#Create a service by exposing the Deployment
`kubectl expose deployment mydeployment --type LoadBalancer --port 80 --target-port 4000`
