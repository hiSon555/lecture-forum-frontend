// 환경변수라는 건 프로그램 바깥의 파일임 <- 프로그램 실행 자체와는 관련이 없음
// 환경변수에서 불러오는 값은 string | undefined
// 그렇게 타입 추론된 변수를 쓰려면 내로잉을 매번 해줘야 함
// 그게 귀찮으니까 애초에 ""으로 논리합 처리해서 값이 없으면 ""이 변수에 들어가도록 함
import * as axios from "axios";

const BASE_URL = import.meta.env.BASE_URL || "";        // string화 함 => string | undefined로 넓히면 귀찮아지니까 타입 고정

const api = axios.create({
    baseURL: BASE_URL,          // 통신을 진행할 상대의 기본 주소 (필수)
    timeout: 5000,              // 통신 요청을 했을 때, 실패됐다고 판단하는 타임아웃 시간 (ms 단위 : 5초)
    withCredentials: true,      // CORS 요청을 허용할지 여부
})

export default api;