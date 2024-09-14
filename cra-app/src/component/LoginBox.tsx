import { useState } from 'react';

export default function LoginBox() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isTooSafePw = password.length > 5;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          회원가입 및 로그인
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              이메일
            </label>
            <div className="mt-2">
              <input
                required
                className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                비밀번호
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                required
                autoComplete="off"
                className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="가장 위험한 비밀번호를 5자리 아래로 입력해주세요"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            {isTooSafePw && (
              <p className="mt-1 text-right text-sm text-red-600">
                너무 안전한 비밀번호입니다. 6자리 아래로 줄여주세요😀
              </p>
            )}
          </div>
          <div>
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              회원가입 및 로그인
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          회원가입과 로그인을 동시에 진행합니다.
        </p>
        <p className="mt-2 text-center text-sm text-red-500">
          🚨데모 프로젝트입니다, 절대 "진짜" 비밀번호를 넣지 마세요!🚨
        </p>
      </div>
    </div>
  );
}
