function cov_5pyco05nc() {
  var path = "/Users/aleksandr/Projects/rss/rss-react/src/mocks/server.ts";
  var hash = "e0d4eb6e1b61411b5784016d4183b237d10454bf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/aleksandr/Projects/rss/rss-react/src/mocks/server.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 26
        },
        end: {
          line: 4,
          column: 50
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e0d4eb6e1b61411b5784016d4183b237d10454bf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_5pyco05nc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_5pyco05nc();
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
export const mockServer = (cov_5pyco05nc().s[0]++, setupServer(...handlers));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfNXB5Y28wNW5jIiwiYWN0dWFsQ292ZXJhZ2UiLCJzZXR1cFNlcnZlciIsImhhbmRsZXJzIiwibW9ja1NlcnZlciIsInMiXSwic291cmNlcyI6WyJzZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBTZXJ2ZXIgfSBmcm9tICdtc3cvbm9kZSc7XG5pbXBvcnQgeyBoYW5kbGVycyB9IGZyb20gJy4vaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgbW9ja1NlcnZlciA9IHNldHVwU2VydmVyKC4uLmhhbmRsZXJzKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosU0FBU0UsV0FBVyxRQUFRLFVBQVU7QUFDdEMsU0FBU0MsUUFBUSxRQUFRLFlBQVk7QUFFckMsT0FBTyxNQUFNQyxVQUFVLElBQUFKLGFBQUEsR0FBQUssQ0FBQSxPQUFHSCxXQUFXLENBQUMsR0FBR0MsUUFBUSxDQUFDIn0=