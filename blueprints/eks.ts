import * as cdk from 'aws-cdk-lib';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as blueprints from '@aws-quickstart/eks-blueprints';
import {Construct} from "constructs";


const app = new cdk.App();
const account = process.env.AWS_ACCOUNT_ID;
const region = process.env.AWS_DEFAULT_REGION || 'us-east-1';
const version = 'auto';

// See https://aws-quickstart.github.io/cdk-eks-blueprints/addons/ for available add-ons
const addOns: Array<blueprints.ClusterAddOn> = [
  new blueprints.addons.ArgoCDAddOn(),
  new blueprints.addons.CalicoOperatorAddOn(),
  new blueprints.addons.MetricsServerAddOn(),
  new blueprints.addons.ClusterAutoScalerAddOn(),
  new blueprints.addons.AwsLoadBalancerControllerAddOn(),
  new blueprints.addons.VpcCniAddOn(),
  new blueprints.addons.CoreDnsAddOn(),
  new blueprints.addons.KubeProxyAddOn()
];

const blueprint = blueprints.EksBlueprint.builder()
.account(account)
.region(region)
.version(version)
.addOns(...addOns)
.useDefaultSecretEncryption(true)
.build(app, 'CircleCI-EKS')


class ECRStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id, {})

    const repo = new ecr.Repository(this, 'repository', {})
    new cdk.CfnOutput(this, 'repoUri', {value: repo.repositoryUri})
  }
}

new ECRStack(app, 'CircleCI-ECR')