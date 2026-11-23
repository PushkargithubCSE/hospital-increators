import ServicePage from "../../components/ServicePage";

export const metadata = { title: "Business Case Planning & Strategic Advisory — The Hospital Increators" };

const SERVICES = [
  { t: "Comprehensive Feasibility Assessment", d: "Evaluating the strategic, technical, operational, and commercial feasibility of proposed healthcare projects." },
  { t: "Healthcare Market Research & Demand Analysis", d: "Assessing healthcare demand, demographic trends, disease burden, competitive landscape, and market opportunities." },
  { t: "Project Conceptualisation & Viability Assessment", d: "Defining project scope, infrastructure requirements, service positioning, and development potential." },
  { t: "Clinical Speciality Mix Optimisation", d: "Identifying the optimal combination of clinical specialities and services based on market demand, clinical priorities, and revenue potential." },
  { t: "Bed Capacity & Configuration Planning", d: "Determining the appropriate bed strength, distribution, and category mix to optimise clinical efficiency, resource utilisation, and financial performance." },
  { t: "Financial Modelling, Viability & Break-Even Analysis", d: "Developing capital investment estimates, revenue projections, operating cost models, cash-flow forecasts, profitability assessments, and break-even scenarios." },
  { t: "Detailed Project Report (DPR) Preparation", d: "Preparing comprehensive, investment-ready project reports integrating clinical, technical, operational, financial, and implementation considerations." },
  { t: "Risk Identification, Assessment & Mitigation", d: "Evaluating market, financial, regulatory, operational, and execution risks and formulating practical mitigation strategies." },
  { t: "Strategic Recommendations & Investment Roadmap", d: "Providing actionable recommendations, investment strategies, and phased implementation roadmaps to support informed decision-making and long-term project success." },
];

export default function Page() {
  return (
    <ServicePage
      letter="A"
      title="Business Case Planning & Strategic Advisory"
      tagline="Transforming Healthcare Visions into Viable, Sustainable and Future-Ready Investments"
      intro="We provide comprehensive business case planning and strategic advisory services to help healthcare investors, promoters, and institutions make informed, evidence-based investment decisions. Our approach integrates market intelligence, clinical planning, financial analysis, and risk assessment to develop commercially viable, operationally efficient, and sustainable healthcare projects."
      services={SERVICES}
      valueHeading="From Concept to Confidence. From Investment to Impact."
      valueText="Our objective is not merely to establish project feasibility, but to create a robust foundation for investment confidence, operational excellence, long-term financial sustainability, and meaningful healthcare impact."
    />
  );
}