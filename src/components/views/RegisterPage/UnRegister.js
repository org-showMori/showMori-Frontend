
import { useDispatch } from "react-redux";
import { unRegisterUser } from "../../../_actions/userAction";
import { SESSION_ID } from "../../utils/SessionTypes";


function UnRegisterPage(props) {
  let result = window.confirm("정말 회원탈퇴를 진행할까요?");

  if (!result) {
    alert("회원탈퇴가 취소되었습니다.");
    props.history.push("/users");
    return false;
  } else {
    const dispatch = useDispatch();
    dispatch(unRegisterUser()).then((res) => {
      console.log(res);

      if (res.payload.success) {
        window.sessionStorage.removeItem(SESSION_ID);
        alert("회원탈퇴가 완료되었습니다.");
        window.location.replace("/posts");
        return false;
      } else {
        alert("회원탈퇴에 실패하였습니다.");
        props.history.push("/users");
        return false;
      }
    });
  }
  return null;
}

export default UnRegisterPage;
