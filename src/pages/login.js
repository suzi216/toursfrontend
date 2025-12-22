import { useState } from 'react';
import { GiMail, GiLock, GiWarlockEye, GiEyeOff } from 'react-icons/gi';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux'
import { useRouter } from "next/router";


export default function LoginPage() {
  const dispatch = useDispatch()
    const router = useRouter()
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const AuthService = (await import('@/components/utils/services/AuthService')).default
    const { addAuth } = await import('@/redux/slices/authSlice')
    const { showError, showSuccess } = await import('@/components/utils/helpers')

    const payload = { username, password }

    try {
      const response = await AuthService.login(payload)
      const token = response.data.jwt
      const decoded = jwtDecode(token)

      if (decoded.role === 'ADMIN') {
        dispatch(addAuth({
          user: response.data.user, // optional: any user info
          accessToken: token,
          decoded: decoded
        })); 
        showSuccess('Logged in successfully!')
    router.push("/");

      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm xl:max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-4 xl:p-8 text-white">
            <div className="w-14 h-14 xl:w-16 xl:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 xl:mb-8 backdrop-blur-sm">
              <div className="w-10 h-10 xl:w-12 xl:h-12 bg-white/30 rounded-lg flex items-center justify-center">
                <div className="w-7 h-7 xl:w-8 xl:h-8 bg-teal-600 rounded-md"></div>
              </div>
            </div>
            <h1 className="text-2xl xl:text-4xl font-bold mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-teal-100">
              {isSignUp
                ? 'Sign up to get started with your account'
                : 'Sign in to continue to your account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 xl:p-10 space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* <Mail className="h-5 w-5 text-gray-400" /> */}
                </div>
                <input
                  id="username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-2 xl:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="userexample"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* <Lock className="h-5 w-5 text-gray-400" /> */}
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-10 py-2 xl:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <GiWarlockEye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <GiWarlockEye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>

              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-2 xl:py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-teal-500/30"
            >
              {isLoading
                ? 'Loading...'
                : isSignUp
                  ? 'Create Account'
                  : 'Sign In'}
            </button>

          </form>
        </div>

        <p className="text-center mt-3 text-sm text-gray-600">
          Protected by industry-standard encryption
        </p>
      </div>
    </div>
  );
}
