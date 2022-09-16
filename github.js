const { Octokit } = require("octokit");
const moment = require("moment");

const requisitionGitHub = async () => {
  const octokit = new Octokit({
    auth: "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",
  });

  const req = await octokit.request("GET /users/hudson-uchoa/events", {
    username: "hudson-uchoa",
  });
  const commitouHoje = moment(req.data[0].created_at).format("DD/MM/YYYY");
  return commitouHoje == moment().format("DD/MM/YYYY")
    ? "Ele commitou hoje"
    : "Ele não commitou hoje";
};

module.exports = requisitionGitHub;
