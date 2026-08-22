const VISITOR_ID_KEY = "portfolio_visitor_id";
const VISITOR_NAME_KEY = "portfolio_visitor_name";

const anonymousNames = [
  "AnonymousFox",
  "AnonymousTiger",
  "AnonymousWolf",
  "AnonymousEagle",
  "AnonymousPanda",
  "AnonymousLion",
  "AnonymousFalcon",
  "AnonymousBear",
  "AnonymousOtter",
  "AnonymousHawk",
];

export function getVisitorId() {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);

  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }

  return visitorId;
}

export function getVisitorName() {
  let visitorName = localStorage.getItem(VISITOR_NAME_KEY);

  if (!visitorName) {
    const randomIndex = Math.floor(
      Math.random() * anonymousNames.length
    );

    visitorName = anonymousNames[randomIndex];

    localStorage.setItem(VISITOR_NAME_KEY, visitorName);
  }

  return visitorName;
}