package my.Library.service;

import my.Library.model.IssueRequest;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Optional;

@Service
public class IssueService {

    private final HashMap<String, IssueRequest> issues = new HashMap<>();

    public Optional<IssueRequest> getIssueByID(String issueId) {
        return Optional.ofNullable(issues.get(issueId));
    }

    public HashMap<String, IssueRequest> showIssues() {
        return new HashMap<>(issues);
    }

    public IssueRequest newIssue(IssueRequest newIssue) {
        issues.put(newIssue.getId(), newIssue);
        return newIssue;
    }

    public Optional<IssueRequest> fulfillIssue(String issueId) {
        if (issues.containsKey(issueId)) {
            IssueRequest issue = issues.get(issueId);
            issue.updateStatus();
            return Optional.of(issue);
        }
        return Optional.empty();
    }

    public Optional<IssueRequest> renewIssue(String issueId, int noOfDays) {
        if (issues.containsKey(issueId)) {
            IssueRequest issue = issues.get(issueId);
            issue.renewal(noOfDays);
            return Optional.of(issue);
        }
        return Optional.empty();
    }
}
