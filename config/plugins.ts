module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        region: env("AWS_REGION"),
        params: { Bucket: env("AWS_S3_BUCKET") },
      },
    },
  },
});
