import { useState } from "react";
import axios from "axios";
import * as React from "react";

export default function Login() {
    console.log("login페이지로 이동했음");
    const [form, setForm] = useState({ email: '', password: ''});

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8080/api/auth/login", form);
        localStorage.setItem("token", res.data.token);
        alert("로그인 되었습니다.");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" onChange={handleChange} placeholder="아이디(이메일)" />
            <input name="password" type="password" onChange={handleChange} placeholder="비밀번호" />
            <button>로그인</button>
        </form>
    );
};
