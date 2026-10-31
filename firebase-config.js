// 민관이교실 전용 Firebase 설정 (학원 홈페이지 mkmath 프로젝트와 별개)
// Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) → "SDK 설정 및 구성"의 firebaseConfig 값을 그대로 넣으면 됨.
// 비어 있으면 교실은 그대로 되고, 순위표만 "준비 중"으로 나옴.
window.CLASSROOM_FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
