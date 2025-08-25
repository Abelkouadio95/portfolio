import AnimatedSection from "@/components/animation/animatedSection";
import Layout from "@/components/layout/layout";
import CertificationsClient from "@/components/certifications/CertificationsClient";

export default function Certifications() {
    return(
        <Layout>
            <div className="pt-24">
                <AnimatedSection>
                    <CertificationsClient />
                </AnimatedSection>
            </div>  
        </Layout>
    )
}