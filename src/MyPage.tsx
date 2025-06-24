import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "./utils/auth.ts";

interface User {
    id?: number;
    username?: string;
    email?: string;
}

export default function MyPage() {
    const [user, setUser] = useState<User>({});
    //const token = localStorage.getItem("token");

    useEffect(() => {
        const token = getToken();
        axios.get("http://localhost:8000/api/user/me", {
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => setUser(res.data));
    }, []);

    // 회원정보 수정
    const handleUpdate = async () => {
        const token = getToken();
        const username = prompt("수정할 이름:", user.username);
        if(username) {
            await axios.post("http://localhost:8000/api/user/update", {username}, {
                headers: {Authorization: `Bearer ${token}`}
            });
            alert("수정이 완료되었습니다.");
        }
    };

    // 회원 탈퇴
    const handleDelete = async () => {
        const token = getToken();
        await axios.delete("http://localhost:8000/api/user/delete", {
            headers: {Authorization: `Bearer ${token}`}
        });
        alert("삭제가 완료되었습니다.");
        localStorage.removeItem("token");
    };

    return (
        <div>
            <h2>회원정보</h2>
            <p>이름 : {user.username}</p>
            <p>이메일 : {user.email}</p>
            <button onClick={handleUpdate}>회원정보 수정</button>
            <button onClick={handleDelete}>회원탈퇴</button>
        </div>
        
    );
    
}
