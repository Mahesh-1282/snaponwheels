"use client";

import { motion } from "framer-motion";

export default function VideoSection({ videoId, title = "See it in Action", description }) {
    return (
        <section style={{ padding: "80px 0", textAlign: "center" }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}
            >
                <h2 style={{
                    fontSize: "2.5rem",
                    marginBottom: "40px",
                    fontWeight: "800",
                    color: "#000"
                }}>
                    {title}
                </h2>

                <div style={{
                    position: "relative",
                    paddingBottom: "56.25%", /* 16:9 Aspect Ratio */
                    height: 0,
                    overflow: "hidden",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    background: "#000"
                }}>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&controls=1`}
                        title={title}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {description && (
                    <p style={{
                        marginTop: "30px",
                        fontSize: "1.2rem",
                        color: "#555",
                        lineHeight: "1.6",
                        maxWidth: "800px",
                        margin: "30px auto 0"
                    }}>
                        {description}
                    </p>
                )}
            </motion.div>
        </section>
    );
}
