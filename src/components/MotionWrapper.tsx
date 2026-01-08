
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    fullWidth?: boolean;
}

const MotionWrapper = ({
    children,
    delay = 0,
    direction = "up",
    className = "",
    fullWidth = false,
}: MotionWrapperProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const getVariants = () => {
        const distance = 30; // Subtler travel distance
        switch (direction) {
            case "up":
                return {
                    hidden: { opacity: 0, y: distance },
                    visible: { opacity: 1, y: 0 },
                };
            case "down":
                return {
                    hidden: { opacity: 0, y: -distance },
                    visible: { opacity: 1, y: 0 },
                };
            case "left":
                return {
                    hidden: { opacity: 0, x: -distance },
                    visible: { opacity: 1, x: 0 },
                };
            case "right":
                return {
                    hidden: { opacity: 0, x: distance },
                    visible: { opacity: 1, x: 0 },
                };
            default:
                return {
                    hidden: { opacity: 0, y: distance },
                    visible: { opacity: 1, y: 0 },
                };
        }
    };

    return (
        <div ref={ref} style={{ width: fullWidth ? "100%" : "auto" }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: delay,
                    duration: 0.8
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default MotionWrapper;
