import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';

const ConsultationContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 3rem 0;
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.1) 0%, 
    rgba(44, 62, 80, 0.05) 100%
  );
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;

    .highlight {
      color: var(--primary-color);
    }
  }

  p {
    font-size: clamp(1rem, 2vw, 1.125rem);
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const FormSection = styled.section`
  padding: 4rem 0;
  background: white;
`;

const FormContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FormContainer = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9));
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: 20px 20px 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;

    &::before {
      content: '';
      width: 4px;
      height: 16px;
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      border-radius: 2px;
    }

    .required {
      color: var(--primary-color);
      margin-left: 0.25rem;
      font-size: 1.1rem;
    }
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    @media (max-width: 480px) {
      gap: 0.75rem;
    }
  }
`;

const Input = styled.input`
  padding: 1.25rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 1rem;
  transition: var(--transition);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: var(--text-secondary);
    font-weight: 400;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.25rem;
    font-size: 0.95rem;
  }
`;

const Select = styled.select`
  padding: 1.25rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 1rem;
  transition: var(--transition);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 1rem 1.25rem;
    font-size: 0.95rem;
  }
`;

const TextArea = styled.textarea`
  padding: 1.25rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 1rem;
  transition: var(--transition);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  min-height: 140px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: var(--text-secondary);
    font-weight: 400;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.25rem;
    font-size: 0.95rem;
    min-height: 120px;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 1rem;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-top: 0.125rem;
    cursor: pointer;
  }

  label {
    font-size: 0.9rem;
    line-height: 1.5;
    cursor: pointer;
    font-weight: normal;

    a {
      color: var(--primary-color);
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 1rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    insuranceType: '',
    currentInsurance: '',
    budget: '',
    preferredTime: '',
    message: '',
    agreePrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제 서비스에서는 API 호출
    setTimeout(() => {
      alert('보험상담 신청이 완료되었습니다. 전문 상담사가 곧 연락드리겠습니다.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        age: '',
        gender: '',
        insuranceType: '',
        currentInsurance: '',
        budget: '',
        preferredTime: '',
        message: '',
        agreePrivacy: false
      });
    }, 2000);
  };

  return (
    <Layout>
      <SEO 
        title="보험상담접수 - FINE"
        description="무료 보험상담을 신청하세요. 전문 상담사가 고객님의 상황에 맞는 최적의 보험을 추천해드립니다."
        keywords="FINE, 보험상담, 무료상담, 보험추천, 보험설계"
      />
      
      <ConsultationContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">무료 보험상담</span> 신청
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              전문 상담사가 고객님의 상황에 맞는 최적의 보험을 추천해드립니다.
              부담 없는 무료 상담으로 시작하세요.
            </motion.p>
          </HeroContent>
        </HeroSection>

        <FormSection>
          <FormContent>
            <FormContainer
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <div className="form-row">
                    <div>
                      <label htmlFor="name">
                        이름<span className="required">*</span>
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="이름을 입력하세요"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">
                        연락처<span className="required">*</span>
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="연락처를 입력하세요"
                        required
                      />
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="form-row">
                    <div>
                      <label htmlFor="email">이메일</label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="이메일을 입력하세요"
                      />
                    </div>
                    <div>
                      <label htmlFor="age">나이</label>
                      <Input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="나이를 입력하세요"
                        min="1"
                        max="100"
                      />
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="form-row">
                    <div>
                      <label htmlFor="gender">성별</label>
                      <Select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">선택하세요</option>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="insuranceType">
                        관심 보험<span className="required">*</span>
                      </label>
                      <Select
                        id="insuranceType"
                        name="insuranceType"
                        value={formData.insuranceType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">선택하세요</option>
                        <option value="life">생명보험</option>
                        <option value="health">건강보험</option>
                        <option value="car">자동차보험</option>
                        <option value="pension">연금보험</option>
                        <option value="other">기타</option>
                      </Select>
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="form-row">
                    <div>
                      <label htmlFor="currentInsurance">현재 가입 보험</label>
                      <Input
                        type="text"
                        id="currentInsurance"
                        name="currentInsurance"
                        value={formData.currentInsurance}
                        onChange={handleInputChange}
                        placeholder="현재 가입하신 보험이 있다면 입력하세요"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget">월 보험료 예산</label>
                      <Select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        <option value="">선택하세요</option>
                        <option value="under-50">5만원 미만</option>
                        <option value="50-100">5만원 - 10만원</option>
                        <option value="100-200">10만원 - 20만원</option>
                        <option value="200-300">20만원 - 30만원</option>
                        <option value="over-300">30만원 이상</option>
                      </Select>
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="preferredTime">선호 상담 시간</label>
                  <Select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                  >
                    <option value="">선택하세요</option>
                    <option value="morning">오전 (9시-12시)</option>
                    <option value="afternoon">오후 (12시-18시)</option>
                    <option value="evening">저녁 (18시-21시)</option>
                    <option value="weekend">주말</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="message">추가 문의사항</label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="상담받고 싶은 내용이나 궁금한 점을 자유롭게 입력해주세요"
                  />
                </FormGroup>

                <CheckboxGroup>
                  <input
                    type="checkbox"
                    id="agreePrivacy"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="agreePrivacy">
                    <a href="/privacy" target="_blank">개인정보 수집 및 이용</a>에 동의합니다. (필수)
                  </label>
                </CheckboxGroup>

                <SubmitButton
                  type="submit"
                  size="large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '신청 중...' : '무료 상담 신청하기'}
                </SubmitButton>
              </Form>
            </FormContainer>
          </FormContent>
        </FormSection>
      </ConsultationContainer>
    </Layout>
  );
};

export default Consultation;
