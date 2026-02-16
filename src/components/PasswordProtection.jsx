import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Lock } from 'lucide-react'
import { BackgroundBeams } from '@/components/ui/BackgroundBeams'

/* ── MBN!FY Logo ──────────────────────── */
function MBNLogo() {
    return (
        <div className="relative flex justify-center items-center py-6">
            {/* Glow behind logo for visibility on Dark Card */}
            <div className="absolute inset-0 bg-[#D4FF00] blur-[50px] opacity-[0.15] rounded-full scale-125 pointer-events-none" />
            <div className="absolute inset-0 bg-white blur-[30px] opacity-[0.1] rounded-full scale-100 pointer-events-none" />

            <img
                src={`/mbnify.png?v=${Date.now()}`}
                alt="MBN!FY STUDIO"
                className="relative z-10 w-64 md:w-80 h-auto object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            />
        </div>
    )
}

export default function PasswordProtection({ onUnlock }) {
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [shake, setShake] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!password.trim()) return
        setIsLoading(true)
        setError(false)

        setTimeout(() => {
            if (password === 'romandemo123') {
                setIsLoading(false)
                onUnlock()
            } else {
                setIsLoading(false)
                setError(true)
                setShake(true)
                setTimeout(() => setShake(false), 600)
            }
        }, 800)
    }

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] overflow-hidden font-sans selection:bg-[#D4FF00] selection:text-black">

            {/* Background Layer */}
            <div className="fixed inset-0 z-0">
                <BackgroundBeams className="opacity-50" />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center gap-8">

                {/* BLACK CARD (The Request: "Como antes pero en negro") */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/80 relative overflow-hidden"
                >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4FF00] to-transparent opacity-50" />

                    <div className="flex flex-col items-center gap-6">

                        {/* 1. Logo INSIDE the Black Card */}
                        <MBNLogo />

                        {/* 2. Text */}
                        <div className="text-center space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 mb-2">
                                <Lock className="w-3 h-3 text-white/40" />
                                <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">
                                    Acceso Privado
                                </span>
                            </div>
                            <p className="text-white/30 text-xs font-medium leading-relaxed max-w-[240px] mx-auto">
                                Esta es una demostración protegida.<br />Introduce tu clave de cliente.
                            </p>
                        </div>

                        {/* 3. Form */}
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                            <motion.div
                                animate={shake ? { x: [-4, 4, -4, 4, 0] } : {}}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative group">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            if (error) setError(false)
                                        }}
                                        className={`w-full bg-[#111] border text-center text-white placeholder:text-white/10 rounded-xl py-4 px-4 outline-none transition-all duration-300 tracking-[0.3em] text-lg font-bold
                                            ${error
                                                ? 'border-red-500/40 bg-red-900/10'
                                                : 'border-white/5 focus:border-[#D4FF00]/40 focus:bg-[#161616]'
                                            }
                                        `}
                                        placeholder="••••••"
                                        autoFocus
                                    />
                                </div>
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isLoading}
                                className="w-full bg-[#D4FF00] hover:bg-[#ccee00] text-black font-black uppercase text-[11px] tracking-[0.2em] py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(212,255,0,0.1)] hover:shadow-[0_8px_30px_rgba(212,255,0,0.2)]"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                                ) : (
                                    <span className="group-hover:translate-x-0.5 transition-transform">Desbloquear</span>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>

                {/* Spanish Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center opacity-40 hover:opacity-80 transition-opacity duration-500"
                >
                    <p className="text-[10px] text-white tracking-[0.2em] uppercase font-medium">
                        Sitio Web Diseñado por MBN!FY Studio
                    </p>
                    <p className="text-[9px] text-white/50 tracking-widest font-mono mt-1">
                        MADRID · {new Date().getFullYear()}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
